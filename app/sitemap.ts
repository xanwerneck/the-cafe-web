import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/login`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/novo`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
