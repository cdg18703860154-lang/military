import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, type GuideStep } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";

const title = "How to Capture Outposts in Military Army Tycoon";
const description = "Prepare a squad, use Follow and Attack, take Tent Camp or another outpost, confirm the capture banner and troubleshoot failed attempts.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}/guides/how-to-capture/` },
  openGraph: { title, description, url: `${siteConfig.domain}/guides/how-to-capture/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const steps: GuideStep[] = [
  { title: "Recruit a squad you can replace", body: <p>The dated walkthrough uses a Pistol Squad for the first neutral objective. Rifle and SMG labels are also documented, but not a complete power comparison.</p> },
  { title: "Open Orders", body: <p>Use the current HUD to open Orders. Its exact position is patch-sensitive.</p> },
  { title: "Select Follow", body: <><p>Choose Follow and move a short distance near the base.</p><p><strong>Success signal:</strong> the squad changes direction and travels with you. If it fails, reopen Orders and confirm the intended squad is active.</p></> },
  { title: "Approach the objective", body: <p>Move toward the marked flag or capture zone. Confirm the squad remains together before entering defender range.</p> },
  { title: "Switch to Attack", body: <><p>Select Attack when enemy NPCs are nearby.</p><p><strong>Success signal:</strong> the squad engages defenders instead of only trailing you.</p></> },
  { title: "Clear the defenders", body: <p>Use Retreat rather than repeatedly feeding replacements into a fight that is wiping out the squad.</p> },
  { title: "Enter the capture area", body: <p>After defenders are clear, move onto the marked flag or zone and remain until an ownership change or banner appears.</p> },
  { title: "Verify the result", body: <><p>The dated Tent Camp example displayed “Tent Camp has been captured! (+10% Income).”</p><p>No banner or ownership change means the capture is not complete. The live client is the final confirmation.</p></> },
  { title: "Hold, return, or advance", body: <p>Use Hold at a position, Retreat when the server turns unfavorable, and return when recovery Cash or base defense is low. Do not advance only because an older guide calls another outpost “next.”</p> }
];

const faq = [
  { q: "Which outpost should I capture first?", a: "The August 31, 2026 walkthrough presents Tent Camp as an early target. Treat that as dated guidance and check the current server." },
  { q: "What confirms a successful capture?", a: "Look for an ownership change or capture banner. The dated Tent Camp example displayed +10% Income." },
  { q: "Why is my squad not following?", a: "Test Follow near the base, confirm the correct squad, and reopen Orders if behavior does not change." },
  { q: "Can I capture alone?", a: "The official description confirms army-based capture gameplay. This review did not find reliable evidence for a universal solo method." },
  { q: "Do all outposts give the same reward?", a: "Not confirmed. Only the August 31, 2026 demonstrated Tent Camp result is published here as a dated observation." },
  { q: "Do the bonuses stack?", a: "Not confirmed by two independent direct sources." }
];

export default function CaptureGuidePage() {
  return (
    <GuideArticle
      eyebrow="Capture flow observed August 31, 2026 • reviewed September 9, 2026"
      title="How to Capture Outposts in Military Army Tycoon"
      description="Prepare a working income loop, recruit a squad, use Follow while travelling, switch to Attack near defenders, enter the marked area, and wait for the live capture banner. The documented +10% Income Tent Camp reward is a dated observation, not a guarantee for every location."
      status={<p className="text-sm text-white/70"><strong>Patch note:</strong> The official title now includes [GAZ Tiger], but that title change does not establish a capture mechanic.</p>}
      beforeSteps={<><section data-guide-requirements><h2>Before you leave the base</h2><ul>
        <li>The base income loop is running.</li><li>You can recover from a failed squad.</li><li>A squad responds to Follow.</li><li>Orders is available and Retreat is understood.</li><li>The target is a marked strategic location in Battle Action&apos;s game.</li><li>The current server will not overwhelm an exposed base.</li>
      </ul></section><section className="content-card"><h2>Current outpost evidence</h2><div className="mt-4 overflow-x-auto"><table><thead><tr><th>Location</th><th>Dated evidence</th><th>Publication status</th></tr></thead><tbody>
        <tr><td>Tent Camp</td><td>Early target; banner displayed +10% Income on August 31, 2026</td><td>Dated observation</td></tr>
        <tr><td>Small Town</td><td>Named as a later target in the same walkthrough</td><td>Current reward unconfirmed</td></tr>
        <tr><td>Centre</td><td>Named as a later, harder target</td><td>Reward and squad requirement unconfirmed</td></tr>
      </tbody></table></div></section></>}
      stepsTitle="Step-by-step capture route"
      steps={steps}
      mistakes={[
        "Leaving before Follow works.",
        "Spending all Cash before the attempt.",
        "Switching to Attack too early and separating the squad.",
        "Standing near the flag without clearing defenders.",
        "Treating Tent Camp as proof of every reward.",
        "Sending every squad away.",
        "Using a route from another Military Tycoon.",
        "Assuming [GAZ Tiger] explains a capture mechanic."
      ]}
      faq={faq}
      sourceNotes={<><section><h2>Evidence boundary</h2><p> Follow, Attack, Hold, Retreat, the named locations, and the Tent Camp banner come from a dated August 31, 2026 exact-game walkthrough. All-location +10% rewards and stacking are not published as facts.</p></section><nav aria-label="Related guides"><h2>Related guides</h2><p>Need command details? Open the <Link href="/wiki/orders/" className="font-bold text-cyan-300">Orders guide</Link>. Need to rebuild? Use the <Link href="/guides/how-to-get-cash/" className="font-bold text-cyan-300">Cash guide</Link> or <Link href="/army-builder/" className="font-bold text-cyan-300">Army Mission Planner</Link>.</p></nav></>}
      breadcrumb="How to Capture"
      route="/guides/how-to-capture/"
    >
      <section className="content-card"><h2>Which Order should you use?</h2><div className="mt-4 overflow-x-auto"><table><thead><tr><th>Stage</th><th>Order</th><th>Purpose</th></tr></thead><tbody><tr><td>Leaving base</td><td>Follow</td><td>Keep the squad travelling with you</td></tr><tr><td>Defenders in range</td><td>Attack</td><td>Engage nearby enemy NPCs</td></tr><tr><td>Protecting a position</td><td>Hold</td><td>Keep the squad at the selected area</td></tr><tr><td>Losing fight</td><td>Retreat</td><td>Pull out and rebuild</td></tr></tbody></table></div></section>
      <section className="content-card"><h2>Why did the capture fail?</h2><div className="mt-4 overflow-x-auto"><table><thead><tr><th>Problem</th><th>Likely cause</th><th>Fix</th></tr></thead><tbody>
        <tr><td>Squad stays at base</td><td>Follow not applied, wrong squad, or UI changed</td><td>Reopen Orders and test near base</td></tr>
        <tr><td>Squad follows but does not fight</td><td>Attack not selected or target is distant</td><td>Move to safe range, then select Attack</td></tr>
        <tr><td>Squad dies before flag</td><td>Setup or server is too difficult</td><td>Retreat, improve readiness, retain recovery Cash</td></tr>
        <tr><td>Flag does not change</td><td>Defenders remain or player is outside the zone</td><td>Clear the area and stand on the marked zone</td></tr>
        <tr><td>No reward banner</td><td>Capture incomplete or reward changed</td><td>Check ownership; do not assume the old reward</td></tr>
        <tr><td>Base is exposed</td><td>Every unit left</td><td>Keep a defensive option on Hold</td></tr>
      </tbody></table></div></section>
    </GuideArticle>
  );
}
