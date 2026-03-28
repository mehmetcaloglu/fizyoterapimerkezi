import type { MetadataRoute } from "next";
import { services } from "@/data/mockData";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/kvkk`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];

  const serviceEntries = services.map((s) => ({
    url: `${base}/hizmetler/${s.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...serviceEntries];
}
