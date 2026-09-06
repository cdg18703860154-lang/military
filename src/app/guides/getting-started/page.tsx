import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, type GuideStep } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Beginner Guide: First Session";
const description = "Follow a clear first-session route for Military Army Tycoon: redeem codes, build income, recruit a squad, learn Orders and prepare for an outpost.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}/guides/getting-started/` },
  openGraph: { title, description, url: `${siteConfig.domain}/guides/getting-started/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const steps: GuideStep[] = [
  {
    title: "Confirm the exact game",
    body: <><p>Check the developer is <strong>Battle Action</strong>, the Place ID is <strong>95409544559668</strong>, and the official title observed September 6, 2026 is <strong>Military Army Tycoon [GAZ Tiger]</strong>.</p><p>Reject codes, units, maps, Diamonds, vault systems, or Rebirth advice from similarly named games.</p></>
  },
  {
    title: "Redeem the current reported codes",
    body: <><p>Open Settings and the Codes tab. Try <code>BONUS</code> and <code>JOINED</code>, each reported by multiple sources on September 5, 2026 to award 50,000 Cash. This site has not independently redeemed them.</p><p><strong>Success signal:</strong> the client accepts the code and the Cash balance changes. If it fails, use the <Link href="/codes/" className="font-bold text-cyan-300">Codes troubleshooting table</Link>.</p></>
  },
  {
    title: "Establish the income loop",
    body: <><p>Buy the required path to the first income producer, add the visible Dropper, use an Upgrader when it affects the active line, and collect the generated Cash. Oil Containers appear later in launch-window evidence, but current prices and returns are not verified.</p><p><strong>Success signal:</strong> production reaches the collector and available Cash increases.</p></>
  },
  {
    title: "Unlock the Barracks and recruit an early squad",
    body: <p>A dated August 31, 2026 walkthrough uses a <strong>Pistol Squad</strong> for a first neutral objective. Rifle Squad and SMG Squad labels also appear in current evidence, but there is no complete roster or universal ranking. Recruit a squad you can afford to replace.</p>
  },
  {
    title: "Learn Orders near the base",
    body: <><p>Practice <strong>Follow</strong> for travel, <strong>Attack</strong> near enemies, <strong>Hold</strong> for a position, and <strong>Retreat</strong> to leave a losing fight.</p><p><strong>Success signal:</strong> the squad responds to Follow before you leave the base.</p></>
  },
  {
    title: "Prepare the first outpost attempt",
    body: <p>Confirm income still runs, recovery Cash remains, the squad follows, Orders opens, and the server is manageable. A dated August 31, 2026 walkthrough presents Tent Camp as an early target and shows a +10% Income banner; treat both as dated observations.</p>
  },
  {
    title: "Complete the basic capture sequence",
    body: <p>Select Follow, approach the marked target, switch to Attack near defenders, clear the area, enter the capture point, and wait for an ownership or reward banner. Retreat and rebuild if the squad is being wiped out.</p>
  },
  {
    title: "Choose the next bottleneck",
    body: <ul className="mt-2 list-disc pl-5"><li>Slow Cash: improve the active income route.</li><li>Squad fails: review current options without assuming old prices.</li><li>Commands fail: return to the Orders guide.</li><li>Base is exposed: use Hold.</li><li>Rebirth is visible: read the current prompt before confirming.</li></ul>
  }
];

const faq = [
  { q: "What should I buy first?", a: "Start with the required route to the visible income-producing chain. Prioritize production and upgrades affecting active income before optional decoration." },
  { q: "Which squad should I unlock first?", a: "Pistol Squad is the earliest option documented in the August 31, 2026 walkthrough. Current costs and the full roster still need a live recheck." },
  { q: "When should I attempt an outpost?", a: "After income is stable, a squad responds to Orders, and you can recover from a failed fight." },
  { q: "Which Order should I use while travelling?", a: "Use Follow in the documented flow, then switch to Attack near defenders." },
  { q: "Does progress save?", a: "The official game description says progress is saved automatically." },
  { q: "Should I Rebirth as soon as I see the option?", a: "No universal answer is verified. Read the current prompt and understand what is lost and what benefit is shown." }
];

export default function GettingStartedPage() {
  return (
    <GuideArticle
      eyebrow="Beginner route • reviewed September 6, 2026"
      title="Military Army Tycoon Beginner Guide"
      description="Confirm the Battle Action experience, try the current reported codes, establish visible income, unlock the Barracks, recruit a squad, and learn Follow and Attack before attempting an outpost. Do not buy every pad simply because it is nearby."
      status={<p className="text-sm text-white/70"><strong>Patch-sensitive:</strong> pad prices, squad costs, UI positions, outpost rewards, and Rebirth requirements.</p>}
      stepsTitle="First-session route"
      steps={steps}
      mistakes={[
        "Buying every visible pad by distance.",
        "Leaving before Follow works.",
        "Treating a video title as a complete strategy.",
        "Spending all code Cash immediately.",
        "Using another Military Tycoon guide.",
        "Rebirthing without reading the live prompt."
      ]}
      faq={faq}
      sourceNotes={<><aside><strong>First-session checklist:</strong> correct game; codes attempted; income reaches collector; Barracks available; squad recruited; Follow tested; recovery Cash retained; capture result checked.</aside><aside><strong>Evidence boundary:</strong> Identity and autosave come from the official description. Codes are cross-source reports. Squad, Orders, and Tent Camp details are dated August 31, 2026 observations. Continue with the <Link href="/guides/how-to-get-cash/" className="font-bold text-cyan-300">Cash guide</Link>, <Link href="/wiki/orders/" className="font-bold text-cyan-300">Orders guide</Link>, or <Link href="/guides/how-to-capture/" className="font-bold text-cyan-300">capture route</Link>.</aside></>}
      breadcrumb="Getting Started"
      route="/guides/getting-started/"
    />
  );
}
