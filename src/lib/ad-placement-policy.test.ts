import assert from "node:assert/strict";
import test from "node:test";
import { getAdLayoutPolicy, isAdEligibleRoute, selectBottomBannerSize, selectLeaderboardSize } from "./ad-layout.ts";

test("the phone banner belongs only to the fixed bottom slot", () => {
  assert.equal(selectLeaderboardSize(728, { desktop: true, mobile: true }, 767), null);
  for (const viewport of [390, 767]) {
    assert.equal(selectLeaderboardSize(740, { desktop: false, mobile: true }, viewport), null);
    assert.equal(selectBottomBannerSize(viewport, 340, { desktop: true, mobile: true }), "320x50");
  }
  assert.equal(selectLeaderboardSize(700, { desktop: true, mobile: true }, 768), "320x50");
  assert.equal(selectBottomBannerSize(768, 700, { desktop: true, mobile: true }), "468x60");
});

test("the bottom slot requires the selected inventory and enough real space", () => {
  assert.equal(selectBottomBannerSize(390, 319, { desktop: true, mobile: true }), null);
  assert.equal(selectBottomBannerSize(1024, 467, { desktop: true, mobile: true }), null);
  assert.equal(selectBottomBannerSize(1024, 900, { desktop: false, mobile: true }), null);
  assert.equal(selectBottomBannerSize(390, 900, { desktop: true, mobile: false }), null);
  assert.equal(selectBottomBannerSize(Number.NaN, 900, { desktop: true, mobile: true }), null);
});

test("all trust routes are clean while hubs and tools stay rail-free", () => {
  for (const path of ["/about", "/contact", "/disclosure", "/privacy/", "/sources", "/terms", "/cookie-policy", "/disclaimer", "/_not-found"]) {
    assert.equal(isAdEligibleRoute(path), false, path);
    assert.equal(getAdLayoutPolicy(path).desktopRails, false, path);
  }
  for (const path of ["/", "/guides", "/wiki", "/gallery", "/army-builder", "/trello"]) {
    assert.equal(isAdEligibleRoute(path), true, path);
    assert.equal(getAdLayoutPolicy(path).desktopRails, false, path);
  }
  assert.equal(getAdLayoutPolicy("/guides/getting-started").desktopRails, true);
});

test("unknown URLs and missing nested details never mount ads", () => {
  for (const path of ["/missing-review/", "/guides/missing/", "/wiki/missing/"]) {
    assert.equal(isAdEligibleRoute(path), false, path);
    assert.deepEqual(getAdLayoutPolicy(path), { inlineSlots: 0, desktopRails: false });
  }
});
