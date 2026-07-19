import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogContent from "@/components/blog/BlogContent";
import BlogHeader from "@/components/blog/BlogHeader";
import { formatBlogDate } from "@/components/blog/BlogPostCard";
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog/posts";
import { blogHomeHref, blogPostHref, blogPublicUrl } from "@/lib/blog/urls";
import { siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Artigo não encontrado",
      robots: { index: false, follow: false },
    };
  }

  const url = blogPublicUrl(`/${post.slug}`);

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.blogName,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: "/logo.png",
          width: 512,
          height: 512,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/logo.png"],
    },
  };
}

function postJsonLd(post: NonNullable<ReturnType<typeof getBlogPost>>) {
  const url = blogPublicUrl(`/${post.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: "pt-BR",
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    keywords: post.tags.join(", "),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const homeHref = await blogHomeHref();
  const otherPosts = (await Promise.all(
    getAllBlogSlugs()
      .filter((candidate) => candidate !== post.slug)
      .slice(0, 2)
      .map(async (candidate) => {
        const related = getBlogPost(candidate);
        if (!related) return null;
        return {
          post: related,
          href: await blogPostHref(related.slug),
        };
      }),
  )).filter(Boolean);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#5e2a8b] pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd(post)) }}
      />

      <BlogHeader />

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-10">
        <article>
          <header className="space-y-4 mb-8">
            <Link
              href={homeHref}
              className="inline-flex text-xs font-bold uppercase tracking-widest text-[#5e2a8b]/50 hover:text-[#5e2a8b] transition-colors"
            >
              ← Voltar aos artigos
            </Link>

            <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-[#5e2a8b]/45">
              <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTimeMinutes} min de leitura</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-[#5e2a8b]/70 font-medium leading-relaxed">
              {post.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#E4D1B9]/35 text-[#5e2a8b] text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="bg-white rounded-[24px] p-6 sm:p-8 ring-1 ring-[#5e2a8b]/8 shadow-sm">
            <BlogContent blocks={post.content} />
          </div>
        </article>

        {otherPosts.length > 0 && (
          <section aria-labelledby="more-articles-heading" className="space-y-4">
            <h2
              id="more-articles-heading"
              className="text-[10px] font-bold uppercase tracking-[2px] text-[#5e2a8b]/45"
            >
              Continue lendo
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {otherPosts.map((entry) =>
                entry ? (
                  <Link
                    key={entry.post.slug}
                    href={entry.href}
                    className="bg-white rounded-2xl p-4 ring-1 ring-[#5e2a8b]/8 hover:ring-[#5e2a8b]/20 transition-all"
                  >
                    <h3 className="font-black leading-snug mb-2">{entry.post.title}</h3>
                    <p className="text-sm text-[#5e2a8b]/60 font-medium line-clamp-3">
                      {entry.post.description}
                    </p>
                  </Link>
                ) : null,
              )}
            </div>
          </section>
        )}

        <section className="bg-[#5e2a8b] text-white rounded-[24px] p-6 sm:p-8 text-center space-y-4">
          <h2 className="text-2xl font-black tracking-tight">
            Transforme leitura em prática
          </h2>
          <p className="text-white/80 font-medium leading-relaxed">
            Catalogar seus cafés é o próximo passo natural. Comece sua estante virtual no The Cafe.
          </p>
          <a
            href={siteConfig.url}
            className="inline-flex bg-white text-[#5e2a8b] px-8 py-4 rounded-2xl font-black text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Abrir thecafe.app
          </a>
        </section>
      </main>
    </div>
  );
}
