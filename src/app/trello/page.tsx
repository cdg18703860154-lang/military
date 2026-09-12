import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Trello, Discord & Official Links Status";
const description = "Open the verified Military Army Tycoon Roblox game and Battle Action group, and check the current Trello, Discord, wiki and patch-note status.";
const route = "/trello/";
export const metadata: Metadata = {
 title: { absolute: title }, description,
 alternates: { canonical: `${siteConfig.domain}${route}` },
 openGraph: { title, description, url: `${siteConfig.domain}${route}`, images: [`${siteConfig.domain}/opengraph-image`] },
 twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};
const faq = [
  {
    "q": "Is there an official Military Army Tycoon Trello?",
    "a": "No creator-controlled Trello was confirmed during the September 9, 2026 review."
  },
  {
    "q": "Is there an official Discord?",
    "a": "No accessible creator-controlled Discord invite was confirmed during this check."
  },
  {
    "q": "What is the official Roblox game?",
    "a": "Military Army Tycoon [GAZ Tiger] by Battle Action at Place ID 95409544559668."
  },
  {
    "q": "What is the official Roblox group?",
    "a": "The verified creator group is Battle Action. Use the link on this page rather than a copied invite."
  },
  {
    "q": "Does joining the group unlock Codes?",
    "a": "Several current code guides report a group/like gate; other guides omit it. The official description confirms a free group boost. Follow the live code interface and use only the verified group."
  },
  {
    "q": "Is this website the official wiki?",
    "a": "No. It is an independent fan guide."
  },
  {
    "q": "Are the Missions pages in Google official?",
    "a": "No fan page becomes official merely by using the game name. A Missions claim still needs a creator-controlled or directly verifiable source."
  },
  {
    "q": "Where are official patch notes?",
    "a": "No accessible detailed creator patch-note feed was confirmed. See the Updates page for dated observations and unresolved reports."
  }
];

export default function OfficialLinksPage() {
 return (
 <GuideArticle
 eyebrow="Official-link review • September 12, 2026 (UTC)"
 title="Military Army Tycoon Official Links Status"
 description="Use the official Military Army Tycoon experience and the Battle Action Roblox group for creator-controlled destinations."
 status={<><p>Use the <a href="https://www.roblox.com/games/95409544559668/Military-Army-Tycoon">official Military Army Tycoon experience</a> and the <a href="https://www.roblox.com/communities/683115741/Battle-Action">Battle Action Roblox group</a> for creator-controlled destinations.</p><p>During the September 12, 2026 (UTC) review, we could not verify a public creator-linked Trello board or Discord invite. Group announcements requiring an interface we could not read were not reviewed; this is not a claim that no announcements exist.</p><p>Looking for a code? Open the <Link href="/codes/">code list and redemption steps</Link>. A group link verifies the destination, not a guaranteed reward or universal eligibility rule.</p></>}
 beforeSteps={<>
<section className="content-card">
<h2>{"Verified official destinations"}</h2>
<div className="mt-4 overflow-x-auto" role="region" aria-label="Reference table" tabIndex={0}><table><thead><tr><th scope="col">{"Destination"}</th><th scope="col">{"Status"}</th><th scope="col">{"What it supports"}</th></tr></thead><tbody><tr><td>{"Military Army Tycoon on Roblox"}</td><td>{"Verified official experience"}</td><td>{"Current title, developer, description, Place ID, release note, play access"}</td></tr><tr><td>{"Battle Action Roblox group"}</td><td>{"Verified creator group"}</td><td>{"Creator identity and the official free-group-boost destination"}</td></tr><tr><td>{"Roblox thumbnail surfaces"}</td><td>{"Official platform media"}</td><td>{"Game identity and official promotional artwork only"}</td></tr></tbody></table></div>
<h3>{"Official Military Army Tycoon experience"}</h3>
<p><strong>{"Name:"}</strong>{" Military Army Tycoon [GAZ Tiger] "}<strong>{"Developer:"}</strong>{" Battle Action "}<strong>{"Place ID:"}</strong>{" "}<code>{"95409544559668"}</code></p>
<p><a className="button-primary" href="https://www.roblox.com/games/95409544559668/Military-Army-Tycoon">{"Open the official Roblox experience"}</a></p>
<p>{"Use this page for:"}</p>
<ul><li>{"the current game title;"}</li><li>{"developer identity;"}</li><li>{"the official description;"}</li><li>{"the current Play button;"}</li><li>{"Store and server information when available;"}</li><li>{"the release date shown by the developer."}</li></ul>
<h3>{"Official Battle Action Roblox group"}</h3>
<p>{"The official game description says joining the group grants a free in-game boost. Several current code guides also report that group membership may be required by the current code interface."}</p>
<p><a className="button-primary" href="https://www.roblox.com/communities/683115741/Battle-Action">{"Open the verified Battle Action group"}</a></p>
<p>{"Use only this verified destination. Do not join a group merely because a copied code page, advertisement, or Discord message uses the same name."}</p>
</section>
<section className="content-card">
<h2>{"Trello status"}</h2>
<p>{"No creator-controlled Trello board was confirmed during the September 9 review."}</p>
<p>{"The following are not enough to call a Trello official:"}</p>
<ul><li>{"a board using the game title;"}</li><li>{"a fan page linking to a board;"}</li><li>{"a search result that says “official Trello”;"}</li><li>{"a board created after the game launched;"}</li><li>{"copied mission or squad lists without a Battle Action link;"}</li><li>{"a page that mixes this game with Military Tycoon by InfinityInteractive."}</li></ul>

<p>{"Official Trello: Not confirmed"}</p>
<p>Return to the verified Roblox group if a fan page offers an unverified board.</p>
</section>
</>}
 faq={faq}
 sourceNotes={<> <details data-claim-group="current-source-review"><summary>Sources and verification</summary><p>Source review: September 9, 2026. Code rewards are reported by multiple sources; this site has not completed a live-client redemption.</p><ul><li><a href="https://www.roblox.com/games/95409544559668/Military-Army-Tycoon">Official Battle Action experience</a></li><li><a href="https://www.roblox.com/communities/683115741/Battle-Action">Battle Action group</a></li><li><a href="https://robloxden.com/game-codes/military-army-tycoon">RobloxDen code list</a></li><li><a href="https://www.destructoid.com/military-army-tycoon-codes/">Destructoid redemption guide</a></li><li><a href="https://op.gg/roblox/games/10698216738">OP.GG metadata snapshot (not patch notes)</a></li><li><a href="https://militaryarmytycoon.online/missions/">September 7 fan transcription (unconfirmed lead)</a></li><li><a href="/sources/">Sources and editorial method</a></li></ul></details><nav aria-label="Related guides"><h2>Related guides</h2><ul><li><Link href="/guides/military-army-tycoon-vs-military-tycoon/">Identify the correct Roblox game</Link></li><li><Link href="/codes/">Current codes</Link></li><li><Link href="/guides/getting-started/">Beginner route</Link></li><li><Link href="/guides/how-to-get-cash/">Cash progression</Link></li><li><Link href="/guides/how-to-capture/">Capture an outpost</Link></li><li><Link href="/sources/">Sources and editorial method</Link></li></ul></nav> </>}
 breadcrumb="Official Links Status"
 route={route}
 family="guide"
 >
<section className="content-card">
<h2>{"Discord status"}</h2>
<p>{"No accessible creator-controlled Discord invitation was confirmed during this review."}</p>
<p>{"An invitation should be treated as verified only when at least one of the following is true:"}</p>
<ol><li>{"It is linked from the official Roblox experience."}</li><li>{"It is linked from the verified Battle Action group."}</li><li>{"Battle Action publishes the same invite through another creator-controlled destination."}</li><li>{"The invite resolves to a server whose identity can be tied back to the developer."}</li></ol>
<p>{"A code website saying “join the Discord” is not enough."}</p>

<p>{"Official Discord: Not confirmed during the September 9, 2026 check"}</p>
</section>
<section className="content-card">
<h2>{"Official wiki status"}</h2>
<p>{"No creator-controlled official wiki was confirmed."}</p>
<p>{"The websites currently appearing in search are independent fan resources. This site and other "}<code>{".wiki"}</code>{" domains or Fandom pages remain independent unless Battle Action clearly adopts them."}</p>
</section>
<section className="content-card">
<h2>{"Patch-note status"}</h2>
<p>{"The official Roblox title still includes "}<code>{"[GAZ Tiger]"}</code>{", and a third-party metadata tracker lists an update date of September 5, 2026. However, no accessible creator-controlled detailed changelog was located."}</p>
<p>{"Therefore:"}</p>
<ul><li>{"the title suffix may be recorded;"}</li><li>{"the metadata date may be recorded as a platform snapshot;"}</li><li>{"specific Missions, vehicles, weapons, rewards, or balance changes must not be inferred from that date alone."}</li></ul>
<p><Link href="/updates/">Read the dated update timeline</Link>.</p>
</section>
<section className="content-card">
<h2>{"How to verify a newly found link"}</h2>
<p>{"Before trusting a Discord, Trello, wiki, social account, or patch-note page:"}</p>
<ol><li>{"Open the official Roblox experience."}</li><li>{"Check whether the link appears there."}</li><li>{"Check the verified Battle Action group."}</li><li>{"Compare the creator identity and destination ownership."}</li><li>{"Record the exact URL and date."}</li><li>{"Check whether the link redirects."}</li><li>{"Do not sign in, download a program, or enter a Roblox password to “verify” it."}</li><li>{"Publish only after the creator relationship is clear."}</li></ol>
</section>
<section className="content-card">
<h2>{"Link safety"}</h2>
<p>{"Never enter the following on a fan guide, Trello, Discord bot, or copied code page:"}</p>
<ul><li>{"Roblox password;"}</li><li>{"authentication cookie;"}</li><li>{"two-factor code;"}</li><li>{"payment information;"}</li><li>{"account recovery details;"}</li><li>{"private messages;"}</li><li>{"executable downloads;"}</li><li>{"browser extensions required to claim a code."}</li></ul>
<p>{"Military Army Tycoon codes are entered in the game interface. They do not require an executor, script, external form, or account cookie."}</p>
</section>
<section className="content-card">
<h2>{"Why this page uses "}<code>{"/trello/"}</code></h2>
<p>{"The existing URL is retained because players may already search for or link to a Military Army Tycoon Trello page. The page now answers the broader and more accurate task: which destinations are actually verified, and which remain unconfirmed."}</p>
<p>{"Changing the H1 does not require changing the URL."}</p>
</section>
 </GuideArticle>
 );
}
