import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Weapons: Confirmed Names & Update Limits";
const description = "See the currently documented Glock-17 and AK-47 Rifle, check unconfirmed Intervention Sniper reports, and avoid unsupported prices or weapon tiers.";
const route = "/wiki/weapons/";
export const metadata: Metadata = {
 title: { absolute: title }, description,
 alternates: { canonical: `${siteConfig.domain}${route}` },
 openGraph: { title, description, url: `${siteConfig.domain}${route}`, images: [`${siteConfig.domain}/opengraph-image`] },
 twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};
const faq = [
  {
    "q": "Which Military Army Tycoon weapons are confirmed on this site?",
    "a": "Glock-17 and AK-47 Rifle are the two visible labels supported by the current site evidence record."
  },
  {
    "q": "Is AK-47 Rifle better than Glock-17?",
    "a": "A same-condition combat test was not obtained, so the page does not publish a winner."
  },
  {
    "q": "Is Intervention Sniper confirmed?",
    "a": "No. It appears in one current third-party video transcription, but the direct video evidence and a second independent source were not obtained during this review."
  },
  {
    "q": "Does GAZ Tiger prove that new weapons were added?",
    "a": "No. [GAZ Tiger] is the current official title suffix. It does not by itself establish a weapon update."
  },
  {
    "q": "What is the best weapon for capturing an outpost?",
    "a": "Not confirmed. Use a weapon currently available to your account without sacrificing the income, squad, and recovery Cash needed for the objective."
  },
  {
    "q": "Why is the weapon list so short?",
    "a": "The page records only names that can be tied to exact-game evidence. Missing data stays missing rather than being borrowed from another game."
  },
  {
    "q": "Will this page add a weapon tier list later?",
    "a": "Only after the roster and same-condition tests are available with dates and evidence."
  }
];

export default function WeaponsPage() {
 return (
 <GuideArticle
 eyebrow="Source review • September 9, 2026"
 title="Military Army Tycoon Weapons"
 description="The official Roblox description confirms that players can equip weapons and fight enemy armies. Current exact-game records on this site support the visible names Glock-17 and AK-47 Rifle. They do not yet establish a complete arsenal, current prices, damage, fire rate, range, upgrade values, or a trustworthy weapon tier list."
 status={<> <aside className="content-card"><p><strong>{"Last fact-checked:"}</strong>{" September 9, 2026"}</p><p><strong>{"Confirmed current weapon names on this site:"}</strong>{" Glock-17, AK-47 Rifle"}</p><p><strong>{"Complete arsenal:"}</strong>{" Not confirmed"}</p><p><strong>{"Comparable combat stats:"}</strong>{" Not available"}</p></aside> </>}
 beforeSteps={<>
<section className="content-card">
<h2>{"Confirmed weapon records"}</h2>
<div className="mt-4 overflow-x-auto" role="region" aria-label="Reference table" tabIndex={0}><table><thead><tr><th scope="col">{"Weapon"}</th><th scope="col">{"What is currently supported"}</th><th scope="col">{"What remains unconfirmed"}</th></tr></thead><tbody><tr><td>{"Glock-17"}</td><td>{"Visible exact-game label in the site’s existing evidence record"}</td><td>{"Current price, unlock path, damage, magazine behavior, fire rate, range, upgrades"}</td></tr><tr><td>{"AK-47 Rifle"}</td><td>{"Visible exact-game label in the site’s existing evidence record"}</td><td>{"Current price, unlock path, damage, magazine behavior, fire rate, range, upgrades"}</td></tr></tbody></table></div>
<p>{"A visible name is enough to record the weapon. It is not enough to rank it or invent its current statistics."}</p>
</section>
<section className="content-card">
<h2>{"Is Intervention Sniper in Military Army Tycoon?"}</h2>
<p>{"A third-party guide updated on September 7 transcribes an "}<code>{"Intervention Sniper"}</code>{" mission and a mission-gated pad from a DinozaurPlays video."}</p>
<p>{"This site is "}<strong>{"not adding Intervention Sniper to the confirmed table yet"}</strong>{" because:"}</p>
<ul><li>{"the direct YouTube page was not reliably accessible during this review;"}</li><li>{"a complete transcript was not obtained;"}</li><li>{"the claimed timestamp could not be independently checked;"}</li><li>{"no creator-controlled changelog was found;"}</li><li>{"no second independent direct source confirmed the same current unlock."}</li></ul>
<p>{"Current status:"}</p>
<p>{"Intervention Sniper — reported in one third-party video transcription; not confirmed by this site"}</p>
<p>{"The same rule applies to other recently reported mission rewards or units until their exact-game source can be checked directly."}</p>
</section>
</>}
 faq={faq}
 sourceNotes={<> <details data-claim-group="current-source-review"><summary>Sources and verification</summary><p>Source review: September 9, 2026. Code rewards are reported by multiple sources; this site has not completed a live-client redemption.</p><ul><li><a href="https://www.roblox.com/games/95409544559668/Military-Army-Tycoon">Official Battle Action experience</a></li><li><a href="https://www.roblox.com/communities/683115741/Battle-Action">Battle Action group</a></li><li><a href="https://robloxden.com/game-codes/military-army-tycoon">RobloxDen code list</a></li><li><a href="https://www.destructoid.com/military-army-tycoon-codes/">Destructoid redemption guide</a></li><li><a href="https://op.gg/roblox/games/10698216738">OP.GG metadata snapshot (not patch notes)</a></li><li><a href="https://militaryarmytycoon.online/missions/">September 7 fan transcription (unconfirmed lead)</a></li><li><a href="/sources/">Sources and editorial method</a></li></ul></details><nav aria-label="Related guides"><h2>Related guides</h2><ul><li><Link href="/guides/military-army-tycoon-vs-military-tycoon/">Identify the correct Roblox game</Link></li><li><Link href="/codes/">Current codes</Link></li><li><Link href="/guides/getting-started/">Beginner route</Link></li><li><Link href="/guides/how-to-get-cash/">Cash progression</Link></li><li><Link href="/guides/how-to-capture/">Capture an outpost</Link></li><li><Link href="/trello/">Verified official links</Link></li><li><Link href="/sources/">Sources and editorial method</Link></li></ul></nav> </>}
 breadcrumb="Weapons"
 route={route}
 family="wiki"
 >
<section className="content-card">
<h2>{"How to evaluate a weapon in the live game"}</h2>
<p>{"When a weapon appears on a pad, menu, or unlock screen, record the details that are actually visible:"}</p>
<ol><li>{"Exact weapon name."}</li><li>{"Current displayed price."}</li><li>{"Required base, mission, or Rebirth condition."}</li><li>{"Whether the purchase is for the player, a squad, or another system."}</li><li>{"Current Cash before purchase."}</li><li>{"The objective the weapon is meant to help with."}</li><li>{"What changes after the purchase."}</li><li>{"The date of the observation."}</li></ol>
<p>{"Do not assume that a higher price proves better damage. Do not convert promotional artwork into an arsenal list."}</p>
</section>
<section className="content-card">
<h2>{"Which weapon should a beginner buy?"}</h2>
<p>{"No universal beginner weapon order is confirmed."}</p>
<p>{"Use this decision:"}</p>
<ul><li>{"If the income loop is not stable, protect progression Cash first."}</li><li>{"If a weapon is required for the next visible objective, compare its live price with the Cash needed for the Barracks or a replacement squad."}</li><li>{"If two weapons are available, test them against the same target and under the same conditions before calling one better."}</li><li>{"If an online guide gives exact DPS without a current test method, treat the number as unverified."}</li><li>{"A personal weapon does not replace the need for a squad and Orders in the documented outpost flow."}</li></ul>
</section>
<section className="content-card">
<h2>{"How weapons connect to an outpost capture"}</h2>
<p>{"The official description confirms that players equip weapons and send troops into battle. The current Capture guide uses the following evidence-safe sequence:"}</p>
<ol><li>{"Build enough income to recover."}</li><li>{"Recruit an available squad."}</li><li>{"Use Follow while travelling."}</li><li>{"Use Attack near defenders."}</li><li>{"Contribute with a currently available player weapon."}</li><li>{"Enter the marked capture area."}</li><li>{"Verify the live banner."}</li></ol>
<p>{"The available evidence does not prove that Glock-17 or AK-47 Rifle is the universal best capture weapon."}</p>
</section>
<section className="content-card">
<h2>{"Why does another guide show more weapons?"}</h2>
<p>{"Check the source before adding a name."}</p>
<h3>{"It may cover Military Tycoon instead"}</h3>
<p>{"Military Tycoon ® by InfinityInteractive is a different experience at Place ID "}<code>{"7180042682"}</code>{". Its 100+ vehicle and oil-rig ecosystem does not define this Battle Action game."}</p>
<h3>{"It may infer from official artwork"}</h3>
<p>{"A rifle, tank, or soldier in promotional art is not proof that the item is currently playable or unlockable."}</p>
<h3>{"It may repeat a single video"}</h3>
<p>{"Several pages can copy the same clip. That is still one direct source, not independent confirmation."}</p>
<h3>{"It may invent a complete loadout to target a keyword"}</h3>
<p>{"A page title such as “best loadout” does not provide evidence by itself."}</p>
</section>
<section className="content-card">
<h2>{"Weapon troubleshooting"}</h2>
<div className="mt-4 overflow-x-auto" role="region" aria-label="Reference table" tabIndex={0}><table><thead><tr><th scope="col">{"Problem"}</th><th scope="col">{"What to check"}</th></tr></thead><tbody><tr><td>{"A named weapon is not visible"}</td><td>{"Confirm the current base stage, exact game, and whether the claim came from a current direct source"}</td></tr><tr><td>{"The displayed price differs from a guide"}</td><td>{"Use the live price and record the date; do not overwrite the page with an undated value"}</td></tr><tr><td>{"The guide shows a sniper or squad mission"}</td><td>{"Check whether it is a direct current game record or a third-party transcription"}</td></tr><tr><td>{"The weapon does not improve the objective"}</td><td>{"Separate player weapon performance from squad behavior and Orders"}</td></tr><tr><td>{"A tier list calls one weapon S-tier"}</td><td>{"Look for same-condition tests, not artwork or price"}</td></tr><tr><td>{"The page shows oil rigs, countries, helicopters, or more than 100 vehicles"}</td><td>{"Verify whether it covers InfinityInteractive’s Military Tycoon"}</td></tr><tr><td>{"The weapon pad says Mission or Rebirth"}</td><td>{"Record the exact gate; do not substitute one condition for the other"}</td></tr></tbody></table></div>
</section>
<section className="content-card">
<h2>{"What this page intentionally does not publish"}</h2>
<ul><li>{"A complete arsenal."}</li><li>{"Current prices without direct dated evidence."}</li><li>{"Damage, DPS, range, fire rate, reload time, or magazine size."}</li><li>{"A Glock-17 versus AK-47 winner."}</li><li>{"An Intervention Sniper unlock guide."}</li><li>{"Weapon rankings based on thumbnails."}</li><li>{"Weapons from other Military Tycoon games."}</li><li>{"Scripts, executors, loadstrings, or bypass methods."}</li></ul>
</section>
 </GuideArticle>
 );
}
