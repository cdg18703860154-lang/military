import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Updates & GAZ Tiger Status";
const description = "Track the current Military Army Tycoon title, code checks, Roblox update metadata, dated gameplay evidence and unconfirmed Missions reports.";
const route = "/updates/";
export const metadata: Metadata = {
 title: { absolute: title }, description,
 alternates: { canonical: `${siteConfig.domain}${route}` },
 openGraph: { title, description, url: `${siteConfig.domain}${route}`, images: [`${siteConfig.domain}/opengraph-image`] },
 twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};
const faq = [
  {
    "q": "Was GAZ Tiger added in the September 5 update?",
    "a": "The official title contains [GAZ Tiger], and a metadata tracker lists September 5 as the update date. No accessible creator changelog directly connects the two or explains the feature."
  },
  {
    "q": "Are Missions confirmed?",
    "a": "Not to this site’s publication standard. A recent fan transcription reports Missions, but the direct source and independent confirmation were not obtained."
  },
  {
    "q": "Are Intervention Sniper and Riot Squad confirmed?",
    "a": "No. They remain single-source reports and are not in the confirmed Weapons or Squads tables."
  },
  {
    "q": "Are BONUS and JOINED still current?",
    "a": "Multiple sources checked through September 9 continue to list both, each for 50,000 Cash. This site has not independently redeemed them."
  },
  {
    "q": "Why does the code button say REDEME?",
    "a": "Several current guides and screenshots show that spelling in the game interface."
  },
  {
    "q": "Are there official patch notes?",
    "a": "No accessible detailed creator-controlled patch-note feed was confirmed during this review."
  },
  {
    "q": "Why keep older dated entries?",
    "a": "They show exactly what was observed and prevent an old result from being presented as a permanent current mechanic."
  }
];

export default function UpdatesPage() {
 return (
 <GuideArticle
 eyebrow="Source review • September 9, 2026"
 title="Military Army Tycoon Updates"
 description="This is an independent verification log, not an official patch-note feed. It records current official-page changes, dated gameplay observations, cross-source code checks, and reports that still lack enough evidence for a guide."
 status={<> <aside className="content-card"><p><strong>{"Last checked:"}</strong>{" September 9, 2026"}</p><p><strong>{"Current official title:"}</strong>{" Military Army Tycoon [GAZ Tiger]"}</p><p><strong>{"Accessible detailed creator changelog:"}</strong>{" Not confirmed"}</p><p><strong>{"Verified creator destinations:"}</strong>{" Official Roblox experience and Battle Action group"}</p></aside> </>}
 beforeSteps={<>
<section className="content-card">
<h2>{"Current status summary"}</h2>
<div className="mt-4 overflow-x-auto" role="region" aria-label="Reference table" tabIndex={0}><table><thead><tr><th scope="col">{"Topic"}</th><th scope="col">{"Current status"}</th><th scope="col">{"Evidence date"}</th></tr></thead><tbody><tr><td>{"Official title"}</td><td><code>{"[GAZ Tiger]"}</code>{" still displayed"}</td><td>{"Checked September 9, 2026"}</td></tr><tr><td>{"Roblox metadata update"}</td><td>{"A current metadata tracker lists "}<code>{"Updated: 2026-09-05"}</code></td><td>{"Snapshot checked September 9"}</td></tr><tr><td><Link href="/codes/">{"Codes"}</Link></td><td><code>{"BONUS"}</code>{" and "}<code>{"JOINED"}</code>{", 50,000 Cash each, cross-source reported"}</td><td>{"Sources checked through September 9"}</td></tr><tr><td>{"Code button"}</td><td>{"Several current guides show "}<code>{"REDEME"}</code></td><td>{"September 5–9 sources"}</td></tr><tr><td>{"Group/like gate"}</td><td>{"Reported by several current screenshot-based guides; omitted by others"}</td><td>{"Unresolved"}</td></tr><tr><td>{"Missions"}</td><td>{"Recent third-party video transcription reports a Missions board and named unlocks"}</td><td>{"Single-source report under review"}</td></tr><tr><td>{"GAZ Tiger mechanics"}</td><td>{"Title suffix confirmed; unlock, price, stats, and controls unconfirmed"}</td><td>{"September 9"}</td></tr><tr><td>{"Rebirth"}</td><td>{"August 30 prompt record only"}</td><td>{"Current prompt not rechecked"}</td></tr><tr><td>{"Tent Camp reward"}</td><td>{"August 31 dated "}<code>{"+10% Income"}</code>{" observation"}</td><td>{"Current reward not independently rechecked"}</td></tr></tbody></table></div>
</section>
<section className="content-card">
<h2>{"September 9, 2026 — Current title and Codes rechecked"}</h2>
<p>{"The official Roblox experience still displays:"}</p>
<p>{"Military Army Tycoon [GAZ Tiger]"}</p>
<p>{"The title confirms the current label. It does not confirm:"}</p>
<ul><li>{"how GAZ Tiger is obtained;"}</li><li>{"whether it uses Cash, Robux, a Mission, or another condition;"}</li><li>{"vehicle statistics;"}</li><li>{"controls;"}</li><li>{"a permanent update name;"}</li><li>{"unrelated weapon or squad additions."}</li></ul>
<p>{"Current code sources checked through September 9 continue to list "}<code>{"BONUS"}</code>{" and "}<code>{"JOINED"}</code>{", each reported to award 50,000 Cash."}</p>
<p>{"Several current screenshots and guides show the green button label as "}<code>{"REDEME"}</code>{". Several also instruct players to like the experience and join Battle Action; other current guides omit that condition. The Codes page publishes the conflict instead of converting it into an official rule."}</p>
<p><strong>{"Pages updated by this check"}</strong></p>
<ul><li><Link href="/">{"Home"}</Link></li><li><Link href="/codes/">{"Codes"}</Link></li><li><Link href="/guides/getting-started/">{"Getting Started"}</Link></li><li><Link href="/guides/how-to-get-cash/">{"Cash"}</Link></li><li><Link href="/updates/">{"Updates"}</Link></li><li><Link href="/trello/">{"Official Links"}</Link></li></ul>
</section>
</>}
 faq={faq}
 sourceNotes={<> <details data-claim-group="current-source-review"><summary>Sources and verification</summary><p>Source review: September 9, 2026. Code rewards are reported by multiple sources; this site has not completed a live-client redemption.</p><ul><li><a href="https://www.roblox.com/games/95409544559668/Military-Army-Tycoon">Official Battle Action experience</a></li><li><a href="https://www.roblox.com/communities/683115741/Battle-Action">Battle Action group</a></li><li><a href="https://robloxden.com/game-codes/military-army-tycoon">RobloxDen code list</a></li><li><a href="https://www.destructoid.com/military-army-tycoon-codes/">Destructoid redemption guide</a></li><li><a href="https://op.gg/roblox/games/10698216738">OP.GG metadata snapshot (not patch notes)</a></li><li><a href="https://militaryarmytycoon.online/missions/">September 7 fan transcription (unconfirmed lead)</a></li><li><a href="/sources/">Sources and editorial method</a></li></ul></details><nav aria-label="Related guides"><h2>Related guides</h2><ul><li><Link href="/guides/military-army-tycoon-vs-military-tycoon/">Identify the correct Roblox game</Link></li><li><Link href="/codes/">Current codes</Link></li><li><Link href="/guides/getting-started/">Beginner route</Link></li><li><Link href="/guides/how-to-get-cash/">Cash progression</Link></li><li><Link href="/guides/how-to-capture/">Capture an outpost</Link></li><li><Link href="/trello/">Verified official links</Link></li><li><Link href="/sources/">Sources and editorial method</Link></li></ul></nav> </>}
 breadcrumb="Updates"
 route={route}
 family="guide"
 >
<section className="content-card">
<h2>{"September 7, 2026 — Mission reports remain under review"}</h2>
<p>{"A third-party fan site published a transcription attributed to a DinozaurPlays "}<code>{"BEST ARMY"}</code>{" video. It reports an orange Missions interface and names:"}</p>
<ul><li>{"Ural Truck"}</li><li>{"Intervention Sniper"}</li><li>{"Riot Squad / Oppression"}</li><li>{"Bizon Squad"}</li></ul>
<p>{"It also publishes task text and reward details."}</p>
<p>{"These claims are "}<strong>{"not yet promoted to confirmed site content"}</strong>{" because:"}</p>
<ol><li>{"The direct YouTube page was not reliably accessible during this review."}</li><li>{"A complete transcript was not obtained."}</li><li>{"The cited timestamp could not be independently checked."}</li><li>{"No accessible Battle Action changelog described the system."}</li><li>{"A second independent direct source was not obtained."}</li><li>{"Several fan pages can repeat one clip without creating independent evidence."}</li></ol>
<p>{"Until those conditions improve:"}</p>
<ul><li>{"no Missions page is added;"}</li><li>{"no new Squad or Weapon is added to confirmed tables;"}</li><li>{"no mission reward, kill count, Cash amount, or unlock route is published as fact;"}</li><li>{"the reports remain under review."}</li></ul>
</section>
<section className="content-card">
<h2>{"September 5, 2026 — Roblox update metadata changed"}</h2>
<p>{"A current third-party Roblox metadata tracker lists the experience as updated on "}<strong>{"September 5, 2026"}</strong>{"."}</p>
<p>{"This supports only the conclusion that the platform update metadata changed. It does not identify what changed inside the game."}</p>
<p>{"Specific features require a creator-controlled note or direct exact-game evidence."}</p>
</section>
<section className="content-card">
<h2>{"August 31, 2026 — Dated outpost walkthrough"}</h2>
<p>{"A readable exact-game walkthrough documents:"}</p>
<ul><li>{"the early economy-to-Barracks route;"}</li><li>{"Pistol Squad as an early option;"}</li><li>{"Follow, Attack, Hold, and Retreat;"}</li><li>{"Tent Camp, Small Town, and Centre names;"}</li><li>{"a Tent Camp banner displaying "}<code>{"+10% Income"}</code>{"."}</li></ul>
<p>{"Additional claims about every outpost and cumulative bonuses were not independently confirmed by a second direct source."}</p>
</section>
<section className="content-card">
<h2>{"August 30, 2026 — Launch-window Rebirth prompt record"}</h2>
<p>{"The site’s dated record shows:"}</p>
<ul><li>{"a 250,000 Cash prompt;"}</li><li>{"current money being lost;"}</li><li>{"Robux items being kept."}</li></ul>
<p>{"The current cost, full reset list, multiplier, and later Rebirth costs remain unconfirmed."}</p>
</section>
<section className="content-card">
<h2>{"August 15, 2026 — Public release"}</h2>
<p>{"The official Roblox description lists August 15, 2026 as the public release date and says progress is saved automatically."}</p>
</section>
<section className="content-card">
<h2>{"What remains unconfirmed"}</h2>
<p>{"As of September 9, 2026, this site has not confirmed:"}</p>
<ul><li>{"an accessible creator-controlled detailed changelog;"}</li><li>{"an official Trello;"}</li><li>{"an accessible official Discord;"}</li><li>{"GAZ Tiger unlock, cost, controls, or stats;"}</li><li>{"the Missions interface through direct evidence;"}</li><li>{"Ural Truck mission details;"}</li><li>{"Intervention Sniper availability or unlock;"}</li><li>{"Riot Squad and Bizon Squad unlocks;"}</li><li>{"a complete current squad roster;"}</li><li>{"a complete weapon list;"}</li><li>{"current weapon statistics;"}</li><li>{"every outpost reward;"}</li><li>{"outpost reward stacking;"}</li><li>{"the current Rebirth requirement, benefit, and complete reset;"}</li><li>{"a universal best squad or weapon."}</li></ul>
<p><code>{"Not confirmed"}</code>{" means the source threshold was not met. It does not mean a feature is impossible."}</p>
</section>
<section className="content-card">
<h2>{"How this update log works"}</h2>
<ol><li>{"Official page changes are recorded with the date checked."}</li><li>{"A metadata timestamp is not converted into invented patch notes."}</li><li>{"Dated gameplay evidence is labeled as an observation."}</li><li>{"Two articles repeating one video are still one direct source."}</li><li>{"An inaccessible video plus a fan transcription remains single-source evidence."}</li><li>{"Conflicts remain visible until version, platform, account condition, and source independence are resolved."}</li><li>{"Only pages affected by a real evidence change receive a new material update date."}</li><li>{"Other pages may show a separate fact-check date without pretending their gameplay content changed."}</li></ol>
</section>
 </GuideArticle>
 );
}
