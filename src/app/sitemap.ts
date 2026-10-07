import type { MetadataRoute } from "next";
import { newsArticles } from "@/data/news";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();
  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/architecture`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...newsArticles.map((article) => ({
      url: `${base}/architecture/${article.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
