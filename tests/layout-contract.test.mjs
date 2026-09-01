import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function read(relativePath) {
  return readFile(new URL(relativePath, projectRoot), "utf8");
}

test("the shared route scaffold keeps the homepage single-column and inner pages in an empty-rail grid", async () => {
  const scaffold = await read("src/components/layout/PageScaffold.tsx");
  const layout = await read("src/app/layout.tsx");
  const css = await read("src/app/globals.css");

  assert.match(scaffold, /usePathname/);
  assert.match(scaffold, /pathname === "\/"/);
  assert.equal((scaffold.match(/data-empty-rail/g) || []).length, 2);
  assert.match(layout, /<PageScaffold>\{children\}<\/PageScaffold>/);
  assert.doesNotMatch(layout, /AdsterraStickyRail/);

  assert.match(css, /\.page-scaffold-home\s*\{/);
  assert.match(css, /\.page-scaffold-inner\s*\{/);
  assert.match(css, /grid-template-columns:\s*minmax\([^;]+\)\s+minmax\(0,\s*58rem\)\s+minmax\([^;]+\)/);
  assert.match(css, /\[data-empty-rail\]/);
  assert.match(css, /@media\s*\(max-width:\s*860px\)/);
});

test("the homepage hero uses the exact-game cover and fills the first viewport", async () => {
  const css = await read("src/app/globals.css");

  assert.match(css, /main\[data-page-role="homepage-product"\]/);
  assert.match(css, /url\("\/game-cover\.png"\)/);
  assert.match(css, /min-height:\s*calc\(100svh\s*-\s*4\.5rem\)/);
});

test("every static support route owns its social metadata", async () => {
  const routes = ["about", "contact", "disclosure", "privacy", "terms", "trello", "updates"];

  for (const route of routes) {
    const page = await read(`src/app/${route}/page.tsx`);
    assert.match(page, /openGraph:/, `${route} must define Open Graph metadata`);
    assert.match(page, /twitter:/, `${route} must define Twitter metadata`);
    if (route === "trello" || route === "updates") {
      assert.match(page, new RegExp(`"route": "/${route}"`), `${route} must expose its route to metadata`);
      assert.match(page, /url: `\$\{siteConfig\.domain\}\$\{statusPage\.route\}`/, `${route} must own its social URL`);
    } else {
      assert.match(page, new RegExp(`url: .*\\$\\{siteConfig\\.domain\\}.*${route}`), `${route} must own its social URL`);
    }
  }
});

test("the tier list hands team-combo planning to the Army Builder", async () => {
  const page = await read("src/app/tier-list/page.tsx");

  assert.match(page, /data-tier-team-combo="true"/);
  assert.match(page, /team combo/i);
  assert.match(page, /team build/i);
  assert.match(page, /href="\/army-builder"/);
  assert.doesNotMatch(page, /s tier/i);
});
