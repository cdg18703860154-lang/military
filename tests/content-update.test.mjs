import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const paths = [
  "src/app/page.tsx",
  "src/app/codes/page.tsx",
  "src/app/guides/getting-started/page.tsx",
  "src/app/guides/how-to-get-cash/page.tsx",
  "src/app/guides/how-to-capture/page.tsx",
  "src/app/guides/rebirth/page.tsx",
  "src/app/wiki/orders/page.tsx",
  "src/app/wiki/base-economy/page.tsx",
  "src/app/wiki/squads/page.tsx",
  "src/app/wiki/weapons/page.tsx",
  "src/app/updates/page.tsx",
  "src/app/tier-list/page.tsx",
  "src/app/army-builder/page.tsx",
  "src/app/sources/page.tsx",
  "src/app/about/page.tsx"
];

const forbidden = [
  "the checked answer",
  "Checked detail",
  "checked anchors",
  "Checked Codes terms",
  "Checked Field Hub terms",
  "After the direct answer",
  "Apply the evidence in the live game",
  "Use the checked Roblox screen as the final confirmation",
  "No active codes collected from the current sources"
];

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("public content no longer exposes research-template language", async () => {
  const content = (await Promise.all(paths.map(read))).join("\n");
  for (const phrase of forbidden) {
    assert.doesNotMatch(content, new RegExp(phrase, "i"), phrase);
  }
});

test("Home and Codes share the dated two-code record", async () => {
  const [home, codes, current] = await Promise.all([
    read("src/app/page.tsx"),
    read("src/app/codes/page.tsx"),
    read("src/data/current-content.ts")
  ]);

  assert.match(home, /currentCodes/);
  assert.match(codes, /codeSummary/);
  assert.match(current, /code: "Bonus"/);
  assert.match(current, /code: "Joined"/);
  assert.match(current, /reportedReward: "50,000 Cash"/);
  assert.match(current, /sourceCheckedAt: "September 12, 2026 \(UTC\)"/);
  assert.match(current, /siteReviewedAt: "September 12, 2026 \(UTC\)"/);
});

test("global metadata does not emit a meta-keywords field", async () => {
  assert.doesNotMatch(await read("src/app/layout.tsx"), /\bkeywords\s*:/);
});
