export const contentReview = {
  siteReviewedAt: "September 9, 2026",
  codeSourcesCheckedAt: "September 9, 2026",
  captureObservedAt: "August 31, 2026",
  rebirthObservedAt: "August 30, 2026"
} as const;

export const currentCodes = [
  {
    code: "BONUS",
    reportedReward: "50,000 Cash",
    status: "Cross-source reported",
    groupRequirement: "Several sources report a like and group gate; follow the live message.",
    sourceCheckedAt: "September 9, 2026",
    siteReviewedAt: "September 9, 2026"
  },
  {
    code: "JOINED",
    reportedReward: "50,000 Cash",
    status: "Cross-source reported",
    groupRequirement: "Several sources report a like and group gate; follow the live message.",
    sourceCheckedAt: "September 9, 2026",
    siteReviewedAt: "September 9, 2026"
  }
] as const;

export const currentGameStatus = {
  officialTitle: "Military Army Tycoon [GAZ Tiger]",
  observedAt: "September 9, 2026",
  limitation: "The title change alone does not confirm a specific vehicle, mechanic, quest, or reward."
} as const;

export const codeSummary = currentCodes.map((item) => `${item.code}: ${item.reportedReward}`).join("; ");
