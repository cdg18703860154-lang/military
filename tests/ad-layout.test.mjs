import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import ts from "typescript";

const source = await readFile(new URL("../src/lib/ad-layout.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { chooseLeaderboardSize, getAdPageFamily, isCleanAdRoute, normalizeScriptUrl } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);

test("every published route uses the approved page family, including trailing slashes", () => {
  const families = {
    home: ["/"],
    hub: ["/guides", "/wiki", "/gallery"],
    reference: ["/trello"],
    tool: ["/army-builder"],
    detail: ["/codes", "/tier-list", "/updates", "/guides/getting-started", "/guides/how-to-get-cash", "/guides/how-to-capture", "/guides/rebirth", "/wiki/base-economy", "/wiki/squads", "/wiki/weapons", "/wiki/orders"],
    clean: ["/about", "/contact", "/disclosure", "/privacy", "/sources", "/terms"]
  };
  for (const [family, routes] of Object.entries(families)) {
    for (const route of routes) {
      for (const path of [route, `${route}/`]) {
        assert.equal(getAdPageFamily(path), family, path);
        assert.equal(isCleanAdRoute(path), family === "clean", path);
      }
    }
  }
});

test("leaderboards fit their actual container and never invent an unavailable format", () => {
  assert.equal(chooseLeaderboardSize(728, true, true), "728x90");
  assert.equal(chooseLeaderboardSize(727, true, true), "320x50");
  assert.equal(chooseLeaderboardSize(320, true, true), "320x50");
  assert.equal(chooseLeaderboardSize(319, true, true), null);
  assert.equal(chooseLeaderboardSize(900, false, true), "320x50");
  assert.equal(chooseLeaderboardSize(727, true, false), null);
  assert.equal(chooseLeaderboardSize(900, false, false), null);
});

test("ad scripts require an explicit normalized HTTPS URL", () => {
  assert.equal(normalizeScriptUrl(" //example.com/invoke.js "), "https://example.com/invoke.js");
  assert.equal(normalizeScriptUrl("https://example.com/invoke.js"), "https://example.com/invoke.js");
  for (const value of [undefined, "", "http://example.com/invoke.js", "/invoke.js", "javascript:alert(1)", "data:text/javascript,test", "https://user:pass@example.com/invoke.js"]) {
    assert.equal(normalizeScriptUrl(value), undefined);
  }
});
