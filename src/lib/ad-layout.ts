export type AdPageFamily = "home" | "hub" | "detail" | "reference" | "tool" | "clean";
export type LeaderboardSize = "320x50" | "728x90";

const CLEAN_AD_ROUTES = new Set(["/about", "/contact", "/disclosure", "/privacy", "/sources", "/terms"]);

export function normalizeAdPath(pathname?: string | null) {
  return pathname?.replace(/\/+$/, "") || "/";
}

export function isCleanAdRoute(pathname?: string | null) {
  return CLEAN_AD_ROUTES.has(normalizeAdPath(pathname));
}

export function getAdPageFamily(pathname?: string | null): AdPageFamily {
  const route = normalizeAdPath(pathname);
  if (isCleanAdRoute(route)) return "clean";
  if (route === "/") return "home";
  if (route === "/army-builder") return "tool";
  if (route === "/trello") return "reference";
  if (["/codes", "/tier-list", "/updates"].includes(route) || route.startsWith("/guides/") || route.startsWith("/wiki/")) return "detail";
  return "hub";
}

export function chooseLeaderboardSize(availableWidth: number, hasDesktopSlot: boolean, hasMobileSlot: boolean): LeaderboardSize | null {
  if (hasDesktopSlot && availableWidth >= 728) return "728x90";
  if (hasMobileSlot && availableWidth >= 320) return "320x50";
  return null;
}

export function normalizeScriptUrl(value?: string) {
  if (!value?.trim()) return undefined;
  const candidate = value.trim();
  try {
    const url = new URL(candidate.startsWith("//") ? `https:${candidate}` : candidate);
    return url.protocol === "https:" && !url.username && !url.password ? url.href : undefined;
  } catch {
    return undefined;
  }
}
