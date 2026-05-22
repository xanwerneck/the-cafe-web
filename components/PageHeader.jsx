"use client";

import Image from "next/image";
import Link from "next/link";

export default function PageHeader() {
  return (
    <header className="sticky top-0 z-10 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-[#5e2a8b]/5">
      <nav className="max-w-xl mx-auto px-4 py-4 flex justify-between items-center">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
        >
          ← Voltar
        </button>
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="The Cafe"
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
        <div className="w-14" aria-hidden />
      </nav>
    </header>
  );
}
