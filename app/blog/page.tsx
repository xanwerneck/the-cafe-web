import type { Metadata } from "next";
import Link from "next/link";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { blogPosts } from "@/lib/blog/posts";
import { blogHomeHref } from "@/lib/blog/urls";
import { blogTitle, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: blogTitle,
  description: siteConfig.blogDescription,
  alternates: {
    canonical: siteConfig.blogUrl,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.blogUrl,
    siteName: siteConfig.blogName,
    title: blogTitle,
    description: siteConfig.blogDescription,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: blogTitle,
    description: siteConfig.blogDescription,
    images: ["/logo.png"],
  },
};

function blogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.blogUrl}/#website`,
        url: siteConfig.blogUrl,
        name: siteConfig.blogName,
        description: siteConfig.blogDescription,
        inLanguage: "pt-BR",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "Blog",
        "@id": `${siteConfig.blogUrl}/#blog`,
        url: siteConfig.blogUrl,
        name: siteConfig.blogName,
        description: siteConfig.blogDescription,
        inLanguage: "pt-BR",
        publisher: { "@id": `${siteConfig.url}/#organization` },
        blogPost: blogPosts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.publishedAt,
          author: {
            "@type": "Organization",
            name: post.author,
          },
          url: `${siteConfig.blogUrl}/${post.slug}`,
        })),
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo.png`,
        },
      },
    ],
  };
}

export default async function BlogPage() {
  const homeHref = await blogHomeHref();

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#5e2a8b] pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd()) }}
      />

      <BlogHeader />

      <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">
        <section className="text-center space-y-4">
          <p className="inline-block bg-[#E4D1B9]/30 text-[#5e2a8b] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[2px]">
            Blog The Cafe
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.95]">
            Café especial,{" "}
            <span className="text-[#5e2a8b]/40 italic">explicado de forma simples.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#5e2a8b]/70 font-medium leading-relaxed">
            Guias práticos sobre origens, torras, métodos e como catalogar seus rótulos na
            comunidade The Cafe.
          </p>
        </section>

        <section aria-labelledby="articles-heading" className="space-y-6">
          <h2
            id="articles-heading"
            className="text-[10px] font-bold uppercase tracking-[2px] text-[#5e2a8b]/45"
          >
            Artigos recentes
          </h2>
          <div className="space-y-5">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <section className="bg-white rounded-[24px] p-6 ring-1 ring-[#5e2a8b]/8 shadow-sm text-center space-y-4">
          <h2 className="text-xl font-black tracking-tight">
            Pronto para montar sua estante virtual?
          </h2>
          <p className="text-[#5e2a8b]/70 font-medium leading-relaxed">
            Catalogue seus cafés, compartilhe opiniões e descubra novos rótulos com a comunidade.
          </p>
          <Link
            href={siteConfig.url}
            className="inline-flex bg-[#5e2a8b] text-white px-8 py-4 rounded-2xl font-black text-sm shadow-lg shadow-[#5e2a8b]/15 hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Conhecer o The Cafe
          </Link>
        </section>
      </main>

      <footer className="py-10 text-center border-t border-[#5e2a8b]/5">
        <p className="text-[10px] font-bold text-[#5e2a8b]/30 uppercase tracking-[3px]">
          {siteConfig.blogName} · {siteConfig.name}
        </p>
        <Link
          href={homeHref}
          className="sr-only"
        >
          Voltar ao blog
        </Link>
      </footer>
    </div>
  );
}
