import { COMPANY_NAME } from "./brand";

const DEFAULT_DESCRIPTION =
  "EXCEL ATELIER is an architecture and design studio shaping bold, clear spaces for founders and growing teams—from workplaces to retail.";

/** Canonical site URL (set NEXT_PUBLIC_SITE_URL in Vercel production). */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const siteConfig = {
  name: COMPANY_NAME,
  description: DEFAULT_DESCRIPTION,
  locale: "en_IN",
  ogImagePath: "/logo.png",
} as const;
