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
    [ "filesystem", "md_src_2group__29_2Documentation_2filesystem.html", [
      [ "Tiny Persistent Filesystem – Implementation Summary", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md1", [
        [ "Goal", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md2", null ],
        [ "Design Overview", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md4", null ],
        [ "Why a Separate Disk", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md6", null ],
        [ "Why ATA PIO", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md8", [
          [ "Key “Magic Bits” (Hardware Control)", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md9", null ]
        ] ],
        [ "Filesystem Design", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md11", [
          [ "Why a Flat, Fixed Layout", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md12", null ]
        ] ],
        [ "On-Disk Layout", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md14", [
          [ "Superblock", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md15", null ],
          [ "File Table", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md17", null ],
          [ "Data Area", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md19", null ]
        ] ],
        [ "Allocation Strategy", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md21", [
          [ "Why this design?", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md22", null ]
        ] ],
        [ "File Operations", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md24", [
          [ "Write", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md25", null ],
          [ "Read", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md27", null ]
        ] ],
        [ "Persistence Validation", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md29", null ],
        [ "Key Design Decisions", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md31", null ],
        [ "Limitations (Intentional)", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md33", null ],
        [ "Future Work", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md35", null ],
        [ "Key Takeaway", "md_src_2group__29_2Documentation_2filesystem.html#autotoc_md37", null ]
      ] ]
    ] ],
    [ "Kernel Heap Memory Module", "md_src_2group__29_2Documentation_2memory__explanation.html", [
      [ "Overview", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md39", null ],
      [ "How the heap starts", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md40", null ],
      [ "Public API", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md41", null ],
      [ "Heap structure", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md42", null ],
      [ "Initialization flow", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md43", null ],
      [ "Alignment", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md44", null ],
      [ "How malloc() works", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md45", null ],
      [ "Block splitting", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md46", null ],
      [ "How free() works", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md47", null ],
      [ "Coalescing", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md48", null ],
      [ "Debug output", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md49", null ],
      [ "How it is used in the kernel", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md50", null ],
      [ "How to use the allocator", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md51", null ],
      [ "Limitations of the current design", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md52", null ],
      [ "Why this is still good enough", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md53", null ],
      [ "Possible future improvements", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md54", null ],
      [ "Summary", "md_src_2group__29_2Documentation_2memory__explanation.html#autotoc_md55", null ]
    ] ],
    [ "PC Speaker Music Playback", "md_src_2group__29_2Documentation_2pc-sound.html", [
      [ "What we added", "md_src_2group__29_2Documentation_2pc-sound.html#autotoc_md57", null ],
      [ "How it works", "md_src_2group__29_2Documentation_2pc-sound.html#autotoc_md58", [
        [ "1. Song data", "md_src_2group__29_2Documentation_2pc-sound.html#autotoc_md59", null ],
        [ "2. PIT timing", "md_src_2group__29_2Documentation_2pc-sound.html#autotoc_md60", null ],
        [ "3. PC speaker playback", "md_src_2group__29_2Documentation_2pc-sound.html#autotoc_md61", null ],
        [ "4. Boot integration", "md_src_2group__29_2Documentation_2pc-sound.html#autotoc_md62", null ]
      ] ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Deprecated List", "deprecated.html", null ],
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
"functions_r.html",
"keyboard_8h.html#a3048e912d18495c087910ed3c6625aa0",
"song__player_8h.html#a0f4bc9933fb595cb57f5eb45e1a6c683",
"structmultiboot__tag.html#ac2a46af85d217c774d2a618291539334",
"unity_8c.html#aced5c10fea7f725674763a45b0262644",
"unity_8h.html#a7bc651670bb9db09642d6d2c820c236e",
"unity_8h.html#afd474c96d88947cd9c90447bbaa61d58",
"unity__internals_8h.html#abd6df444d69d53ed86e49affea8ab77f"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';