import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog/posts";
import { blogPublicUrl } from "@/lib/blog/urls";
import { coffeePublicUrl } from "@/lib/coffeeSlug";
import { getAllCoffees } from "@/lib/coffees/api";
import { siteConfig } from "@/lib/site";

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const coffees = await getAllCoffees({ revalidate: 86400 });

  return [
    {
      url: siteConfig.url,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: siteConfig.blogUrl,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogPosts.map((post) => ({
      url: blogPublicUrl(`/${post.slug}`),
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...coffees.map((coffee) => ({
      url: coffeePublicUrl(coffee),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      images: coffee.original_picture ? [coffee.original_picture] : undefined,
    })),
    {
      url: `${siteConfig.url}/login`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/novo`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
