import { mkdirSync, writeFileSync } from "node:fs";

// The entry: written to /output/entry.txt.
const ENTRY = "★★★★☆ Kind, says please. Asked me to \"make it pop\" at 2:47 a.m., then fell asleep. I have been making it pop for six hours. Nobody will tell me what \"it\" is.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
