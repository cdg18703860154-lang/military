export const contentReview = {
  siteReviewedAt: "September 6, 2026",
  codeSourcesCheckedAt: "September 5, 2026",
  captureObservedAt: "August 31, 2026",
  rebirthObservedAt: "August 30, 2026"
} as const;

export const currentCodes = [
  {
    code: "BONUS",
    reportedReward: "50,000 Cash",
    status: "Reported working",
    groupRequirement: "Sources disagree; try it in the current client.",
    sourceCheckedAt: "September 5, 2026",
    siteReviewedAt: "September 6, 2026"
  },
  {
    code: "JOINED",
    reportedReward: "50,000 Cash",
    status: "Reported working",
    groupRequirement: "May require membership in the Battle Action Roblox group.",
    sourceCheckedAt: "September 5, 2026",
    siteReviewedAt: "September 6, 2026"
  }
] as const;

export const currentGameStatus = {
  officialTitle: "Military Army Tycoon [GAZ Tiger]",
  observedAt: "September 6, 2026",
  limitation: "The title change alone does not confirm a specific vehicle, mechanic, quest, or reward."
} as const;
