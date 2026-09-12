export const contentReview = {
  siteReviewedAt: "September 9, 2026",
  codeSourcesCheckedAt: "September 12, 2026 (UTC)",
  captureObservedAt: "August 31, 2026",
  rebirthObservedAt: "August 30, 2026"
} as const;

export const currentCodes = [
  {
    code: "Bonus",
    reportedReward: "50,000 Cash",
    status: "Reported by current guides; live validity unconfirmed",
    liveRedemption: null,
    sourceSpellings: ["Bonus", "BONUS"],
    groupRequirement: "Several sources report a like and group gate; follow the live message.",
    sourceCheckedAt: "September 12, 2026 (UTC)",
    latestTrackerCheck: "September 11, 2026 (timezone unspecified)",
    siteReviewedAt: "September 12, 2026 (UTC)"
  },
  {
    code: "Joined",
    reportedReward: "50,000 Cash",
    status: "Reported by current guides; live validity unconfirmed",
    liveRedemption: null,
    sourceSpellings: ["Joined", "JOINED"],
    groupRequirement: "Several sources report a like and group gate; follow the live message.",
    sourceCheckedAt: "September 12, 2026 (UTC)",
    latestTrackerCheck: "September 11, 2026 (timezone unspecified)",
    siteReviewedAt: "September 12, 2026 (UTC)"
  }
] as const;

export const currentGameStatus = {
  officialTitle: "Military Army Tycoon [GAZ Tiger]",
  observedAt: "September 9, 2026",
  limitation: "The title change alone does not confirm a specific vehicle, mechanic, quest, or reward."
} as const;

export const codeSummary = currentCodes.map((item) => `${item.code}: ${item.reportedReward}`).join("; ");
