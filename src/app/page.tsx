import type { Metadata } from "next";
import Link from "next/link";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { FaqJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { currentCodes, currentGameStatus, contentReview, codeSummary } from "@/data/current-content";
import { gameConfig } from "@/data/game.config";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Wiki: Codes, Guides & Updates";
const description = "Current Military Army Tycoon codes, beginner steps, Orders, outpost capture guidance, Rebirth notes and verified update checks for the Battle Action Roblox game.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${siteConfig.domain}/` },
  openGraph: { title, description, url: `${siteConfig.domain}/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const homeFaq = [
  { q: "Is this the official Military Army Tycoon website?", a: "No. This is an independent fan guide. Roblox and Battle Action remain the official sources for the game, purchases, moderation, account support, and creator announcements." },
  { q: "Which game does this guide cover?", a: "It covers Military Army Tycoon by Battle Action at Roblox Place ID 95409544559668." },
  { q: "What are the current Military Army Tycoon codes?", a: "BONUS and JOINED are currently reported by multiple sources, with 50,000 Cash reported for each. Check the Codes page for current status and redemption troubleshooting." },
  { q: "Does Military Army Tycoon save progress?", a: "The official Roblox description says progress is saved automatically." },
  { q: "What does [GAZ Tiger] mean in the title?", a: "It is the suffix shown in the official Roblox title on September 9, 2026. It is not enough evidence to publish a price, unlock route, performance ranking, or complete patch note." },
  { q: "Is there an official Discord or Trello?", a: "This site verified the official Roblox experience and Battle Action group. No accessible creator-controlled Discord or Trello was confirmed during the September 9, 2026 check." }
];

const taskCards = [
  { title: "The Codes or UI in another guide do not match", body: "Check Battle Action and Place ID 95409544559668 before using another game’s codes, map, weapons or Rebirth advice.", href: "/guides/military-army-tycoon-vs-military-tycoon/", label: "Identify the correct Roblox game" },
  { title: "I just joined the game", body: "Redeem the current codes, confirm your plot and Cash display have loaded, and begin with the visible income-producing route before optional cosmetic pads.", href: "/guides/getting-started/", label: "Follow the first-session beginner guide" },
  { title: "My Cash progress feels slow", body: "Check the Dropper, Upgrader, collector, current code rewards, and dated outpost evidence. The guide focuses on decisions instead of invented ROI.", href: "/guides/how-to-get-cash/", label: "See the Cash progression guide" },
  { title: "My squad is not doing what I expect", body: "Learn the documented roles of Follow, Attack, Hold, and Retreat before committing soldiers to an outpost.", href: "/wiki/orders/", label: "Learn how all four Orders work" },
  { title: "I want to capture an outpost", body: "Prepare replacement Cash, travel with Follow, switch to Attack near defenders, enter the capture area, and wait for the live confirmation banner.", href: "/guides/how-to-capture/", label: "Follow the outpost capture steps" },
  { title: "I am considering Rebirth", body: "Read every current keep/loss warning. A dated launch-window record is useful context, but the current benefit and full reset list remain unconfirmed.", href: "/guides/rebirth/", label: "Read the Rebirth warning first" }
] as const;

const systems = [
  { title: "Base and economy", body: "The documented early loop moves production from Droppers through Upgraders to the Cash collector. Exact current rates and payback times are not verified.", href: "/wiki/base-economy/", label: "Understand the base economy" },
  { title: "Squads", body: "Current evidence supports the visible labels Pistol Squad, Rifle Squad, and SMG Squad, not a complete roster or universal ranking.", href: "/wiki/squads/", label: "Review the current squad records" },
  { title: "Orders", body: "A dated exact-game walkthrough documents Follow, Attack, Hold, and Retreat. Confirm behavior through the current squad response after updates.", href: "/wiki/orders/", label: "Learn the Orders" },
  { title: "Strategic locations", body: "A dated August 31, 2026 walkthrough showed a Tent Camp capture banner with +10% Income; rewards for every current location are not independently rechecked.", href: "/guides/how-to-capture/", label: "Prepare your first capture" }
] as const;

export default function HomePage() {
  return (
    <main data-page-role="homepage-product">
      <section data-home-module="answer">
        <div>
          <span data-home-game-identity className="mini-label">Independent exact-game field guide</span>
          <h1 className="mt-4">Military Army Tycoon Wiki</h1>
          <p data-home-value-proposition className="mt-6 leading-8">Military Army Tycoon is a Roblox base-building and squad-command game by Battle Action. Build an income loop, recruit soldier squads, issue Orders, capture strategic locations, and return later with progress saved automatically. This guide covers Place ID <strong>95409544559668</strong> and excludes similarly named games.</p>
          <p className="mt-4 text-sm leading-7 text-white/72"><strong>Official title check:</strong> On {currentGameStatus.observedAt}, Roblox showed <strong>{currentGameStatus.officialTitle}</strong>. {currentGameStatus.limitation}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link data-home-primary-action href="/codes/" className="button-primary">Check current codes</Link>
            <Link href="/guides/getting-started/" className="button-secondary">Start the beginner route</Link>
            <Link href="/wiki/orders/" className="button-secondary">Learn squad Orders</Link>
            <a href={gameConfig.dataSources.officialGameUrl} target="_blank" rel="noreferrer" className="button-secondary">Play on Roblox</a>
          </div>
        </div>
      </section>

      <AdsterraArticleTop />

      <section data-home-module="tasks">
        <h2>Current Military Army Tycoon codes</h2>
        <p>{codeSummary}. Source check: {contentReview.codeSourcesCheckedAt}. Status: cross-source reported. This site has not independently redeemed the codes in a live client.</p>
        <div className="mt-5 overflow-x-auto">
          <table>
            <thead><tr><th>Code</th><th>Reported reward</th><th>Current status</th></tr></thead>
            <tbody>{currentCodes.map((item) => <tr key={item.code}><td><code>{item.code}</code></td><td>{item.reportedReward}</td><td>Cross-source reported</td></tr>)}</tbody>
          </table>
        </div>
        <p className="mt-4">Several current guides report a like and Battle Action group requirement; others omit it. The official description confirms a free group boost, not a universal code rule. The reported route is Setting → Codes → green REDEME. Follow the live eligibility message.</p>
        <Link href="/codes/" className="mt-4 inline-flex font-bold text-cyan-300">See redemption steps, Copy buttons, and fixes →</Link>

        <h2 className="mt-10">Start with the task you need</h2>
        <nav aria-label="Choose a guide">
          {taskCards.map((card) => <p key={card.href}><strong className="block text-white">{card.title}</strong><span className="mt-2 block">{card.body}</span><Link href={card.href} className="mt-3 inline-flex font-bold text-cyan-300">{card.label} →</Link></p>)}
        </nav>
      </section>

      <section data-home-module="systems">
        <h2>Core systems</h2>
        <div className="mt-5">
          {systems.map((system) => <article key={system.href}><h3>{system.title}</h3><p>{system.body}</p><Link href={system.href} className="mt-3 inline-flex font-bold text-cyan-300">{system.label} →</Link></article>)}
        </div>
      </section>

      <AdsterraArticleMid />

      <section data-home-module="fresh">
        <h2>Latest verified status</h2>
        <div className="mt-5">
          <article><h3>September 9, 2026 — Current title and Codes rechecked</h3><p>The official title still includes [GAZ Tiger]. {codeSummary} remain cross-source reported. The title does not prove vehicle mechanics or a complete patch.</p></article>
          <article><h3>September 7, 2026 — Mission reports remain under review</h3><p>A fan transcription mentions Missions and new units. Direct evidence is insufficient for unlock guides or confirmed records.</p></article><article><h3>September 5, 2026 — Roblox update metadata changed</h3><p>A third-party metadata snapshot lists this update date; detailed patch content remains unconfirmed.</p></article>
          <article><h3>August 31, 2026 — Dated capture walkthrough</h3><p>An exact-game walkthrough documented Follow to Attack and showed a Tent Camp banner with +10% Income. It is not a guarantee for every current outpost.</p></article>
          <article><h3>August 15, 2026 — Public release</h3><p>The official Roblox description lists August 15, 2026 as the public release date.</p></article>
        </div>
        <Link href="/updates/" className="mt-5 inline-flex font-bold text-cyan-300">See the full update and verification log →</Link>
      </section>

      <section data-home-module="proof"><div><h2>Editorial note</h2><p>This guide separates confirmed official information, dated exact-game observations, cross-source reports, and unverified claims.</p><aside>Battle Action and Roblox remain the official sources. Read <Link href="/sources/" className="font-bold text-cyan-300">Sources and Editorial Method</Link> for evidence levels, corrections, AI use, and content limitations.</aside></div></section>

      <section data-home-module="discover">
        <h2>Explore the field guide</h2>
        <nav aria-label="Explore the site">
          <p><strong>Guides</strong><span className="mt-2 block">Task-focused routes for the first session, Cash, captures, and Rebirth.</span><Link href="/guides/" className="mt-3 inline-flex font-bold text-cyan-300">Browse guides →</Link></p>
          <p><strong>Wiki records</strong><span className="mt-2 block">Conservative records for economy, squads, weapons, and Orders.</span><Link href="/wiki/" className="mt-3 inline-flex font-bold text-cyan-300">Browse the wiki →</Link></p>
          <p><strong>Army Mission Planner</strong><span className="mt-2 block">Turn your objective and readiness into a deterministic next step.</span><Link href="/army-builder/" className="mt-3 inline-flex font-bold text-cyan-300">Generate a mission plan →</Link></p>
          <p><strong>Squad comparison</strong><span className="mt-2 block">Compare only what current evidence actually supports.</span><Link href="/tier-list/" className="mt-3 inline-flex font-bold text-cyan-300">Compare current squads →</Link></p>
        </nav>
      </section>

      <AdsterraArticleBottom />

      <section data-home-faq="true">{homeFaq.map((item) => <article key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>)}</section>
      <WebSiteJsonLd />
      <FaqJsonLd items={homeFaq} />
    </main>
  );
}
