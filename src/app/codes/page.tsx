import { codeSummary, contentReview } from "@/data/current-content";
import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";
import { CurrentCodeTable } from "@/components/codes/CurrentCodeTable";

const title = "Military Army Tycoon Codes (September 2026)";
const description = "Use the latest Military Army Tycoon codes for free Cash, see the current REDEME steps, group requirement evidence, failure fixes and verification dates.";
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
    "a": "BONUS and JOINED are the two current cross-source reported codes as of September 9, 2026."
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
    "a": "Current sources display the strings as BONUS and JOINED. Copy them exactly instead of testing different capitalization."
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
 eyebrow="Source review • September 9, 2026"
 title="Military Army Tycoon Codes"
 description={`${codeSummary}. Source check: ${contentReview.codeSourcesCheckedAt}. Cross-source reported; this site has not independently redeemed either code in a live client.`}
 status={<> <aside className="content-card"><p><strong>{"Source check:"}</strong>{" September 9, 2026"}</p><p><strong>{"Status:"}</strong>{" Cross-source reported"}</p><p><strong>{"Independent live-client test by this site:"}</strong>{" Not completed"}</p><p><strong>{"Developer-controlled code announcement located:"}</strong>{" No"}</p><p><strong>{"Confirmed expired codes:"}</strong>{" None"}</p></aside> </>}
 beforeSteps={<>
<section className="content-card">
<h2>{"Current Military Army Tycoon codes"}</h2>
<CurrentCodeTable />
<p>{"Copy the code exactly as displayed. Do not add spaces before or after it."}</p>
</section>
<section className="content-card">
<h2>{"Before you redeem a code"}</h2>
<p>{"Several current screenshot-based guides say the game asks players to "}<strong>{"like the experience and join the Battle Action Roblox group"}</strong>{" before using codes. Other current guides show the normal Settings route without mentioning that requirement."}</p>
<p>{"The official Roblox description confirms that joining Battle Action grants a free in-game boost, but it does not publish a universal code-eligibility rule. The safest current sequence is:"}</p>
<ol><li>{"Confirm that you opened the Battle Action experience."}</li><li>{"Like the experience if the live page asks you to."}</li><li>{"Join only the verified Battle Action Roblox group."}</li><li>{"Rejoin Military Army Tycoon."}</li><li>{"Wait for your plot and Cash display to load."}</li><li>{"Redeem one code at a time."}</li></ol>
<p>{"Treat the live game message as the final account-specific instruction. Do not join an unofficial group from a copied guide, Discord invite, or search advertisement."}</p>
</section>
</>}
 faq={faq}
 sourceNotes={<> <details data-claim-group="current-source-review"><summary>Sources and verification</summary><p>Source review: September 9, 2026. Code rewards are reported by multiple sources; this site has not completed a live-client redemption.</p><ul><li><a href="https://www.roblox.com/games/95409544559668/Military-Army-Tycoon">Official Battle Action experience</a></li><li><a href="https://www.roblox.com/communities/683115741/Battle-Action">Battle Action group</a></li><li><a href="https://robloxden.com/game-codes/military-army-tycoon">RobloxDen code list</a></li><li><a href="https://www.destructoid.com/military-army-tycoon-codes/">Destructoid redemption guide</a></li><li><a href="/sources/">Sources and editorial method</a></li></ul></details><nav aria-label="Related guides"><h2>Related guides</h2><ul><li><Link href="/guides/military-army-tycoon-vs-military-tycoon/">Identify the correct Roblox game</Link></li><li><Link href="/guides/getting-started/">Beginner route</Link></li><li><Link href="/guides/how-to-get-cash/">Cash progression</Link></li><li><Link href="/guides/how-to-capture/">Capture an outpost</Link></li><li><Link href="/trello/">Verified official links</Link></li><li><Link href="/sources/">Sources and editorial method</Link></li></ul></nav> </>}
 breadcrumb="Codes"
 route={route}
 family="guide"
 >
<section className="content-card">
<h2>{"How to redeem Military Army Tycoon codes"}</h2>
<ol><li>{"Open "}<strong>{"Military Army Tycoon [GAZ Tiger]"}</strong>{" by "}<strong>{"Battle Action"}</strong>{" on Roblox."}</li><li>{"Confirm the URL uses Place ID "}<code>{"95409544559668"}</code>{"."}</li><li>{"Wait until your plot, HUD, and Cash balance are visible."}</li><li>{"Select the "}<strong>{"Setting"}</strong>{" icon on the left side of the screen."}</li><li>{"Find the Codes field in the Settings window."}</li><li>{"Paste "}<code>{"BONUS"}</code>{" or "}<code>{"JOINED"}</code>{"."}</li><li>{"Select the green "}<strong>{"REDEME"}</strong>{" button."}</li></ol>
<p><code>{"REDEME"}</code>{" is the spelling shown in several September 2026 screenshots and current redemption guides. Some articles normalize it to "}<code>{"Redeem"}</code>{". If the live button label changes after an update, follow the live interface rather than an old screenshot."}</p>
<p><strong>{"Success signal:"}</strong>{" The client accepts the entry and the Cash balance or reward message changes."}</p>
<p>{"Before pressing the button, note your current Cash. Compare the balance after redemption so you can tell whether the reward was applied."}</p>
</section>
<section className="content-card">
<h2>{"Why is my Military Army Tycoon code not working?"}</h2>
<div className="mt-4 overflow-x-auto" role="region" aria-label="Reference table" tabIndex={0}><table><thead><tr><th scope="col">{"What happens"}</th><th scope="col">{"Most likely reason"}</th><th scope="col">{"What to do"}</th></tr></thead><tbody><tr><td>{"Nothing happens after pressing the button"}</td><td>{"The HUD or plot may not be fully loaded"}</td><td>{"Close Settings, wait for the plot and Cash display, then try once more"}</td></tr><tr><td>{"The game shows an invalid message"}</td><td>{"Typo, extra space, changed code status, or wrong game"}</td><td>{"Use the Copy button and confirm Battle Action plus Place ID "}<code>{"95409544559668"}</code></td></tr><tr><td>{"The game shows an eligibility or group message"}</td><td>{"The current account may need to like the experience or join Battle Action"}</td><td>{"Use only the verified group, rejoin the game, and retry once"}</td></tr><tr><td>{"The code was already used"}</td><td>{"The account may have redeemed it previously"}</td><td>{"Try the other current code; do not repeatedly submit the same string"}</td></tr><tr><td>{"The button says something other than REDEME"}</td><td>{"The interface may have changed, or you may be in another game"}</td><td>{"Check the developer and Place ID before following the guide"}</td></tr><tr><td>{"There is no Setting or Codes field"}</td><td>{"Wrong experience, delayed load, or a UI update"}</td><td>{"Reopen the official Battle Action game and wait for the HUD"}</td></tr><tr><td>{"The Cash total does not change"}</td><td>{"Redemption failed, the display is delayed, or the reward was already applied"}</td><td>{"Record the before/after value, rejoin once, and read the live message"}</td></tr><tr><td>{"Another guide lists Diamond, crate, or vehicle codes"}</td><td>{"It probably covers the older Military Tycoon or another similarly named game"}</td><td>{"Use the game-comparison guide before pasting any code"}</td></tr><tr><td>{"A single player says the code expired"}</td><td>{"One failed report does not establish expiry"}</td><td>{"Check the current source date and wait for repeated exact-game evidence"}</td></tr></tbody></table></div>
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
<p>{"No code is consistently listed as expired in the current sources reviewed on September 9, 2026."}</p>
<p>{"A code should move to this section only when at least one of the following is available:"}</p>
<ul><li>{"a creator-controlled expiry announcement;"}</li><li>{"repeated recent live-client failures tied to the correct Battle Action experience;"}</li><li>{"several current independent sources moving the same string to expired;"}</li><li>{"a replacement code or update that clearly invalidates the old one."}</li></ul>
<p>{"A single anonymous failure report is not enough."}</p>
</section>
<section className="content-card">
<h2>{"Where new codes may appear"}</h2>
<p>{"The safest places to check first are:"}</p>
<ol><li>{"The official Military Army Tycoon Roblox experience."}</li><li>{"The verified Battle Action Roblox group."}</li><li>{"The live Settings interface."}</li><li>{"Current code sources that show an exact check date and the correct game identity."}</li></ol>
<p>{"No accessible creator-controlled Discord, Trello, or detailed code announcement was confirmed during the September 9 review. Do not trust a link solely because a fan page calls it official."}</p>
</section>
 </GuideArticle>
 );
}
