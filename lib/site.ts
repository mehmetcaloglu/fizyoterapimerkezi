/** Canlı site kökü — Search Console / sitemap için. .env ile override: NEXT_PUBLIC_SITE_URL */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://kadirtemel.com.tr";
  return raw.replace(/\/$/, "");
}
