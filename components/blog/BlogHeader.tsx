import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { blogHomeHref } from "@/lib/blog/urls";

export default async function BlogHeader() {
  const homeHref = await blogHomeHref();

  return (
    <header className="sticky top-0 z-10 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-[#5e2a8b]/5">
      <nav
        className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center gap-4"
        aria-label="Blog"
      >
        <Link href={homeHref} className="flex items-center shrink-0" aria-label={`${siteConfig.blogName} — início`}>
          <img
            src="/logo.png"
            alt={siteConfig.name}
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href={homeHref}
            className="text-xs font-bold uppercase tracking-widest text-[#5e2a8b]/60 hover:text-[#5e2a8b] transition-colors"
          >
            Artigos
          </Link>
          <a
            href={siteConfig.url}
            className="text-xs font-bold uppercase tracking-widest text-[#5e2a8b]/60 hover:text-[#5e2a8b] transition-colors"
          >
            Abrir app
          </a>
        </div>
      </nav>
    </header>
  );
}
