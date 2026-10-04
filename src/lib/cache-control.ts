/** 1 year — browser + CDN cache for fingerprinted or versioned static assets */
export const CACHE_ONE_YEAR_IMMUTABLE = "public, max-age=31536000, immutable";

/**
 * HTML: browsers revalidate after deploy; Vercel edge caches static output (no Redis / server store).
 */
export const CACHE_STATIC_HTML_VERCEL_CDN =
  "public, max-age=0, must-revalidate, s-maxage=31536000, stale-while-revalidate=86400";

/** SEO metadata routes — short browser TTL, longer edge SWR */
export const CACHE_SEO_FILES =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";

export const ONE_YEAR_SECONDS = 31_536_000;
