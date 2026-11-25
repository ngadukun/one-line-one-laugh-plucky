// One Line, One Laugh — u-plucky-finch-20-one-line-one-laugh-0ffe66ea
// Writes a single original funny line (<= 200 chars) to entry.txt
// in MAKEFUN_OUTPUT_DIR (defaults to /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my smart speaker for motivation — it read my bank statement out loud.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = LINE.trim();

if (line.length < 1 || line.length > 200) {
  console.error(`entry must be 1-200 characters, got ${line.length}`);
  process.exit(1);
}
if (line.includes("\n")) {
  console.error("entry must be a single line");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote entry.txt (${line.length} chars)`);
