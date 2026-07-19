import Link from "next/link";
import type { BlogPost } from "@/lib/blog/types";
import { blogPostHref } from "@/lib/blog/urls";

function formatBlogDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostCard({ post }: { post: BlogPost }) {
  const href = await blogPostHref(post.slug);

  return (
    <article className="group bg-white rounded-[24px] p-6 ring-1 ring-[#5e2a8b]/8 shadow-sm hover:ring-[#5e2a8b]/20 hover:shadow-md transition-all">
      <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-[#5e2a8b]/45 mb-3">
        <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTimeMinutes} min de leitura</span>
      </div>

      <h2 className="text-2xl font-black tracking-tight leading-tight mb-3 group-hover:text-[#5e2a8b]/80 transition-colors">
        <Link href={href} className="hover:underline underline-offset-4">
          {post.title}
        </Link>
      </h2>

      <p className="text-[#5e2a8b]/70 font-medium leading-relaxed mb-4">
        {post.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-[#E4D1B9]/35 text-[#5e2a8b] text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={href}
        className="inline-flex items-center text-sm font-black text-[#5e2a8b] hover:opacity-70 transition-opacity"
      >
        Ler artigo →
      </Link>
    </article>
  );
}

export { formatBlogDate };
