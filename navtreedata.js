/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "My Project", "index.html", [
    [ "filesystem", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html", [
      [ "Tiny Persistent Filesystem – Implementation Summary", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md1", [
        [ "Goal", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md2", null ],
        [ "Design Overview", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md4", null ],
        [ "Why a Separate Disk", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md6", null ],
        [ "Why ATA PIO", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md8", [
          [ "Key “Magic Bits” (Hardware Control)", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md9", null ]
        ] ],
        [ "Filesystem Design", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md11", [
          [ "Why a Flat, Fixed Layout", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md12", null ]
        ] ],
        [ "On-Disk Layout", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md14", [
          [ "Superblock", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md15", null ],
          [ "File Table", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md17", null ],
          [ "Data Area", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md19", null ]
        ] ],
        [ "Allocation Strategy", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md21", [
          [ "Why this design?", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md22", null ]
        ] ],
        [ "File Operations", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md24", [
          [ "Write", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md25", null ],
          [ "Read", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md27", null ]
        ] ],
        [ "Persistence Validation", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md29", null ],
        [ "Key Design Decisions", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md31", null ],
        [ "Limitations (Intentional)", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md33", null ],
        [ "Future Work", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md35", null ],
        [ "Key Takeaway", "d6/dba/md_src_2group__29_2Documentation_2filesystem.html#autotoc_md37", null ]
      ] ]
    ] ],
    [ "Kernel Heap Memory Module", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html", [
      [ "Overview", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md39", null ],
      [ "How the heap starts", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md40", null ],
      [ "Public API", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md41", null ],
      [ "Heap structure", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md42", null ],
      [ "Initialization flow", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md43", null ],
      [ "Alignment", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md44", null ],
      [ "How malloc() works", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md45", null ],
      [ "Block splitting", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md46", null ],
      [ "How free() works", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md47", null ],
      [ "Coalescing", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md48", null ],
      [ "Debug output", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md49", null ],
      [ "How it is used in the kernel", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md50", null ],
      [ "How to use the allocator", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md51", null ],
      [ "Limitations of the current design", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md52", null ],
      [ "Why this is still good enough", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md53", null ],
      [ "Possible future improvements", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md54", null ],
      [ "Summary", "d3/d2c/md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md55", null ]
    ] ],
    [ "PC Speaker Music Playback", "df/d41/md_src_2group__29_2Documentation_2pc-sound.html", [
      [ "What we added", "df/d41/md_src_2group__29_2Documentation_2pc-sound.html#autotoc_md57", null ],
      [ "How it works", "df/d41/md_src_2group__29_2Documentation_2pc-sound.html#autotoc_md58", [
        [ "Song data", "df/d41/md_src_2group__29_2Documentation_2pc-sound.html#autotoc_md59", null ],
        [ "PIT timing", "df/d41/md_src_2group__29_2Documentation_2pc-sound.html#autotoc_md60", null ],
        [ "PC speaker playback", "df/d41/md_src_2group__29_2Documentation_2pc-sound.html#autotoc_md61", null ],
        [ "Boot integration", "df/d41/md_src_2group__29_2Documentation_2pc-sound.html#autotoc_md62", null ]
      ] ]
    ] ],
    [ "Unity Test <img src=\"https://github.com/ThrowTheSwitch/Unity/workflows/CI/badge.svg\" alt=\"CI\"/>", "d1/d88/md_src_2group__29_2include_2unity_2README.html", [
      [ "Getting Started", "d1/d88/md_src_2group__29_2include_2unity_2README.html#autotoc_md64", null ],
      [ "Unity Assertion Summary", "d1/d88/md_src_2group__29_2include_2unity_2README.html#autotoc_md65", [
        [ "Basic Validity Tests", "d1/d88/md_src_2group__29_2include_2unity_2README.html#autotoc_md66", null ],
        [ "Numerical Assertions: Integers", "d1/d88/md_src_2group__29_2include_2unity_2README.html#autotoc_md67", null ],
        [ "Arrays", "d1/d88/md_src_2group__29_2include_2unity_2README.html#autotoc_md68", null ],
        [ "Numerical Assertions: Bitwise", "d1/d88/md_src_2group__29_2include_2unity_2README.html#autotoc_md69", null ],
        [ "Numerical Assertions: Floats", "d1/d88/md_src_2group__29_2include_2unity_2README.html#autotoc_md70", null ],
        [ "String Assertions", "d1/d88/md_src_2group__29_2include_2unity_2README.html#autotoc_md71", null ],
        [ "Pointer Assertions", "d1/d88/md_src_2group__29_2include_2unity_2README.html#autotoc_md72", null ],
        [ "Memory Assertions", "d1/d88/md_src_2group__29_2include_2unity_2README.html#autotoc_md73", null ],
        [ "_MESSAGE", "d1/d88/md_src_2group__29_2include_2unity_2README.html#autotoc_md74", null ]
      ] ]
    ] ],
    [ "README", "d2/dca/md_src_2group__29_2README.html", null ],
    [ "README", "de/da1/md_src_2group__29_2src_2arch_2i386_2README.html", null ],
    [ "README", "d0/dfa/md_src_2group__29_2src_2arch_2x86__64_2README.html", null ],
    [ "README", "d6/d07/md_src_2group__29_2src_2README.html", null ],
    [ "Todo List", "dd/da0/todo.html", null ],
    [ "Deprecated List", "da/d58/deprecated.html", null ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Variables", "functions_vars.html", "functions_vars" ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d3/d88/frequencies_8h.html#a93ce8ee6917e14280ee0e3cd115e0dee",
"d5/dba/multiboot2_8h.html#ad5e7a09f39f1f37e50be39000af2af4e",
"d6/db4/unity_8h.html#a2832c0e0f7aa4abf5a4582b3a03740b1",
"d6/db4/unity_8h.html#ab0c1569fbc9959795c979d3b7780d127",
"d7/de5/structmultiboot__tag__apm.html#ac9ce4f6a6baa2cd0fea47ab1b4802e7b",
"d8/de3/unity__internals_8h.html#a52b6d0ed023c20279b5cf7d6de75bf87",
"d8/de3/unity__internals_8h.html#afee1e18090d3dba33ca2573759911a03",
"df/dd8/stdint_8h.html#aef44329758059c91c76d334e8fc09700"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';