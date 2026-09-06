import type { Metadata } from "next";
import Link from "next/link";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { CodeActions } from "@/components/codes/CodeActions";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { PageIntro } from "@/components/ui/content";
import { currentCodes } from "@/data/current-content";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Codes (September 2026)";
const description = "Check the latest Military Army Tycoon codes, reported Cash rewards, redemption steps, code failure fixes and the current verification status.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${siteConfig.domain}/codes/` },
  openGraph: { title, description, url: `${siteConfig.domain}/codes/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const faq = [
  { q: "What are the latest Military Army Tycoon codes?", a: "BONUS and JOINED are the two current cross-source reported codes as of the September 6, 2026 check." },
  { q: "How much Cash does each code give?", a: "Current sources checked September 5, 2026 report 50,000 Cash for each code." },
  { q: "Where is the code box?", a: "Open Settings on the left side of the screen, then open the Codes tab at the top." },
  { q: "Are the codes case-sensitive?", a: "Current sources present the strings in uppercase. Copy them exactly as shown instead of testing variations." },
  { q: "Do I have to join the Battle Action group?", a: "Sources conflict. The official description confirms a free group boost, not a universal code prerequisite. Follow the live client if it displays an eligibility message." },
  { q: "Have these codes been tested by this site today?", a: "No. They are marked as cross-source reported because this site did not independently perform a live redemption." },
  { q: "Can a code expire after this page is checked?", a: "Yes. The verification date describes the latest source check, not a guarantee that the code cannot change." }
];

export default function CodesPage() {
  return (
    <main data-asset-family="codes" data-page-role="freshness-status" className="mx-auto max-w-5xl px-4 py-10">
      <section data-first-screen-answer>
        <PageIntro eyebrow="Cross-source code report • reviewed September 6, 2026" title="Military Army Tycoon Codes" description="Two codes are currently reported as active by multiple editorial sources updated on September 5, 2026: BONUS and JOINED. Each is reported to award 50,000 Cash. This site reviewed the sources but has not independently redeemed either code in a live client.">
          <dl className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
            <div><dt>Status</dt><dd>Cross-source reported</dd></div>
            <div><dt>Official developer code post located</dt><dd>No</dd></div>
            <div><dt>Independent live-client redemption</dt><dd>Not completed</dd></div>
            <div><dt>Potential reported total</dt><dd>100,000 Cash if both work</dd></div>
          </dl>
        </PageIntro>
      </section>

      <AdsterraArticleTop />

      <section className="content-card" data-asset-module="code-status">
        <h2>Current codes</h2>
        <div className="mt-4 overflow-x-auto">
          <table>
            <thead><tr><th>Code</th><th>Reported reward</th><th>Evidence status</th><th>Action and feedback</th></tr></thead>
            <tbody>
              {currentCodes.map((item) => (
                <tr key={item.code}>
                  <td><code className="text-lg font-black text-white">{item.code}</code></td>
                  <td>{item.reportedReward}</td>
                  <td>{item.status}<br /><small>{item.groupRequirement}</small></td>
                  <td><CodeActions code={item.code} status={item.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="mt-8">Is group membership required?</h3>
        <p>Current sources disagree. Some say you must join the Battle Action Roblox group, while others give the normal Settings route without that condition. The official Roblox description confirms a free in-game group boost, but does not say every code requires membership.</p>
        <ol className="mt-4 list-decimal space-y-2 pl-6">
          <li>Try the exact code once after the game and base have loaded.</li>
          <li>If the live game shows an eligibility or group message, open the <Link href="/trello/" className="font-bold text-cyan-300">verified Battle Action links</Link>.</li>
          <li>Join only the verified official group, rejoin the experience, and try once more.</li>
          <li>Do not treat group membership as universal unless the live client says so.</li>
        </ol>
      </section>

      <section className="content-card" data-guide-steps>
        <h2>How to redeem Military Army Tycoon codes</h2>
        <ol>
          <li><h3>Open the exact game</h3><p>Use the Military Army Tycoon experience by Battle Action at Place ID 95409544559668.</p></li>
          <li><h3>Wait for the base to load</h3><p>Confirm your plot and Cash display are visible.</p></li>
          <li><h3>Open Settings</h3><p>Select the Settings icon on the left side of the screen.</p></li>
          <li><h3>Open Codes</h3><p>Select the Codes tab at the top of Settings.</p></li>
          <li><h3>Paste one code</h3><p>Paste BONUS or JOINED exactly as shown, then select Redeem.</p></li>
          <li><h3>Verify the outcome</h3><p>Check the live message and Cash total before trying the second code. Current guides report a 50,000 Cash increase when accepted.</p></li>
        </ol>
      </section>

      <AdsterraArticleMid />

      <section className="content-card">
        <h2>Why is my code not working?</h2>
        <div className="mt-4 overflow-x-auto">
          <table>
            <thead><tr><th>What you see</th><th>Likely explanation</th><th>What to do</th></tr></thead>
            <tbody>
              <tr><td>Nothing happens</td><td>Menu or base may not have loaded</td><td>Close Settings, wait for the HUD and plot, then try once more.</td></tr>
              <tr><td>Invalid code</td><td>Typo, extra space, change, or expiry</td><td>Use Copy, clear the field, and paste again.</td></tr>
              <tr><td>Already redeemed</td><td>The account may have used it</td><td>Try the other code.</td></tr>
              <tr><td>Eligibility or group message</td><td>A current account condition may apply</td><td>Follow the exact live message, use only the official group, then rejoin.</td></tr>
              <tr><td>Codes tab is missing</td><td>UI changed or the wrong game is open</td><td>Confirm Battle Action and Place ID 95409544559668.</td></tr>
              <tr><td>Cash does not change</td><td>Redemption failed or the UI is delayed</td><td>Record the before/after balance, rejoin once, and check the message.</td></tr>
              <tr><td>A guide lists another code</td><td>It may cover a similarly named game</td><td>Reject lists not tied to this Battle Action experience.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-card">
        <h2>What should you do with the code Cash?</h2>
        <p>Use the reward to remove the next real progression bottleneck rather than buying every visible pad. Prices and available pads can change, so this is editorial progression advice—not an official fixed build order.</p>
        <ol className="mt-4 list-decimal space-y-2 pl-6">
          <li>Make sure the visible income-producing route is running.</li>
          <li>Complete any required path to the Barracks.</li>
          <li>Recruit the earliest squad needed for the next objective.</li>
          <li>Keep enough Cash to recover from a failed outpost attempt.</li>
          <li>Delay decoration that does not unlock income, squads, Orders, or the next objective.</li>
        </ol>
        <nav className="mt-5 grid gap-3 sm:grid-cols-3" aria-label="Next steps">
          <Link className="row-link" href="/guides/getting-started/"><span>Follow the first-session route</span></Link>
          <Link className="row-link" href="/guides/how-to-get-cash/"><span>Improve the Cash loop</span></Link>
          <Link className="row-link" href="/guides/how-to-capture/"><span>Prepare an outpost capture</span></Link>
        </nav>
      </section>

      <section className="content-card"><h2>Expired codes</h2><p>No code entered the confirmed-expired list during the September 6, 2026 review. A single failed report is not enough. A code moves here only after a developer-controlled expiry notice, repeated exact-game live failures, or multiple current independent sources agree it expired.</p></section>

      <AdsterraArticleBottom />

      <section data-guide-faq><h2>Frequently asked questions</h2>{faq.map((item) => <article key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>)}</section>
      <section data-source-notes>
        <aside><strong>Evidence boundary:</strong> Code strings, reported rewards, and redemption steps are cross-source reports. The official description confirms only the Battle Action group boost. This page does not claim an official code announcement or an independent live test.</aside>
        <aside><strong>Wrong-game warning:</strong> Use only Battle Action&apos;s experience at Place ID 95409544559668. Similar titles can have unrelated codes.</aside>
      </section>
      <FaqJsonLd items={faq} />
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes/" }]} />
    </main>
  );
}
