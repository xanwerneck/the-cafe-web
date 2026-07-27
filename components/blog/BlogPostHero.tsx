import Image from "next/image";
import type { BlogCoverImage } from "@/lib/blog/types";

export default function BlogPostHero({ cover }: { cover: BlogCoverImage }) {
  return (
    <div className="relative w-full h-52 sm:h-64 md:h-80 overflow-hidden">
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#FDFCFB] via-[#FDFCFB]/20 to-transparent"
        aria-hidden
      />
    </div>
  );
}
