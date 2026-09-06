export type Objective = "learn-orders" | "first-outpost" | "defend" | "recover" | "rebirth";
export type Readiness = "yes" | "no" | "not-sure";
export type RebirthPromptState = "yes" | "no" | "not-applicable";

export type MissionPlannerInput = {
  objective: Objective;
  income: Readiness;
  squad: Readiness;
  orders: Readiness;
  replacement: Readiness;
  rebirthPrompt: RebirthPromptState;
};

export type MissionPlanId =
  | "build-income-loop"
  | "recruit-squad"
  | "practice-orders"
  | "follow-attack-verify"
  | "defensive-hold"
  | "retreat-rebuild"
  | "do-not-reset"
  | "compare-rebirth";

export type MissionPlan = {
  id: MissionPlanId;
  title: string;
  body: string;
  risk?: string;
  actions: ReadonlyArray<{ label: string; href: string }>;
};

export const missionPlans: Record<MissionPlanId, MissionPlan> = {
  "build-income-loop": {
    id: "build-income-loop",
    title: "BUILD THE INCOME LOOP",
    body: "Your next objective depends on a working base. Follow the required path to the visible production pads, make sure the Dropper and Upgrader route reaches the collector, and confirm that available Cash increases. Delay the mission until the base can support a squad and recover from a failed attempt.",
    actions: [
      { label: "Open the Cash guide", href: "/guides/how-to-get-cash/" },
      { label: "Complete the beginner economy steps", href: "/guides/getting-started/" }
    ]
  },
  "recruit-squad": {
    id: "recruit-squad",
    title: "RECRUIT A CURRENTLY AVAILABLE SQUAD",
    body: "The mission cannot use Orders until a squad is present. Unlock the Barracks route, choose an available squad you can afford to replace, and confirm that it appears before leaving the base. Do not select a unit from an online tier list if it is not visible in your current game.",
    actions: [{ label: "Review current squad evidence", href: "/wiki/squads/" }]
  },
  "practice-orders": {
    id: "practice-orders",
    title: "PRACTICE FOLLOW, HOLD AND RETREAT",
    body: "Open Orders near the base. Select Follow and confirm that the squad moves with you. Test Hold at a safe position and identify Retreat before starting a real fight. The dated capture flow uses Follow for travel and Attack near defenders.",
    actions: [{ label: "Open the Orders guide", href: "/wiki/orders/" }]
  },
  "follow-attack-verify": {
    id: "follow-attack-verify",
    title: "FOLLOW → ATTACK → VERIFY",
    body: "Your base, squad and Orders are ready for the documented first-outpost flow. Select Follow, confirm the squad travels with you, approach the marked objective, switch to Attack near defenders, clear the area, enter the capture point, and wait for the live banner. A dated August 31, 2026 Tent Camp capture displayed +10% Income, but the current reward must be verified in your client.",
    risk: "Use Retreat if the squad is being wiped out. Do not spend the recovery balance on another push until the failure cause is fixed.",
    actions: [
      { label: "Open the full capture guide", href: "/guides/how-to-capture/" },
      { label: "Keep the Orders guide available", href: "/wiki/orders/" }
    ]
  },
  "defensive-hold": {
    id: "defensive-hold",
    title: "SET A DEFENSIVE HOLD",
    body: "Move the squad to the position you want to protect, select Hold, and walk away far enough to confirm that the squad remains there. Hold controls position; it does not guarantee that the current squad is strong enough for every attacker.",
    actions: [{ label: "Review Hold and other Orders", href: "/wiki/orders/" }]
  },
  "retreat-rebuild": {
    id: "retreat-rebuild",
    title: "RETREAT AND FIX THE BOTTLENECK",
    body: "Stop repeating the same fight. Use Retreat where possible, return to the base, restore replacement Cash, and identify whether the failure came from income, squad readiness, Orders, target difficulty, or server pressure. Retry only after one of those conditions changes.",
    actions: [
      { label: "Restore the Cash loop", href: "/guides/how-to-get-cash/" },
      { label: "Review current squads", href: "/wiki/squads/" }
    ]
  },
  "do-not-reset": {
    id: "do-not-reset",
    title: "DO NOT RESET YET",
    body: "Open the current Rebirth prompt and read the cost, loss warning, kept items and displayed benefit. A dated August 30, 2026 launch-window record showed 250,000 Cash, current money being lost and Robux items being kept, but the current full reset and benefit are not verified.",
    actions: [{ label: "Open the Rebirth guide", href: "/guides/rebirth/" }]
  },
  "compare-rebirth": {
    id: "compare-rebirth",
    title: "COMPARE THE LIVE BENEFIT WITH CURRENT PROGRESS",
    body: "You have read the current prompt, but this planner cannot decide the reset from unverified hidden values. Compare the displayed benefit with the progress and Cash you will lose. Confirm only when the live prompt—not an old guide—supports the decision.",
    actions: [{ label: "Use the Rebirth checklist", href: "/guides/rebirth/" }]
  }
};

export function createMissionPlan(input: MissionPlannerInput): MissionPlan {
  if (input.objective === "rebirth") {
    return input.rebirthPrompt === "yes"
      ? missionPlans["compare-rebirth"]
      : missionPlans["do-not-reset"];
  }

  if (input.income !== "yes") return missionPlans["build-income-loop"];
  if (input.squad !== "yes") return missionPlans["recruit-squad"];
  if (input.orders !== "yes") return missionPlans["practice-orders"];

  if (input.objective === "learn-orders") return missionPlans["practice-orders"];
  if (input.objective === "defend") return missionPlans["defensive-hold"];
  if (input.objective === "recover" || input.replacement !== "yes") {
    return missionPlans["retreat-rebuild"];
  }

  return missionPlans["follow-attack-verify"];
}
