import type { Metadata } from "next";
import Link from "next/link";
import BlogHeader from "@/components/blog/BlogHeader";
import { blogPosts } from "@/lib/blog/posts";
import { blogHomeHref, blogPostHref } from "@/lib/blog/urls";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Artigo não encontrado",
  robots: { index: false, follow: true },
};

export default async function BlogNotFound() {
  const homeHref = await blogHomeHref();
  const suggested = (
    await Promise.all(
      blogPosts.slice(0, 2).map(async (post) => ({
        post,
        href: await blogPostHref(post.slug),
      })),
    )
  );

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#5e2a8b] pb-16">
      <BlogHeader />

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section className="text-center space-y-5">
          <p className="inline-block bg-[#E4D1B9]/30 text-[#5e2a8b] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[2px]">
            404
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.95]">
            Esse artigo não está{" "}
            <span className="text-[#5e2a8b]/40 italic">na prateleira.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-[#5e2a8b]/70 font-medium leading-relaxed">
            O endereço pode ter mudado ou o texto ainda não foi publicado. Dá para
            voltar aos artigos ou continuar a leitura por aqui.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href={homeHref}
              className="inline-flex bg-[#5e2a8b] text-white px-8 py-4 rounded-2xl font-black text-sm shadow-lg shadow-[#5e2a8b]/15 hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Ver todos os artigos
            </Link>
            <a
              href={siteConfig.url}
              className="inline-flex bg-white text-[#5e2a8b] px-8 py-4 rounded-2xl font-black text-sm ring-1 ring-[#5e2a8b]/12 hover:ring-[#5e2a8b]/25 transition-all"
            >
              Abrir thecafe.app
            </a>
          </div>
        </section>

        {suggested.length > 0 && (
          <section aria-labelledby="suggested-articles-heading" className="space-y-4">
            <h2
              id="suggested-articles-heading"
              className="text-[10px] font-bold uppercase tracking-[2px] text-[#5e2a8b]/45"
            >
              Continue lendo
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {suggested.map(({ post, href }) => (
                <Link
                  key={post.slug}
                  href={href}
                  className="bg-white rounded-2xl p-4 ring-1 ring-[#5e2a8b]/8 hover:ring-[#5e2a8b]/20 transition-all"
                >
                  <h3 className="font-black leading-snug mb-2">{post.title}</h3>
                  <p className="text-sm text-[#5e2a8b]/60 font-medium line-clamp-3">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
