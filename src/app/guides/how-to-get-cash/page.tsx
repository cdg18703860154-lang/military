import { currentCodes, contentReview, codeSummary } from "@/data/current-content";
import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, type GuideStep } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";

const title = "How to Get Cash Fast in Military Army Tycoon";
const description = "Learn the current Military Army Tycoon Cash loop, code rewards, upgrade priorities, outpost income evidence and fixes for slow progress.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}/guides/how-to-get-cash/` },
  openGraph: { title, description, url: `${siteConfig.domain}/guides/how-to-get-cash/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const steps: GuideStep[] = [
  { title: "Claim the active income path", body: <p>Follow required base pads until the first production system operates. Prefer a purchase that starts or improves income over an optional visual pad.</p> },
  { title: "Add production before expansion", body: <p>Buy the visible Dropper or equivalent production pad feeding the current route. Confirm its output reaches the collector before adding another system.</p> },
  { title: "Improve the active route", body: <p>Use an Upgrader when it affects the production line already working. An expensive pad is not automatically the best short-term return.</p> },
  { title: "Collect before planning the next purchase", body: <p>Watch the Cash total and collector. If production is visible but spendable Cash does not change, verify the current collection step.</p> },
  { title: "Use code Cash to remove a bottleneck", body: <p>If both reported codes redeem, the reported total is 100,000 Cash. Source check: {contentReview.codeSourcesCheckedAt}. Open Setting → Codes → REDEME; follow any live like/group message. Use it for income, Barracks access, a needed squad, or recovery—not a fixed list copied from an older patch.</p> },
  { title: "Add military spending after income can recover", body: <p>Ask whether the base keeps earning, you can replace a failed squad, the purchase unlocks the next objective, and a required economy pad is being delayed.</p> },
  { title: "Treat outpost income as dated evidence", body: <p>An August 31, 2026 walkthrough showed “Tent Camp has been captured! (+10% Income).” It does not prove every outpost still gives the same amount or that bonuses stack.</p> }
];

const faq = [
  { q: "What is the fastest current way to get Cash?", a: "Use the active base production loop, try the current reported codes, and add only useful progression purchases. A dated outpost capture also showed an income bonus, but stacking is unconfirmed." },
  { q: "How much Cash do the current codes give?", a: `${codeSummary}. Sources checked ${contentReview.codeSourcesCheckedAt}; not independently redeemed here.` },
  { q: "Should I buy a Dropper or a squad first?", a: "If income is not stable, production normally removes more future bottlenecks. Buy a squad when it unlocks the next objective and recovery remains possible." },
  { q: "Do all outposts give +10% Income?", a: "An August 31, 2026 walkthrough shows a +10% Income Tent Camp banner. This site has not independently confirmed every current location." },
  { q: "Do outpost bonuses stack?", a: "One current article says they stack, but no second independent direct source was obtained. Treat stacking as unconfirmed." },
  { q: "What does the group boost give?", a: "The official description confirms a free boost exists. Its exact value, duration, and stacking were not confirmed." }
];

export default function CashGuidePage() {
  return (
    <GuideArticle
      eyebrow="Economy guide • reviewed September 9, 2026"
      title="How to Get Cash in Military Army Tycoon"
      description="Build the active income route before optional purchases. Dated gameplay evidence shows Droppers, Upgraders, and a Cash collector; current code sources add two reported rewards. Exact rates, prices, and bonus stacking are patch-sensitive."
      status={<p className="text-sm text-white/70"><strong>Current code status:</strong> {codeSummary}; cross-source reported as of {contentReview.codeSourcesCheckedAt}. <strong>Exact income rates:</strong> not verified.</p>}
      beforeSteps={<section className="content-card"><h2>Current Cash sources</h2><div className="mt-4 overflow-x-auto"><table><thead><tr><th>Source</th><th>Supported</th><th>Not yet supported</th></tr></thead><tbody>
        <tr><td>Droppers</td><td>Part of the documented early chain</td><td>Current price and Cash per minute</td></tr>
        <tr><td>Upgraders</td><td>Improve the documented active route</td><td>Exact return and universal purchase order</td></tr>
        <tr><td>Cash collector</td><td>Makes generated value available</td><td>Whether every current UI is identical</td></tr>
        <tr><td>Oil Containers</td><td>Shown in launch-window site evidence</td><td>Current cost, rate, and payback</td></tr>
        {currentCodes.map((item) => <tr key={item.code}><td>{item.code}</td><td>{item.reportedReward}; {item.status}; source check {item.sourceCheckedAt}</td><td>Independent live redemption here</td></tr>)}
        <tr><td>Group boost</td><td>Official description confirms a free boost</td><td>Amount, duration, and stacking</td></tr>
        <tr><td>Captured outpost</td><td>August 31, 2026 Tent Camp banner displayed +10% Income</td><td>Every current reward and cumulative stacking</td></tr>
      </tbody></table></div></section>}
      stepsTitle="A safe early Cash route"
      steps={steps}
      mistakes={[
        "Buying every pad by distance instead of function.",
        "Treating a high price as proof of best return.",
        "Spending all code Cash before the Barracks route is clear.",
        "Repeating captures without replacement Cash.",
        "Assuming all outpost bonuses stack from one article.",
        "Copying prices from another Military Tycoon.",
        "Using an auto-farm or executor."
      ]}
      faq={faq}
      sourceNotes={<><aside><strong>Purchase decisions:</strong> stabilize income; unlock required Barracks access; retain recovery Cash; verify the next objective. For Rebirth, read the <Link href="/guides/rebirth/" className="font-bold text-cyan-300">current-prompt checklist</Link>.</aside><section><h2>Evidence boundary</h2><p> No Cash-per-minute or ROI values are published. The +10% Income result is tied to an August 31, 2026 Tent Camp observation; all-location rewards and stacking remain unconfirmed.</p></section><nav aria-label="Related guides"><h2>Related guides</h2><p>See the distinct <Link href="/wiki/base-economy/" className="font-bold text-cyan-300">base-system record</Link>.</p></nav></>}
      breadcrumb="How to Get Cash"
      route="/guides/how-to-get-cash/"
    >
      <section className="content-card"><h2>Why is my Cash progress slow?</h2><div className="mt-4 grid gap-4 sm:grid-cols-2">
        <article><h3>Production is visible, but the balance does not move</h3><p>Check whether output reaches the collector and whether the interface requires a collection action.</p></article>
        <article><h3>The code reward disappeared into purchases</h3><p>Identify whether those purchases unlocked income, Barracks access, a squad, or the next objective before buying again.</p></article>
        <article><h3>You left the base too early</h3><p>Stabilize production and confirm Follow before travelling; a failed push costs time and replacement Cash.</p></article>
        <article><h3>An online guide gives exact ROI</h3><p>Confirm the exact Battle Action experience and date. Exact ROI is omitted until every input can be reproduced.</p></article>
      </div></section>
    </GuideArticle>
  );
}
