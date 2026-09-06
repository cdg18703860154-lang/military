import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the homepage separates its inline ads with complete useful sections", async () => {
  const page = await read("src/app/page.tsx");
  const top = page.indexOf("<AdsterraArticleTop />");
  const systems = page.indexOf('<section data-home-module="systems"');
  const mid = page.indexOf("<AdsterraArticleMid />");
  const discovery = page.indexOf('<section data-home-module="discover"');
  const bottom = page.indexOf("<AdsterraArticleBottom />");
  const faq = page.indexOf('<section data-home-faq="true"');
  assert.ok(top > page.indexOf("<h1"));
  assert.ok(top < systems && systems < mid && mid < discovery);
  assert.ok(discovery < bottom && bottom < faq);
});

test("the Army Builder completes its interaction before the first ad", async () => {
  const page = await read("src/app/army-builder/page.tsx");
  const result = page.indexOf('<section data-asset-module="tool-result" aria-live="polite"');
  const top = page.indexOf("<AdsterraToolAd />");
  const explanation = page.indexOf('<section data-tool-methodology="true"');
  const bottom = page.indexOf("<AdsterraToolBottom />");
  assert.ok(result >= 0 && result < top && top < explanation && explanation < bottom);
  assert.equal((page.match(/<AdsterraTool(?:Ad|Bottom) \/>/g) || []).length, 2);
});

test("clean routes contain no page ad placements", async () => {
  for (const route of ["about", "contact", "disclosure", "privacy", "sources", "terms"]) {
    assert.doesNotMatch(await read(`src/app/${route}/page.tsx`), /<Adsterra/);
  }
});
