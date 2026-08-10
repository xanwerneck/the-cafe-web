import cafe85Pontos from "@/lib/blog/posts/cafe-85-pontos-vale-a-pena-conhecer";
import cafeBaggioBourbon from "@/lib/blog/posts/cafe-baggio-bourbon-500g-graos";
import cafeBaggioChocolateTrufado from "@/lib/blog/posts/cafe-baggio-chocolate-trufado-vale-a-pena-entenda";
import cafeChiara from "@/lib/blog/posts/cafe-chiara-vale-a-pena-linhas-e-pontuacoes";
import cafeEspecialPatrickCoffees from "@/lib/blog/posts/cafe-especial-patrick-coffees-84-pontos";
import comoCatalogar from "@/lib/blog/posts/como-catalogar-seus-cafes";
import diferencaArabicaConilon from "@/lib/blog/posts/diferenca-entre-cafe-arabica-e-conilon-robusta";
import oQueECafeEspecial from "@/lib/blog/posts/o-que-e-cafe-especial";
import type { BlogPost } from "@/lib/blog/types";

export const blogPosts: BlogPost[] = [
  oQueECafeEspecial,
  comoCatalogar,
  cafeEspecialPatrickCoffees,
  cafeBaggioBourbon,
  cafeBaggioChocolateTrufado,
  diferencaArabicaConilon,
  cafe85Pontos,
  cafeChiara,
].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}
