import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("../src/lib/army-planner.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext }
});
const { createMissionPlan } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
);

const ready = {
  objective: "first-outpost",
  income: "yes",
  squad: "yes",
  orders: "yes",
  replacement: "yes",
  rebirthPrompt: "not-applicable"
};

test("the mission planner exposes every documented result through deterministic rules", () => {
  const cases = [
    [{ ...ready, income: "no" }, "build-income-loop"],
    [{ ...ready, squad: "no" }, "recruit-squad"],
    [{ ...ready, orders: "not-sure" }, "practice-orders"],
    [ready, "follow-attack-verify"],
    [{ ...ready, objective: "defend" }, "defensive-hold"],
    [{ ...ready, objective: "recover" }, "retreat-rebuild"],
    [{ ...ready, objective: "rebirth", rebirthPrompt: "no" }, "do-not-reset"],
    [{ ...ready, objective: "rebirth", rebirthPrompt: "yes" }, "compare-rebirth"]
  ];

  for (const [input, expected] of cases) {
    assert.equal(createMissionPlan(input).id, expected);
    assert.equal(createMissionPlan(input).id, createMissionPlan(input).id);
  }
});

test("uncertain prerequisites produce conservative next steps", () => {
  assert.equal(createMissionPlan({ ...ready, income: "not-sure" }).id, "build-income-loop");
  assert.equal(createMissionPlan({ ...ready, squad: "not-sure" }).id, "recruit-squad");
  assert.equal(createMissionPlan({ ...ready, replacement: "no" }).id, "retreat-rebuild");
  assert.equal(
    createMissionPlan({ ...ready, objective: "learn-orders", orders: "yes" }).id,
    "practice-orders"
  );
});

test("Rebirth advice depends on the live prompt, not squad fields", () => {
  assert.equal(
    createMissionPlan({
      ...ready,
      objective: "rebirth",
      squad: "no",
      orders: "no",
      rebirthPrompt: "yes"
    }).id,
    "compare-rebirth"
  );
  assert.equal(
    createMissionPlan({ ...ready, objective: "rebirth", rebirthPrompt: "not-applicable" }).id,
    "do-not-reset"
  );
});
