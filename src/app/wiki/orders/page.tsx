import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, type GuideStep } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Orders: Follow, Attack, Hold & Retreat";
const description = "Learn what Follow, Attack, Hold and Retreat do in Military Army Tycoon, when to use each Order and how to fix squads that do not respond.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}/wiki/orders/` },
  openGraph: { title, description, url: `${siteConfig.domain}/wiki/orders/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const steps: GuideStep[] = [
  { title: "How to use Follow", body: <p>Recruit or select a squad, open Orders, select Follow, move a short distance near the base, and confirm the squad moves with you. Do not begin the route if it remains stationary.</p> },
  { title: "How to use Attack", body: <p>Travel with Follow, stop before the main defender group, confirm the squad is present, then select Attack when enemies are nearby. Retreat if losses continue without progress. Attack does not itself prove an objective is captured.</p> },
  { title: "How to use Hold", body: <p>Use Hold while guarding a base, staging at a safe point, preventing a squad from following into a bad route, or protecting a captured area. The success signal is that the squad remains after you move away.</p> },
  { title: "How to use Retreat", body: <p>Select Retreat before every unit is lost, move away, confirm survivors disengage, restore Cash or squad readiness, and retry only after the bottleneck changes.</p> }
];

const faq = [
  { q: "What are the four Orders?", a: "Follow, Attack, Hold, and Retreat." },
  { q: "Which Order brings my squad with me?", a: "Follow." },
  { q: "Which Order makes soldiers fight?", a: "Attack engages nearby enemy NPCs in the dated documented flow." },
  { q: "Which Order should defend the base?", a: "Hold can keep a squad at a position; it does not guarantee victory." },
  { q: "Can I switch Orders during a fight?", a: "The August 31, 2026 walkthrough describes real-time switching. Current behavior should be confirmed live." }
];

export default function OrdersPage() {
  return (
    <GuideArticle
      eyebrow="Wiki record • behavior observed August 31, 2026"
      title="Military Army Tycoon Orders Guide"
      description="A dated exact-game walkthrough documents Follow, Attack, Hold, and Retreat. Use Follow for travel, Attack near enemy NPCs, Hold at a position, and Retreat to leave a losing fight. Recheck panel location and behavior after updates."
      status={<p className="text-sm text-white/70"><strong>Page review:</strong> September 9, 2026. <strong>Hidden AI or pathfinding values:</strong> unavailable.</p>}
      beforeSteps={<section className="content-card"><h2>Orders at a glance</h2><div className="mt-4 overflow-x-auto"><table><thead><tr><th>Order</th><th>Documented behavior</th><th>Useful situation</th><th>Verify</th></tr></thead><tbody>
        <tr><td>Follow</td><td>Travels with the player</td><td>Moving to an objective</td><td>Units change direction and stay with you</td></tr>
        <tr><td>Attack</td><td>Engages nearby enemy NPCs</td><td>Clearing defenders</td><td>Units switch from travel to combat</td></tr>
        <tr><td>Hold</td><td>Remains at a position</td><td>Guarding or staging</td><td>Units stop following and stay</td></tr>
        <tr><td>Retreat</td><td>Pulls out of a losing fight</td><td>Avoiding a wipe</td><td>Units disengage and leave</td></tr>
      </tbody></table></div></section>}
      stepsTitle="How to use each Order"
      steps={steps}
      faq={faq}
      sourceNotes={<><section><h2>Evidence boundary</h2><p> Behaviors come from a dated August 31, 2026 walkthrough and current labels. No hidden range, cooldown, or AI values are claimed.</p></section><nav aria-label="Related guides"><h2>Related guides</h2><p>Apply these commands in the <Link href="/guides/how-to-capture/" className="font-bold text-cyan-300">outpost capture route</Link>, compare documented <Link href="/wiki/squads/" className="font-bold text-cyan-300">squad labels</Link>, or use the <Link href="/army-builder/" className="font-bold text-cyan-300">Army Mission Planner</Link>.</p></nav></>}
      breadcrumb="Orders"
      route="/wiki/orders/"
      family="wiki"
    >
      <section className="content-card"><h2>First-outpost command sequence</h2><p className="mt-4 text-lg font-black text-white">FOLLOW → approach target → ATTACK → clear defenders → enter capture area → verify banner</p><p>Use Hold for defense and Retreat when the push fails.</p></section>
      <section className="content-card"><h2>Why are Orders not working?</h2><div className="mt-4 grid gap-4 sm:grid-cols-2">
        <article><h3>Squad does not move after Follow</h3><p>Confirm a squad is recruited and selected. Reopen Orders, select Follow, and test near the base.</p></article>
        <article><h3>Squad follows but ignores defenders</h3><p>Select Attack when defenders are nearby. Do not assume Attack moves the squad across the map.</p></article>
        <article><h3>Hold does not protect the base</h3><p>Hold controls position; it does not guarantee strength. Verify where the squad stops.</p></article>
        <article><h3>Retreat happens too late</h3><p>Use it when the fight is clearly failing, before every unit has been eliminated.</p></article>
        <article><h3>Buttons moved</h3><p>The official title changed after the dated walkthrough. Use the live HUD as the current interface reference.</p></article>
      </div></section>
    </GuideArticle>
  );
}
