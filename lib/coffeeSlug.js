export function titleToSlug(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** SEO-friendly path: ID is authoritative, slug is cosmetic. */
export function coffeeHref({ id, title }) {
  const slug = titleToSlug(title);
  return slug ? `/coffee/${id}-${slug}` : `/coffee/${id}`;
}

/** Extract numeric ID from `/coffee/97-...` or legacy slug-only URLs. */
export function parseCoffeeId(param) {
  if (!param) return null;
  const match = String(param).match(/^(\d+)/);
  return match ? Number(match[1]) : null;
}

/** @deprecated Legacy slug-only URLs; prefer parseCoffeeId + coffeeHref. */
export function slugToTitle(slug) {
  return slug.replaceAll("-", " ");
}
