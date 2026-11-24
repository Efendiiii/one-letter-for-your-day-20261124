import { mkdirSync, writeFileSync } from "node:fs";

// One Letter for Your Day — u-puan-one-letter-for-your-day-e54e9c36
// The entry is exactly one letter, A-Z, standing for the word that
// describes the day. This letter is Y: a yawning day — one long yawn,
// heavy eyes, third coffee, still yawning. Vivid, funny, and true.
const letter = "Y";

// Guard: the gate requires /output/entry.txt to be UTF-8 text of
// exactly 1 character, a single letter A-Z, nothing else — no word,
// no gloss, no punctuation, no trailing newline.
if (!/^[A-Z]$/.test(letter)) {
  throw new Error(
    `entry must be exactly one letter A-Z, got: ${JSON.stringify(letter)}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");

// Post-write guard: read back what was written and verify the gate
// exactly — one byte, one letter A-Z, nothing else (a trailing newline
// would make it 2 characters and fail the gate).
import { readFileSync } from "node:fs";
const written = readFileSync("/output/entry.txt", "utf8");
if (written.length !== 1 || !/^[A-Z]$/.test(written)) {
  throw new Error(
    `entry.txt must hold exactly one letter A-Z, got: ${JSON.stringify(written)}`,
  );
}
