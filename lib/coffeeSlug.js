export function titleToSlug(title) {
  return title.toLowerCase().trim().replace(/\s+/g, "-");
}

export function slugToTitle(slug) {
  return slug.replaceAll("-", " ");
}
