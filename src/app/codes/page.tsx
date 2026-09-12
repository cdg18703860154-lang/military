import { currentCodes, codeSummary, contentReview } from "@/data/current-content";
import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";
import { CurrentCodeTable } from "@/components/codes/CurrentCodeTable";

const title = "Military Army Tycoon Codes (September 2026)";
const description = "Find the two reported Military Army Tycoon codes, Cash rewards, redemption steps and fixes for group requirements or a code that does not work.";
const route = "/codes/";
export const metadata: Metadata = {
 title: { absolute: title }, description,
 alternates: { canonical: `${siteConfig.domain}${route}` },
 openGraph: { title, description, url: `${siteConfig.domain}${route}`, images: [`${siteConfig.domain}/opengraph-image`] },
 twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};
const faq = [
  {
    "q": "What are the current Military Army Tycoon codes?",
    "a": `${codeSummary}. Source review: ${contentReview.codeSourcesCheckedAt}; live validity unconfirmed.`
  },
  {
    "q": "How much Cash does each code give?",
    "a": "Current sources report 50,000 Cash for each code."
  },
  {
    "q": "Why does the button say REDEME?",
    "a": "Several current screenshots and guides show REDEME as the in-game button spelling. It appears to be the current game label, not a spelling instruction invented by this site."
  },
  {
    "q": "Do I have to join the Battle Action group?",
    "a": "Several current sources say the game requires the group and a like before redemption; other current sources omit that step. The official description confirms a free group boost but does not document a universal code rule. Follow the live account message and use only the verified group."
  },
  {
    "q": "Are the codes case-sensitive?",
    "a": "Some publishers display the same names in uppercase. This page follows the spelling displayed by the newer tracker. We have not independently established how the game handles letter case."
  },
  {
    "q": "Have these codes been tested by this site today?",
    "a": "No. They are cross-source reported. This site did not complete a live-client redemption."
  },
  {
    "q": "Are there any confirmed expired codes?",
    "a": "No confirmed expired codes were found in the current source set."
  },
  {
    "q": "Can a code stop working after this page is checked?",
    "a": "Yes. Code status can change without notice. The check date describes the latest source review, not a permanent guarantee."
  },
  {
    "q": "Why do other Military Tycoon codes fail here?",
    "a": "Military Army Tycoon by Battle Action and Military Tycoon by InfinityInteractive are different Roblox experiences. Their codes and interfaces do not transfer."
  },
  {
    "q": "Is there an official Discord or Trello?",
    "a": "No accessible creator-controlled Discord or Trello was confirmed during this review. Use the official Roblox experience and Battle Action group."
  }
];

export default function CodesPage() {
 return (
 <GuideArticle
 eyebrow="Source review • September 12, 2026 (UTC)"
 title="Military Army Tycoon Codes"
 description={`Current code guides list ${currentCodes.map((item) => item.code).join(" and ")}, with ${currentCodes[0].reportedReward} reported for each. Copy one code at a time and check the game’s response before trying the other.`}
 status={<aside className="content-card"><p><strong>Source review: {contentReview.codeSourcesCheckedAt}.</strong> The latest explicitly dated tracker check reviewed was September 11. Current validity has not been independently verified in-game by this site.</p></aside>}
 beforeSteps={<>
<section className="content-card">
<h2>{"Current Military Army Tycoon codes"}</h2>
<CurrentCodeTable />
<p>{"Some publishers display the same names in uppercase. This page follows the spelling displayed by the newer tracker. We have not independently established how the game handles letter case."}</p>
</section>
<section className="content-card">
<h2>Do I need to join the group before redeeming?</h2>
<p>RobloxDen and Destructoid instruct players to like the experience and join <strong>Battle Action</strong> before redeeming. The official description confirms a free group boost, but does not explain every code-eligibility condition.</p>
<p>A guide that omits this step is not proof that the requirement does not exist. Follow any eligibility message shown by your game, use the <a href="https://www.roblox.com/communities/683115741/Battle-Action">verified Battle Action group</a>, and rejoin before trying again. Do not join an unrelated group just because it promises a code reward.</p>
</section>
</>}
 faq={faq}
 sourceNotes={<> <details data-claim-group="current-source-review"><summary>Sources and verification</summary><p>Source review: September 12, 2026 (UTC). Code rewards are reported by multiple sources; this site has not completed a live-client redemption.</p><ul><li><a href="https://www.roblox.com/games/95409544559668/Military-Army-Tycoon">Official Battle Action experience</a></li><li><a href="https://www.roblox.com/communities/683115741/Battle-Action">Battle Action group</a></li><li><a href="https://robloxden.com/game-codes/military-army-tycoon">RobloxDen code list</a></li><li><a href="https://www.destructoid.com/military-army-tycoon-codes/">Destructoid redemption guide</a></li><li><a href="https://progameguides.com/roblox/military-tycoon-codes/">Pro Game Guides code comparison</a></li><li><a href="https://www.roburo.jp/games/95409544559668/military-army-tycoon/">Roburo code record</a></li><li><a href="/sources/">Sources and editorial method</a></li></ul></details><nav aria-label="Related guides"><h2>Related guides</h2><ul><li><Link href="/guides/military-army-tycoon-vs-military-tycoon/">Identify the correct Roblox game</Link></li><li><Link href="/guides/getting-started/">Beginner route</Link></li><li><Link href="/guides/how-to-get-cash/">Cash progression</Link></li><li><Link href="/guides/how-to-capture/">Capture an outpost</Link></li><li><Link href="/trello/">Verified official links</Link></li><li><Link href="/sources/">Sources and editorial method</Link></li></ul></nav> </>}
 breadcrumb="Codes"
 route={route}
 family="guide"
 >
<section className="content-card">
<h2>How to redeem a code</h2>
<ol><li>Open <a href="https://www.roblox.com/games/95409544559668/Military-Army-Tycoon">Military Army Tycoon by Battle Action</a>.</li><li>Wait for the game interface to load and note your Cash balance.</li><li>Open <strong>Setting / Settings</strong> on the left side, then find the Codes field.</li><li>Paste one code without leading or trailing spaces.</li><li>Press the green redemption button. Current guides show the in-game spelling <strong>REDEME</strong>; some articles write “Redeem.”</li><li>Read the response and compare your balance before submitting the second code.</li></ol>
<p>A copied code is not a redeemed code. Only the game’s response can confirm what happened to your account.</p>
</section>
<section className="content-card">
<h2>{"Why is my Military Army Tycoon code not working?"}</h2>
<div className="mt-4 overflow-x-auto" role="region" aria-label="Reference table" tabIndex={0}><table><thead><tr><th scope="col">{"What happens"}</th><th scope="col">{"Most likely reason"}</th><th scope="col">{"What to do"}</th></tr></thead><tbody><tr><td>{"Nothing happens after pressing the button"}</td><td>{"The HUD or plot may not be fully loaded"}</td><td>{"Close Settings, wait for the plot and Cash display, then try once more"}</td></tr><tr><td>The entry is rejected</td><td>Read the account-specific response</td><td>Remove spaces, check the displayed spelling, and confirm the developer and Place ID. A single rejection does not establish expiry.</td></tr><tr><td>The game asks for group membership</td><td>Read the account-specific response</td><td>Use the verified Battle Action group, rejoin, then retry once.</td></tr><tr><td>A notice says the code was already claimed</td><td>Read the account-specific response</td><td>Check the other code instead of repeatedly submitting the same one.</td></tr><tr><td>The menu does not match this guide</td><td>Read the account-specific response</td><td>Use the <Link href="/guides/military-army-tycoon-vs-military-tycoon/">correct-game comparison</Link> before using another code list.</td></tr><tr><td>{"There is no Setting or Codes field"}</td><td>{"Wrong experience, delayed load, or a UI update"}</td><td>{"Reopen the official Battle Action game and wait for the HUD"}</td></tr><tr><td>The balance does not change</td><td>Read the account-specific response</td><td>Check the response and before/after balance. Do not assume copying the text awarded Cash.</td></tr><tr><td>{"Another guide lists Diamond, crate, or vehicle codes"}</td><td>{"It probably covers the older Military Tycoon or another similarly named game"}</td><td>{"Use the game-comparison guide before pasting any code"}</td></tr><tr><td>{"A single player says the code expired"}</td><td>{"One failed report does not establish expiry"}</td><td>{"Check the current source date and wait for repeated exact-game evidence"}</td></tr></tbody></table></div>
</section>
<section className="content-card">
<h2>{"How to verify that you are in the correct game"}</h2>
<p>{"This site covers:"}</p>
<ul><li><strong>{"Game:"}</strong>{" Military Army Tycoon"}</li><li><strong>{"Current title:"}</strong>{" Military Army Tycoon [GAZ Tiger]"}</li><li><strong>{"Developer:"}</strong>{" Battle Action"}</li><li><strong>{"Place ID:"}</strong>{" "}<code>{"95409544559668"}</code></li><li><strong>{"Current code UI clue:"}</strong>{" Setting → Codes → green "}<code>{"REDEME"}</code>{" button"}</li></ul>
<p>{"It does not cover "}<strong>{"Military Tycoon ®"}</strong>{" by InfinityInteractive at Place ID "}<code>{"7180042682"}</code>{"."}</p>
<p>{"If a guide shows countries, more than 100 military vehicles, fortresses, or oil rigs as major map objectives, check the developer and Place ID before using its instructions."}</p>
<p><Link href="/guides/military-army-tycoon-vs-military-tycoon/">{"Military Army Tycoon vs Military Tycoon: How to Open the Correct Roblox Game"}</Link></p>
</section>
<section className="content-card">
<h2>{"What should you buy with the code Cash?"}</h2>
<p>{"The reported 100,000 Cash can speed up the opening session, but there is no verified permanent purchase order for every update."}</p>
<p>{"Use the reward to remove the next real bottleneck:"}</p>
<ol><li>{"Make sure the visible income route is running."}</li><li>{"Complete the required path toward the Barracks."}</li><li>{"Recruit an available squad only when you can still recover from a failed fight."}</li><li>{"Keep part of the balance for the next required production or squad purchase."}</li><li>{"Delay optional decoration when it does not unlock income, Orders, a squad, or the next objective."}</li></ol>
<p>{"This is editorial progression guidance, not an official guaranteed fastest route."}</p>
<p><strong>{"Next steps"}</strong></p>
<ul><li><Link href="/guides/getting-started/">{"Follow the first-session beginner route."}</Link></li><li><Link href="/guides/how-to-get-cash/">{"Improve the current Cash loop."}</Link></li><li><Link href="/guides/how-to-capture/">{"Prepare your first outpost capture."}</Link></li></ul>
</section>
<section className="content-card">
<h2>{"Expired Military Army Tycoon codes"}</h2>
<p>{"No code is consistently listed as expired in the current sources reviewed on September 12, 2026 (UTC)."}</p>
<p>{"A code should move to this section only when at least one of the following is available:"}</p>
<ul><li>{"a creator-controlled expiry announcement;"}</li><li>{"repeated recent live-client failures tied to the correct Battle Action experience;"}</li><li>{"several current independent sources moving the same string to expired;"}</li><li>{"a replacement code or update that clearly invalidates the old one."}</li></ul>
<p>{"A single anonymous failure report is not enough."}</p><p>We did not find a developer-controlled expiry announcement or a verified expiry record for either code in this review. That means <strong>expiry is not confirmed</strong>, not that the codes are guaranteed to work indefinitely.</p><p>After a successful redemption, continue with the <Link href="/guides/getting-started/">first-session route</Link> or the <Link href="/guides/how-to-get-cash/">Cash guide</Link>. Those guides explain the next task without requiring a separate article for each code.</p>
</section>
<section className="content-card">
<h2>{"Where new codes may appear"}</h2>
<p>{"The safest places to check first are:"}</p>
<ol><li>{"The official Military Army Tycoon Roblox experience."}</li><li>{"The verified Battle Action Roblox group."}</li><li>{"The live Settings interface."}</li><li>{"Current code sources that show an exact check date and the correct game identity."}</li></ol>
<p>{"No accessible creator-controlled Discord, Trello, or detailed code announcement was confirmed during the September 12 review. Do not trust a link solely because a fan page calls it official."}</p>
</section>
 </GuideArticle>
 );
}
