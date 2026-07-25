import cafeEspecialPatrickCoffees from "@/lib/blog/posts/cafe-especial-patrick-coffees-84-pontos";
import comoCatalogar from "@/lib/blog/posts/como-catalogar-seus-cafes";
import oQueECafeEspecial from "@/lib/blog/posts/o-que-e-cafe-especial";
import type { BlogPost } from "@/lib/blog/types";

export const blogPosts: BlogPost[] = [
  oQueECafeEspecial,
  comoCatalogar,
  cafeEspecialPatrickCoffees,
].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}
