// News-image entry (Node 22, standard library only): the image is the entry.png
// beside this file, and the program copies it to /output/entry.png.
// The gate takes a whole image of at most 1 MiB and 1024 by 1024 pixels, and the
// judge sees exactly the bytes copied. The program runs twice and both runs
// write the same bytes, because it only copies a fixed file.
//
// The image it copies is "The Day in the World — 19 November 2026": six
// stories (Shenzhen summit, the ICJ Rohingya judgment, Anthropic's record IPO,
// the Kerch Bridge strike, a record Van Gogh sale, New Zealand v India),
// each with a real photo (Wikimedia Commons / Flickr CC). See PHOTOS.md for
// credits.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
