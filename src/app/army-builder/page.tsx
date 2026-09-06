"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { AdsterraToolAd, AdsterraToolBottom } from "@/components/ads";
import { FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { PageIntro } from "@/components/ui/content";
import { createMissionPlan, missionPlans, type MissionPlannerInput } from "@/lib/army-planner";

const initialInputs: MissionPlannerInput = {
  objective: "first-outpost",
  income: "not-sure",
  squad: "not-sure",
  orders: "not-sure",
  replacement: "not-sure",
  rebirthPrompt: "not-applicable"
};

const objectiveOptions = [
  ["learn-orders", "Learn squad Orders"],
  ["first-outpost", "Prepare my first outpost"],
  ["defend", "Hold a position or defend the base"],
  ["recover", "Recover after a failed push"],
  ["rebirth", "Check whether I am ready to Rebirth"]
] as const;

const readinessOptions = [
  ["yes", "Yes"],
  ["no", "No"],
  ["not-sure", "Not sure"]
] as const;

const faq = [
  { q: "Is this a combat calculator?", a: "No. It is an explainable readiness and mission planner." },
  { q: "Why does it not choose Rifle or SMG as best?", a: "There is no same-condition benchmark supporting a universal choice." },
  { q: "Does it guarantee capture?", a: "No. Server pressure, updates, squad availability, and execution can change the result." },
  { q: "Will selections be saved?", a: "No account is required. This version resets selections when the page reloads." }
];

function track(event: string, parameters: Record<string, string>) {
  const browserWindow = window as Window & {
    gtag?: (command: "event", eventName: string, params: Record<string, string>) => void;
  };
  browserWindow.gtag?.("event", event, parameters);
}

export default function ArmyMissionPlannerPage() {
  const [inputs, setInputs] = useState<MissionPlannerInput>(initialInputs);
  const [plan, setPlan] = useState(() => createMissionPlan(initialInputs));
  const [generated, setGenerated] = useState(false);

  function setField<K extends keyof MissionPlannerInput>(field: K, value: MissionPlannerInput[K]) {
    setInputs((current) => ({ ...current, [field]: value }));
    if (field === "objective") track("army_planner_start", { objective: String(value) });
  }

  function generate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextPlan = createMissionPlan(inputs);
    setPlan(nextPlan);
    setGenerated(true);
    track("army_planner_generate", { objective: inputs.objective, readiness_state: JSON.stringify(inputs) });
    track("army_planner_result", { result_type: nextPlan.id });
  }

  function reset() {
    setInputs(initialInputs);
    setPlan(createMissionPlan(initialInputs));
    setGenerated(false);
    track("army_planner_reset", { objective: initialInputs.objective });
  }

  return (
    <main data-asset-family="tool" data-page-role="interactive-tool" className="mx-auto max-w-5xl px-4 py-10">
      <section data-first-screen-answer>
        <PageIntro eyebrow="Army Mission Planner • evidence reviewed September 6, 2026" title="Build Your Next Army Mission Plan" description="Choose your objective and current readiness. The planner returns a Base → Squad → Orders → Objective → Verify route using documented systems. It does not calculate hidden combat power, invent squad stats, or guarantee a win.">
          <p className="text-sm text-white/70"><strong>Hidden stat model:</strong> none. <strong>Supported:</strong> economy, squad readiness, Orders, first-outpost flow, retreat, and Rebirth prompt checks.</p>
        </PageIntro>
      </section>

      <form onSubmit={generate} className="mt-5 grid gap-6 rounded-3xl border p-6 md:p-8">
        <section>
          <h2>Choose your objective</h2>
          <label htmlFor="planner-objective" className="mt-4 block font-bold text-white">What are you trying to do?</label>
          <select id="planner-objective" value={inputs.objective} onChange={(event) => setField("objective", event.target.value as MissionPlannerInput["objective"])} className="mt-2 min-h-12 w-full rounded-xl px-4">
            {objectiveOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </section>

        <section>
          <h2>Check your current readiness</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <ReadinessField id="income" label="Is the base income loop running?" value={inputs.income} onChange={(value) => setField("income", value)} helper="Choose Yes only when production reaches the collector and available Cash can increase." />
            <ReadinessField id="squad" label="Is a squad recruited and visible?" value={inputs.squad} onChange={(value) => setField("squad", value)} helper="Pistol, Rifle, and SMG labels are documented; the planner does not assume they are unlocked." />
            <ReadinessField id="orders" label="Can you open Orders?" value={inputs.orders} onChange={(value) => setField("orders", value)} />
            <ReadinessField id="replacement" label="Can you replace a failed squad without stopping progress?" value={inputs.replacement} onChange={(value) => setField("replacement", value)} />
            <div>
              <label htmlFor="rebirth-prompt" className="block font-bold text-white">For Rebirth: have you read the current live prompt?</label>
              <select id="rebirth-prompt" value={inputs.rebirthPrompt} onChange={(event) => setField("rebirthPrompt", event.target.value as MissionPlannerInput["rebirthPrompt"])} className="mt-2 min-h-12 w-full rounded-xl px-4">
                <option value="yes">Yes</option><option value="no">No</option><option value="not-applicable">Not applicable</option>
              </select>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <button data-tool-primary-action type="submit" className="button-primary">Generate mission plan</button>
          <button type="button" onClick={reset} className="button-secondary">Reset plan</button>
        </div>
      </form>

      <section data-asset-module="tool-result" aria-live="polite" className="content-card">
        <span className="mini-label">{generated ? "Your mission plan" : "Safe starting point"}</span>
        <h2 className="mt-3">{plan.title}</h2>
        <p>{plan.body}</p>
        {plan.risk ? <p className="mt-4 border-l-4 border-amber-300 pl-4"><strong>Risk:</strong> {plan.risk}</p> : null}
        <nav className="mt-5 flex flex-wrap gap-3" aria-label="Mission plan actions">
          {plan.actions.map((action) => <Link key={action.href} href={action.href} className="button-secondary button-small" onClick={() => track("army_planner_guide_click", { result_type: plan.id, target: action.href })}>{action.label}</Link>)}
        </nav>
      </section>

      <AdsterraToolAd />

      <section data-tool-methodology="true">
        <h2>How the planner decides</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6"><li>No working income: build the economy.</li><li>No visible squad: recruit a current option.</li><li>Orders unavailable or untested: practice commands.</li><li>First outpost with all checks passing: Follow, Attack, verify.</li><li>Defense objective: Hold and verify.</li><li>Failed push or no replacement buffer: Retreat and rebuild.</li><li>Rebirth prompt unread: do not reset.</li><li>Prompt read: compare manually; no invented recommendation.</li></ol>
        <p>It does not use fabricated DPS, power scores, artwork, another game&apos;s units, or an unverified multiplier.</p>
        <nav className="mt-5 grid gap-3 sm:grid-cols-3" aria-label="Planner reference guides">
          <Link className="row-link" href="/guides/how-to-get-cash/"><span>Cash guide</span></Link><Link className="row-link" href="/guides/getting-started/"><span>Beginner route</span></Link><Link className="row-link" href="/wiki/squads/"><span>Squad evidence</span></Link><Link className="row-link" href="/wiki/orders/"><span>Orders guide</span></Link><Link className="row-link" href="/guides/how-to-capture/"><span>Capture route</span></Link><Link className="row-link" href="/guides/rebirth/"><span>Rebirth checklist</span></Link>
        </nav>
      </section>

      <section data-tool-result-states><h2>Planner outputs</h2><ul className="mt-4 list-disc pl-6">{Object.values(missionPlans).map((item) => <li key={item.id}><strong>{item.title}</strong></li>)}</ul></section>

      <AdsterraToolBottom />

      <section data-guide-faq><h2>Frequently asked questions</h2>{faq.map((item) => <article key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>)}</section>
      <SoftwareApplicationJsonLd name="Military Army Tycoon Army Mission Planner" description="A deterministic readiness and mission planner for Military Army Tycoon." />
      <FaqJsonLd items={faq} />
    </main>
  );
}

function ReadinessField({ id, label, value, onChange, helper }: { id: string; label: string; value: MissionPlannerInput["income"]; onChange: (value: MissionPlannerInput["income"]) => void; helper?: string }) {
  return <div><label htmlFor={`planner-${id}`} className="block font-bold text-white">{label}</label><select id={`planner-${id}`} value={value} onChange={(event) => onChange(event.target.value as MissionPlannerInput["income"])} className="mt-2 min-h-12 w-full rounded-xl px-4">{readinessOptions.map(([option, text]) => <option key={option} value={option}>{text}</option>)}</select>{helper ? <p className="text-sm text-white/60">{helper}</p> : null}</div>;
}
