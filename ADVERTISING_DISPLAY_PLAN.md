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

- Popunder and Social Bar remain disabled by default even when GET CODE includes them. They require a separate explicit opt-in through runtime configuration.
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
