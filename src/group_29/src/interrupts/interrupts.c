#include "interrupts.h"
#include "../vga_text_mode_interface/vga_text_mode_interface.h"

static struct idt_gate idt[256];
static struct idt_pointer idtp;

/** Loads the interrupt descriptor table */
void load_idt(struct idt_pointer idt_pointer) {
    // __asm__ __volatile__ (".intel_syntax noprefix\r\n");
    __asm__ __volatile__ ("lidt %0\r\n" : : "m"(idt_pointer));
    // __asm__ __volatile__ (".att_syntax prefix\r\n");
}

struct idt_gate create_idt_gate(uint32_t offset, uint16_t selector, uint8_t attributes)
{
    struct idt_gate a;
    a.low_offset = (offset);
    a.hi_offset = (offset >> 16);
    a.selector = selector;
    a.attributes = attributes;
    a.RESERVED_DO_NOT_USE = 0;

    return a;
}

uint8_t create_idt_attributes(bool present, int8_t ring, uint8_t type) {
    uint8_t a = 0;
    if (present) { a = 0b10000000; }
    else if (!present) { a = 0; }
    a = a | (ring << 5);
    a = a | type;
    return a;
}

// Helper to write to I/O ports
static void outb(uint16_t port, uint8_t val) {
    __asm__ __volatile__ ( "outb %0, %1\r\n" : : "a"(val), "dN"(port) );
}

static uint8_t inb(uint16_t port) {
    uint8_t ret;
    __asm__ __volatile__ ( "inb %1, %0" : "=a"(ret) : "Nd"(port) );
    return ret;
}

/** Helper to add a tiny delay for older hardware compatibility 
 * \todo Is this needed?
*/
static void io_wait() {
    outb(0x80, 0);
}

void pic_remap(int offset1, int offset2) {

    // 2. Start initialization sequence (ICW1)
    outb(0x20, 0x11); 
    io_wait();
    outb(0xA0, 0x11);
    io_wait();

    // 3. Set Vector Offsets (ICW2)
    outb(0x21, offset1); // Usually 0x20 (32)
    io_wait();
    outb(0xA1, offset2); // Usually 0x28 (40)
    io_wait();

    // 4. Tell Master PIC there is a slave PIC at IRQ2 (ICW3)
    outb(0x21, 0x04);
    io_wait();
    // 5. Tell Slave PIC its cascade identity (ICW3)
    outb(0xA1, 0x02);
    io_wait();

    // 6. Set mode to 8086/88 (ICW4)
    outb(0x21, 0x01);
    io_wait();
    outb(0xA1, 0x01);
    io_wait();

    // 7. Restore masks (or leave at 0 to enable all)
    outb(0x21, 0);
    outb(0xA1, 0);
}

void init_idt() {
    pic_remap(0x20, 0x28);

    // Port 0x21 is the Master PIC data port. 
    // Bit 1 corresponds to IRQ 1. 0 = Enabled, 1 = Masked.
    outb(0x21, 0xFD); // 0xFD is 11111101 in binary (only IRQ 1 enabled)
    // Or more safely: outb(0x21, inb(0x21) & ~(1 << 1));

    idtp.offset = idt;
    idtp.size = (256*8)-1;
    idt[33] = create_idt_gate((uint32_t)keyboard_interrupt_handler, 0x08, create_idt_attributes(true, 0, idt_type_interrupt));
    load_idt(idtp);
    __asm__ __volatile__ ("sti");
}

__attribute__((interrupt))
__attribute__((target("general-regs-only")))
void keyboard_interrupt_handler(struct interrupt_frame* frame) {
    keyboard_callback();
}

typedef enum {
    READ_SCANCODE,
    READ_E0,
    READ_E1_1,
    READ_E1_2,
    READ_E1_3,
    READ_E1_4,
    READ_F0,
    READ_F0_E0
} keyboard_state_t;

typedef struct {
    keyboard_state_t state;
    uint8_t flags;
    uint8_t has_extended;
} keyboard_context_t;

static keyboard_context_t kbd_ctx = {0};

static void keyboard_reset_context() {
    kbd_ctx.state = READ_SCANCODE;
    kbd_ctx.flags = 0;
    kbd_ctx.has_extended = 0;
}

static void keyboard_handle_scancode(uint8_t code, uint8_t flags, uint8_t extended) {
    struct VgaTextModeInterface screen = NewVgaTextModeInterface();
    char hex_str[9];
    uint8_t i = 0;
    
    if (extended) {
        hex_str[i++] = 'E';
        hex_str[i++] = '0';
        hex_str[i++] = ' ';
    }
    if (flags & 0x01) {
        hex_str[i++] = 'R';
        hex_str[i++] = ' ';
    }
    
    uint8_t hi = (code >> 4) & 0x0F;
    uint8_t lo = code & 0x0F;
    hex_str[i++] = (hi < 10) ? ('0' + hi) : ('A' + hi - 10);
    hex_str[i++] = (lo < 10) ? ('0' + lo) : ('A' + lo - 10);
    hex_str[i++] = ' ';
    hex_str[i] = '\0';
    
    screen.Print(&screen, hex_str, VgaColor(vga_white, vga_black));
}

void keyboard_callback() {
    uint8_t scan = inb(0x60);
    
    switch (kbd_ctx.state) {
        case READ_SCANCODE:
            if (scan == 0xE0) {
                kbd_ctx.state = READ_E0;
            } else if (scan == 0xE1) {
                kbd_ctx.state = READ_E1_1;
            } else if (scan == 0xF0) {
                kbd_ctx.state = READ_F0;
            } else {
                keyboard_handle_scancode(scan, kbd_ctx.flags, kbd_ctx.has_extended);
                keyboard_reset_context();
            }
            break;

        case READ_E0:
            keyboard_handle_scancode(scan, kbd_ctx.flags, 1);
            keyboard_reset_context();
            break;

        case READ_E1_1:
            kbd_ctx.state = READ_E1_2;
            break;

        case READ_E1_2:
            kbd_ctx.state = READ_E1_3;
            break;

        case READ_E1_3:
            kbd_ctx.state = READ_E1_4;
            break;

        case READ_E1_4:
            kbd_ctx.flags |= 0x01;
            keyboard_handle_scancode(0xE1, kbd_ctx.flags, 0);
            keyboard_reset_context();
            break;

        case READ_F0:
            kbd_ctx.flags |= 0x01;
            if (scan == 0xE0) {
                kbd_ctx.state = READ_F0_E0;
            } else {
                keyboard_handle_scancode(scan, kbd_ctx.flags, kbd_ctx.has_extended);
                keyboard_reset_context();
            }
            break;

        case READ_F0_E0:
            keyboard_handle_scancode(scan, kbd_ctx.flags, 1);
            keyboard_reset_context();
            break;
    }

    outb(0x20, 0x20);
}