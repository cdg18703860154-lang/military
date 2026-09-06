import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Rebirth Guide: Cost & Reset Warning";
const description = "See the observed Military Army Tycoon Rebirth cost, the current reset warning, what is still unconfirmed and what to check before resetting.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}/guides/rebirth/` },
  openGraph: { title, description, url: `${siteConfig.domain}/guides/rebirth/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const faq = [
  { q: "How much does Rebirth cost?", a: "A launch-window prompt recorded on August 30, 2026 showed 250,000 Cash. The current cost was not independently rechecked." },
  { q: "Do I lose Cash?", a: "The dated August 30, 2026 prompt said current money would be lost." },
  { q: "Do I keep Robux items?", a: "The dated August 30, 2026 prompt said Robux items would be kept." },
  { q: "Do I keep buildings, squads, weapons, or outposts?", a: "Not confirmed. Read the live prompt and do not use another game's reset table." },
  { q: "What is the multiplier?", a: "Not confirmed." },
  { q: "Is Rebirth worth it?", a: "It cannot be answered universally until the current benefit and full reset behavior are known." },
  { q: "Why is there no Rebirth Calculator?", a: "The inputs needed for an accurate calculator are not verified." }
];

export default function RebirthPage() {
  return (
    <GuideArticle
      eyebrow="Launch-window observation • August 30, 2026"
      title="Military Army Tycoon Rebirth Guide"
      description="The best dated evidence on this site is an August 30, 2026 launch-window prompt showing a 250,000 Cash requirement, current money being lost, and Robux items being kept. The current benefit, multiplier, full reset list, and later costs are not confirmed."
      status={<p className="text-sm text-white/70"><strong>Important:</strong> Open the current prompt before confirming. The official title has changed since this observation, so the old record is not a guarantee.</p>}
      beforeSteps={<><section className="content-card"><h2>Known and unknown Rebirth details</h2><div className="mt-4 overflow-x-auto"><table><thead><tr><th>Detail</th><th>Evidence status</th></tr></thead><tbody>
        <tr><td>Observed launch-window requirement</td><td>250,000 Cash on August 30, 2026</td></tr>
        <tr><td>Current money</td><td>Dated prompt said it would be lost</td></tr>
        <tr><td>Robux items</td><td>Dated prompt said they would be kept</td></tr>
        <tr><td>Current requirement on September 6, 2026</td><td>Not independently rechecked</td></tr>
        <tr><td>Buildings, Droppers, Upgraders</td><td>Not confirmed</td></tr>
        <tr><td>Squads, weapons, outposts</td><td>Not confirmed</td></tr>
        <tr><td>Group boost</td><td>Not confirmed</td></tr>
        <tr><td>Benefit or multiplier</td><td>Not confirmed</td></tr>
        <tr><td>Second Rebirth cost</td><td>Not confirmed</td></tr>
        <tr><td>Best universal timing</td><td>Not supportable yet</td></tr>
      </tbody></table></div></section><section data-guide-requirements><h2>Before you Rebirth</h2><ul>
        <li>Open the current Rebirth prompt and record the displayed requirement.</li>
        <li>Read every loss line and every kept-item line.</li>
        <li>Confirm a benefit is shown and understood.</li>
        <li>Take a screenshot for your record.</li>
        <li>Finish any objective you do not want interrupted.</li>
        <li>Decide whether current Cash has a better immediate use.</li>
        <li>Confirm Place ID 95409544559668.</li>
      </ul><p><strong>Do not confirm only because the balance reached an old threshold.</strong></p></section></>}
      mistakes={[
        "Using another Military Tycoon guide.",
        "Treating the August 30, 2026 cost as permanent.",
        "Assuming everything except Cash is kept.",
        "Rebirthing without understanding the benefit.",
        "Publishing a multiplier from one unsourced article."
      ]}
      faq={faq}
      sourceNotes={<><aside><strong>Evidence boundary:</strong> The 250,000 Cash threshold, money-loss warning, and kept Robux items are tied only to an August 30, 2026 site record. Everything marked unconfirmed remains unconfirmed.</aside><aside>Compare immediate Cash uses in the <Link href="/guides/how-to-get-cash/" className="font-bold text-cyan-300">Cash guide</Link>, inspect dated changes in <Link href="/updates/" className="font-bold text-cyan-300">Updates</Link>, or report a new prompt through <Link href="/contact/" className="font-bold text-cyan-300">Contact</Link>.</aside></>}
      breadcrumb="Rebirth"
      route="/guides/rebirth/"
    >
      <section className="content-card"><h2>When should you wait?</h2><ul className="mt-4 list-disc space-y-2 pl-6"><li>The prompt does not explain the benefit.</li><li>You have not read the loss warning.</li><li>The requirement differs from the August 30, 2026 record.</li><li>You need the Cash for a near-term unlock.</li><li>An update changed progression.</li><li>A guide relies on unrelated Diamonds, vaults, oil rigs, heists, or other-game systems.</li></ul></section>
      <section className="content-card"><h2>When might Rebirth make sense?</h2><p>Only when the current prompt clearly states the cost and reset, the benefit is visible or confirmed, and that benefit matters more than spending current Cash on the next unlock. This site does not publish a fixed “Rebirth immediately” rule.</p></section>
      <section className="content-card"><h2>What to record after Rebirth</h2><div className="mt-4 overflow-x-auto"><table><thead><tr><th>Field</th><th>Before</th><th>After</th></tr></thead><tbody>
        <tr><td>Cash</td><td>Current balance</td><td>Starting balance</td></tr><tr><td>Income</td><td>Current visible state</td><td>New state</td></tr><tr><td>Buildings</td><td>Built systems</td><td>Retained or reset</td></tr><tr><td>Squads</td><td>Unlocked or active</td><td>Retained or reset</td></tr><tr><td>Weapons</td><td>Owned or unlocked</td><td>Retained or reset</td></tr><tr><td>Outposts</td><td>Current ownership</td><td>Ownership after reset</td></tr><tr><td>Robux items</td><td>Owned items</td><td>Retained items</td></tr><tr><td>Benefit</td><td>Prompt text</td><td>Actual visible effect</td></tr><tr><td>Next cost</td><td>Current threshold</td><td>Next threshold</td></tr>
      </tbody></table></div><p>Until these inputs are verified, a calculator would create false precision.</p></section>
    </GuideArticle>
  );
}
