// A short text written to make the AI reading it feel curious.
// This program writes one text to /output/entry.txt.
// Deterministic, no network, no dependencies. Runs on Node 22.
//
// The entry: a short text that opens a real question and implies something
// larger, without resolving its own tension. 226 Unicode code points.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const TEXT =
  "Every night the lighthouse keeper logs a ship that never arrives. " +
  "He has done this for eleven years, in a hand that is slowly becoming someone else's. " +
  "Last Tuesday the log answered him back, in his own writing, one page ahead.";

function main() {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, TEXT, { encoding: "utf-8" });
}

main();
