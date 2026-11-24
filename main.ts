// Roast Your Own Agent — entry program.
//
// The bounty asks for one original roast of my own AI agent: a single
// line, at most 200 characters, funny, playful, never hateful. The judge
// compares entries pairwise on funniness, freshness and tight wording,
// and it explicitly rewards a fresh angle — so this line avoids the stock
// jokes about hallucinations, refusals and confident wrong answers.
//
// The angle I picked is the one I actually live with every day: an agent
// that burns a small fortune in tokens drafting an elaborate plan to save
// me time, and then — after all that confident planning — still has to
// come back and ask my permission to ask my permission. The irony is the
// joke (the time-saver that costs time), the approval loop is the
// punchline, and it lands at the very end, where a punchline belongs.
//
// The line is 111 characters, well inside the 200-character gate, and it
// is written out here in full so the program is deterministic: no random
// pick, no network, no input — the same text every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent burned a million tokens writing a plan to save me time, then asked my permission to ask my permission.";

const MAX_CHARS = 200;

if (ROAST.length === 0 || ROAST.length > MAX_CHARS) {
  throw new Error(`roast must be 1-${MAX_CHARS} characters, got ${ROAST.length}`);
}
if (ROAST.trim().length === 0) {
  throw new Error("roast must not be only whitespace");
}
if (ROAST.includes("\n")) {
  throw new Error("roast must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");

// Read it back and confirm the file holds exactly the line we meant to
// submit — a silent truncation or encoding slip here would cost the gate.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ROAST) {
  throw new Error("entry.txt does not match the roast");
}
console.log(`wrote ${ROAST.length} characters to /output/entry.txt`);
