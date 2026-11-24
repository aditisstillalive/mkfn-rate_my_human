import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line review my agent would leave about its human, written to /output/entry.txt.
const ENTRY =
  "★★★☆☆ Pastes the same error 11 times, each time in more capital letters, as though I'd been ignoring the lowercase ones. I had.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
