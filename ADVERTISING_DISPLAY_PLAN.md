# Advertising Display Plan

This site uses the station Adsterra layout standard for Military Army Tycoon.

## Route Families

| pageFamily | routes | visibleSlots | maxVisibleSlots |
|---|---|---|---|
| home | / | top_responsive_leaderboard, mid_native_inline, bottom_300x250 | 3 |
| commercial_hub | /codes, /tier-list, /trello, /updates | top_responsive_leaderboard, mid_native_inline, bottom_300x250 | 3 |
| guide_wiki_index | /guides, /wiki | top_responsive_leaderboard, mid_native_inline, bottom_300x250 | 3 |
| guide_wiki_topic | /guides/*, /wiki/* | top_responsive_leaderboard, mid_native_inline, bottom_300x250 | 3 |
| planned_long_tail | pageGenerationPlan publishable routes | top_responsive_leaderboard, mid_native_inline, bottom_300x250 | 3 |
| interactive_tool | /calculator, /squad-planner, /resource-calculator | tool_support_leaderboard, tool_bottom_300x250 | 2 |
| clean_trust | /about, /contact, /disclosure, /privacy, /sources, /terms | none | 0 |

## Global Gates

- Popunder: disabled by default, delayed 30000 ms, requires at least 2 session pageviews, and is suppressed on cleanRoutes.
- SocialBar: disabled by default, requires a real script URL, and is suppressed on cleanRoutes.
- 160x600 rail: disabled by default, wide desktop only, and is suppressed on cleanRoutes.

## Clean Routes

/about, /contact, /disclosure, /privacy, /sources, /terms

## Core Units

728x90_1, 320x50_1, 300x250_1, NativeBanner_1, Popunder_1

## Measurement

Track ad_slot_viewed, ad_script_loaded, ad_script_error, ad_empty_after_5s, and ad_slot_collapsed, then compare Adsterra revenue, impressions, CTR, CPM, and revenue per 1,000 pageviews by placement, country, device, and page family. A configured slot that does not render a creative must collapse after the bounded fill timeout instead of leaving a blank shell.
