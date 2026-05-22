export function userHref(username) {
  if (!username) return "/";
  return `/user/${encodeURIComponent(username)}`;
}
