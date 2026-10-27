# Advertising Display Plan

Military Army Tycoon uses the karinderya-ad-placement policy, adapted to its published routes. The bridge retrieves the domain's real GET CODE and generates `src/lib/adsterra.generated.ts`; placement IDs and script URLs must never be invented or copied from another domain.

## Route Families

| Page family | Routes | Desktop at least 1280px | Below 1280px |
|---|---|---|---|
| Home | `/` | 3 inline, no rails | Up to 3 inline |
| Hubs | `/guides`, `/wiki`, `/gallery` | 3 inline, no rails | Up to 3 inline |
| Details | `/codes`, `/tier-list`, `/updates`, `/guides/*`, `/wiki/*` | 3 inline plus left 160x600 and right 160x300 | Up to 3 inline; no rail scripts |
| Reference | `/trello` | 3 inline, no rails | Up to 3 inline |
| Interactive tool | `/army-builder` | 2 inline, no rails | Up to 2 inline |
| Clean trust | `/about`, `/contact`, `/disclosure`, `/privacy`, `/sources`, `/terms` | 0 | 0 |

Clean routes take precedence. New collection routes remain single-column; classify new tools and articles in `src/lib/ad-layout.ts` and update the route tests and this plan together.

`ArticleThreeColumnLayout` owns the rails. All useful content stays in the center. Rails are sticky within the article grid and mount only when the 1280px media query, inventory flag, and real unit configuration all permit them.

The inline order is responsive leaderboard, native, then 300x250. The first follows the direct answer or primary data. Complete useful sections separate the units. On the homepage, the native follows Core systems and the rectangle precedes the FAQ. The Army Builder's first ad follows the live decision result; its second follows the methodology, examples, and source information.

Leaderboard selection measures the real container: 728x90 when at least 728px fits, otherwise configured 320x50 when at least 320px fits, otherwise no creative. Banner padding must not reduce the available creative width.

## Global Gates

- The verified bridge explicitly enables Popunder and Social Bar for this user-approved rollout; HTTPS validation and clean-document gates still apply.
- Popunder waits at least 30 seconds, requires at least two session pageviews, and loads at most once per session. Client navigation counts toward the pageview gate.
- Social Bar requires a real HTTPS script URL. Clean routes suppress both global formats.
- The generated sticky-rail flag enables the configured article rails only.
- SmartLink is a no-op unless an explicitly labelled sponsored CTA is added.
- Neither the global fallback nor a viewport-fixed rail belongs in the root layout.

## Clean Routes

/about, /contact, /disclosure, /privacy, /sources, /terms

## Core Units

728x90_1, 320x50_1, 300x250_1, NativeBanner_1, 160x600_1, 160x300_1.

## Measurement

Track only slot and creative lifecycle events; never attach checklist inputs or results. Preserve Advertisement labels and reserved dimensions. Title unnamed iframes and name unnamed links without changing destinations. Serialize banners around the vendor's shared `window.atOptions`; release a cancelled or failed request so it cannot block later slots. Empty creatives collapse after the existing bounded timeout.

## Verification

Run `pnpm test`, `pnpm lint`, and `pnpm build`. Check 390px and 1440px views, detail rail requests, useful content between inline units, Army Builder interaction, and every clean route after client navigation. Publishing requires authorization for the current change.

## October 27 fixed-bottom rollout

A single shared fixed banner follows the footer outside the article grid. Below 768px the real 320x50 unit belongs only to this bottom slot, by the user’s explicit exception; article leaderboards are disabled while native and 300x250 remain. At 768px and above bottom uses 468x60 and inline may use 728x90 or 320x50 according to actual container width. Same-origin banner frames isolate each Window’s serialized provider queue, including late responses after pending resize cancellation. Missing configuration and bounded no-fill collapse their shells and bottom reservation. The reservation measures the full host including label, gap and safe area; menus and essential dialogs hide both.

Only published routes opt into ads. Unknown URLs, trust routes, cookie/disclaimer aliases and 404s remain clean. Crossing between clean and advertising routes starts a new document to destroy unknown provider timers/listeners/nodes; ordinary content navigation preserves the shared bottom. Native watches its host so provider replacement of the original container remains visible.

Bridge generation: `node scripts/generate-adsterra-config.mjs <completed-bridge-result.json>`. Never hand edit generated public configuration.

Production baseline: the existing September 12 worktree contains the Active code labels and GamesDataHub resource card already visible in the immutable production home/codes snapshots. This release preserves those exact deployed values and their component/CSS support, without writing to the original worktree.
