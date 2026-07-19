import { headers } from "next/headers";
import { siteConfig } from "@/lib/site";

export async function getBlogPathPrefix() {
  const host = (await headers()).get("host")?.split(":")[0];
  if (host === siteConfig.blogHost || host === "blog.localhost") {
    return "";
  }
  return "/blog";
}

export function blogPublicUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return normalizedPath === "/" ? siteConfig.blogUrl : `${siteConfig.blogUrl}${normalizedPath}`;
}

export async function blogPostHref(slug: string) {
  const prefix = await getBlogPathPrefix();
  return prefix ? `${prefix}/${slug}` : `/${slug}`;
}

export async function blogHomeHref() {
  const prefix = await getBlogPathPrefix();
  return prefix || "/";
}
