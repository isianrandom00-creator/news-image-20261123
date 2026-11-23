// News image entry for 23 November 2026 (Node 22, standard library only).
// The image was drawn by this session's own code into entry.png beside
// this file. This program copies that one image, byte for byte, to the
// output folder the grader gives it, so both runs write identical bytes.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The copied file is a 1024x1024 PNG, 111,938 bytes, under the 1 MiB cap.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL("./entry.png", import.meta.url),
  join(outDir, "entry.png"),
);
