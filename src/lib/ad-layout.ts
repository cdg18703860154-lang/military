// Ads are opt-in for published pages; arbitrary 404 URLs remain clean.
const PUBLISHED_AD_ROUTES = new Set(["/about", "/army-builder", "/codes", "/contact", "/disclosure", "/gallery", "/guides/getting-started", "/guides/how-to-capture", "/guides/how-to-get-cash", "/guides/military-army-tycoon-vs-military-tycoon", "/guides", "/guides/rebirth", "/", "/privacy", "/sources", "/terms", "/tier-list", "/trello", "/updates", "/wiki/base-economy", "/wiki/orders", "/wiki", "/wiki/squads", "/wiki/weapons"]);

export type AdPageFamily = "home" | "hub" | "detail" | "reference" | "tool" | "clean";
export type LeaderboardSize = "320x50" | "728x90";

const CLEAN_AD_ROUTES = new Set(["/about", "/contact", "/disclosure", "/privacy", "/sources", "/terms", "/cookie-policy", "/disclaimer", "/404", "/_not-found"]);

export function normalizeAdPath(pathname?: string | null) {
  return pathname?.replace(/\/+$/, "") || "/";
}

export function isCleanAdRoute(pathname?: string | null) {
  const route = normalizeAdPath(pathname);
  return !PUBLISHED_AD_ROUTES.has(route) || CLEAN_AD_ROUTES.has(route);
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

export function chooseLeaderboardSize(availableWidth: number, hasDesktopSlot: boolean, hasMobileSlot: boolean, viewportWidth = 1280): LeaderboardSize | null {
  if (!Number.isFinite(availableWidth) || !Number.isFinite(viewportWidth) || viewportWidth < 768) return null;
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

export function isAdEligibleRoute(pathname: string) { return !isCleanAdRoute(pathname); }
export function getAdLayoutPolicy(pathname: string) {
  const family = getAdPageFamily(pathname);
  return { inlineSlots: family === "clean" ? 0 : family === "tool" ? 2 : 3, desktopRails: family === "detail" };
}
export function selectLeaderboardSize(width: number, availability: { desktop: boolean; mobile: boolean }, viewportWidth = 1280) { return chooseLeaderboardSize(width, availability.desktop, availability.mobile, viewportWidth); }

export function selectBottomBannerSize(viewportWidth: number, availableWidth: number, inventory: { desktop: boolean; mobile: boolean }) {
  if (!Number.isFinite(viewportWidth) || !Number.isFinite(availableWidth)) return null;
  if (viewportWidth >= 768) return inventory.desktop && availableWidth >= 468 ? "468x60" as const : null;
  return inventory.mobile && availableWidth >= 320 ? "320x50" as const : null;
}

export function normalizeAdUrl(value?: string) {
  if (!value) return undefined;
  try {
    const url = new URL(value.startsWith("//") ? `https:${value}` : value);
    return url.protocol === "https:" && !url.username && !url.password ? url.href : undefined;
  } catch { return undefined; }
}

export function canLoadPopunder(elapsedMs: number, pageViews: number, loaded: boolean) {
  return elapsedMs >= 30000 && pageViews >= 2 && !loaded;
}
