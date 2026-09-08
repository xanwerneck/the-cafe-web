import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Café não encontrado",
  robots: { index: false, follow: true },
};

export default function CoffeeNotFound() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col">
      <PageHeader />
      <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6 text-center">
        <span className="text-4xl">☕</span>
        <div>
          <h1 className="text-xl font-black text-[#5e2a8b] tracking-tight">
            Café não encontrado
          </h1>
          <p className="text-sm text-[#5e2a8b]/50 mt-1 font-medium">
            Este rótulo pode ter sido removido ou o link está incorreto.
          </p>
        </div>
        <Link
          href="/"
          className="bg-[#5e2a8b] text-white px-8 py-3 rounded-2xl font-bold text-sm"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
