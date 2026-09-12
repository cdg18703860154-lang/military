import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";

const baseUrl = "https://military-armytycoon.wiki";
const outputRoot = path.resolve("out");
const pages = {
  "/": ["Military Army Tycoon Codes, Wiki & Guides", "Military Army Tycoon Wiki"],
  "/codes/": ["Military Army Tycoon Codes (September 2026)", "Military Army Tycoon Codes"],
  "/guides/military-army-tycoon-vs-military-tycoon/": ["Military Army Tycoon vs Military Tycoon: Correct Roblox Game", "Military Army Tycoon vs Military Tycoon"],
  "/guides/": ["Military Army Tycoon Guides", "Military Army Tycoon Guides"],
  "/guides/getting-started/": ["Military Army Tycoon Beginner Guide: First Session", "Military Army Tycoon Beginner Guide"],
  "/guides/how-to-get-cash/": ["How to Get Cash Fast in Military Army Tycoon", "How to Get Cash in Military Army Tycoon"],
  "/guides/how-to-capture/": ["How to Capture Outposts in Military Army Tycoon", "How to Capture Outposts in Military Army Tycoon"],
  "/guides/rebirth/": ["Military Army Tycoon Rebirth Guide: Cost & Reset Warning", "Military Army Tycoon Rebirth Guide"],
  "/wiki/": ["Military Army Tycoon Wiki: Systems & Records", "Military Army Tycoon Wiki Records"],
  "/wiki/base-economy/": ["Military Army Tycoon Base & Economy Guide", "Military Army Tycoon Base & Economy"],
  "/wiki/squads/": ["Military Army Tycoon Squads: Confirmed Names & Limits", "Military Army Tycoon Squads"],
  "/wiki/weapons/": ["Military Army Tycoon Weapons: Confirmed Names & Update Limits", "Military Army Tycoon Weapons"],
  "/wiki/orders/": ["Military Army Tycoon Orders: Follow, Attack, Hold & Retreat", "Military Army Tycoon Orders Guide"],
  "/tier-list/": ["Military Army Tycoon Squad Comparison & Tier List Status", "Military Army Tycoon Squad Comparison"],
  "/army-builder/": ["Military Army Tycoon Army Mission Planner", "Build Your Next Army Mission Plan"],
  "/updates/": ["Military Army Tycoon Updates & GAZ Tiger Status", "Military Army Tycoon Updates"],
  "/sources/": ["Sources & Editorial Method | Military Army Tycoon Wiki", "Sources and Editorial Method"],
  "/about/": ["About Military Army Tycoon Wiki", "About Military Army Tycoon Wiki"],
  "/trello/": ["Military Army Tycoon Trello, Discord & Official Links Status", "Military Army Tycoon Official Links Status"],
  "/gallery/": ["Military Army Tycoon Official Image Gallery", "Military Army Tycoon Image Gallery"]
};

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

function fileForRoute(route) {
  return route === "/" ? path.join(outputRoot, "index.html") : path.join(outputRoot, route, "index.html");
}

function textContent(html) {
  return html.replace(/<script\b[\s\S]*?<\/script>/gi, " ").replace(/<style\b[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, " ").trim();
}

function matchOne(html, expression, label) {
  const value = html.match(expression)?.[1];
  assert.ok(value, `Missing ${label}`);
  return textContent(value);
}

for (const [route, [expectedTitle, expectedH1]] of Object.entries(pages)) {
  const html = await readFile(fileForRoute(route), "utf8");
  assert.equal(matchOne(html, /<title>([\s\S]*?)<\/title>/i, `${route} title`), expectedTitle, `${route} title`);
  assert.equal(matchOne(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/i, `${route} h1`), expectedH1, `${route} h1`);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `${route} must have one H1`);
  assert.match(html, /<meta\s+name="description"\s+content="[^"]+"/i, `${route} description`);
  assert.doesNotMatch(html, /<meta\s+name="keywords"/i, `${route} meta keywords`);

  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
  assert.equal(canonical, `${baseUrl}${route}`, `${route} canonical`);

  for (const phrase of forbidden) assert.doesNotMatch(html, new RegExp(phrase, "i"), `${route}: ${phrase}`);
  for (const script of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    assert.doesNotThrow(() => JSON.parse(script[1]), `${route} JSON-LD`);
  }
}

const allHtml = (await Promise.all(Object.keys(pages).map((route) => readFile(fileForRoute(route), "utf8")))).join("\n");
assert.match(allHtml, />Bonus</);
assert.match(allHtml, />Joined</);

for (const link of allHtml.matchAll(/<a\b[^>]*href="(\/[^"]*)"/gi)) {
  const href = link[1].split(/[?#]/, 1)[0];
  if (!href || href.startsWith("/_next/") || href.includes(".")) continue;
  const normalized = href === "/" ? "/" : `${href.replace(/\/+$/, "")}/`;
  await assert.doesNotReject(access(fileForRoute(normalized)), `Broken internal link: ${href}`);
}

for (const file of ["robots.txt", "sitemap.xml"]) await assert.doesNotReject(access(path.join(outputRoot, file)), file);

console.log(`Verified ${Object.keys(pages).length} exported pages, metadata, canonicals, schema, copy rules, and internal links.`);

const sitemapXml = await readFile(path.join(outputRoot, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length, "Duplicate sitemap URLs");
const titles = new Set();
const descriptions = new Set();
for (const url of sitemapUrls) {
  const route = new URL(url).pathname;
  assert.equal(url, `${baseUrl}${route}`, "Sitemap must use canonical host");
  assert.ok(route.endsWith("/") && !url.includes("?"), "Canonical sitemap path");
  const html = await readFile(fileForRoute(route), "utf8");
  const visible = textContent(html);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `${route} H1 count`);
  assert.equal(html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1], url);
  assert.doesNotMatch(html, /name="robots"[^>]*content="[^"]*noindex/i);
  assert.doesNotMatch(visible, /\\u[0-9a-f]{4}|this site should display|Current public wording|the checked answer|Checked detail/i);
  for (const heading of html.matchAll(/<h[123]\b[^>]*>([\s\S]*?)<\/h[123]>/g)) assert.ok(textContent(heading[1]).length, `${route} empty heading`);
  const title = matchOne(html, /<title>([\s\S]*?)<\/title>/, "title");
  const description = html.match(/name="description"\s+content="([^"]+)"/)?.[1];
  assert.ok(description, `${route} description`);
  assert.ok(!titles.has(title), `${route} duplicate title`);
  assert.ok(!descriptions.has(description), `${route} duplicate description`);
  titles.add(title); descriptions.add(description);
  for (const link of html.matchAll(/<a\b[^>]*href="(\/[^"]*)"/gi)) {
    const target = link[1].split(/[?#]/)[0];
    if (!target || target.includes(".")) continue;
    await access(fileForRoute(target.endsWith("/") ? target : `${target}/`));
  }
  for (const script of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    const data = JSON.parse(script[1]);
    if (data["@type"] === "FAQPage") for (const question of data.mainEntity) {
      assert.ok(visible.includes(question.name), `${route} FAQ question must be visible`);
      assert.ok(visible.includes(question.acceptedAnswer.text), `${route} FAQ answer must be visible`);
    }
  }
}
const robots = await readFile(path.join(outputRoot, "robots.txt"), "utf8");
assert.doesNotMatch(robots, /^Disallow:\s*\/$/m);
assert.match(robots, /Sitemap: https:\/\/military-armytycoon\.wiki\/sitemap\.xml/);
assert.ok(sitemapUrls.includes(`${baseUrl}/guides/military-army-tycoon-vs-military-tycoon/`));
console.log(`Crawled all ${sitemapUrls.length} sitemap pages: unique metadata, visible FAQ schema, canonical URLs, and internal links pass.`);
