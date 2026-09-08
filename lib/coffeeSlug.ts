import { siteConfig } from "@/lib/site";

export function titleToSlug(title?: string | null) {
  if (!title) return "";

  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** SEO-friendly path: ID is authoritative, slug is cosmetic. */
export function coffeeHref({ id, title }: { id: number; title?: string | null }) {
  const slug = titleToSlug(title);
  return slug ? `/coffee/${id}-${slug}` : `/coffee/${id}`;
}

export function coffeePublicUrl(coffee: { id: number; title?: string | null }) {
  return `${siteConfig.url}${coffeeHref(coffee)}`;
}

/** Extract numeric ID from `/coffee/97-...`. */
export function parseCoffeeId(param?: string | string[] | null) {
  if (!param) return null;
  const value = Array.isArray(param) ? param[0] : param;
  const match = String(value).match(/^(\d+)/);
  return match ? Number(match[1]) : null;
}
