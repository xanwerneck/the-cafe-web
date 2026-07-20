import Link from "next/link";
import Feed from "@/components/Feed";
import HomeAuthHeader from "@/components/HomeAuthHeader";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#5e2a8b] selection:bg-[#5e2a8b] selection:text-white">
      <HomeAuthHeader />

      <main>
        <hr className="max-w-7xl mx-auto border-0 h-px bg-gradient-to-r from-transparent via-[#5e2a8b]/15 to-transparent" />

        <Feed />

        <section
          className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-100"
          aria-labelledby="features-heading"
        >
          <h2 id="features-heading" className="sr-only">
            Recursos do The Cafe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="space-y-3 text-center md:text-left">
              <span className="text-2xl" aria-hidden="true">
                📸
              </span>
              <h3 className="font-black text-sm uppercase tracking-tight">Foto do Rótulo</h3>
              <p className="text-sm opacity-60 font-medium">
                Digitalize seus pacotes de café e mantenha um histórico visual da sua jornada.
              </p>
            </article>
            <article className="space-y-3 text-center md:text-left">
              <span className="text-2xl" aria-hidden="true">
                🎖️
              </span>
              <h3 className="font-black text-sm uppercase tracking-tight">Selo Especialista</h3>
              <p className="text-sm opacity-60 font-medium">
                Cadastre 10 rótulos válidos e torne seu perfil verificado na comunidade.
              </p>
            </article>
            <article className="space-y-3 text-center md:text-left">
              <span className="text-2xl" aria-hidden="true">
                🌍
              </span>
              <h3 className="font-black text-sm uppercase tracking-tight">Origens Únicas</h3>
              <p className="text-sm opacity-60 font-medium">
                Explore produtores de todo o mundo, da Colômbia ao Cerrado Mineiro.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center border-t border-gray-50 space-y-3">
        <a
          href={siteConfig.blogUrl}
          className="inline-block text-[10px] font-bold text-[#5e2a8b]/50 uppercase tracking-[3px] hover:text-[#5e2a8b] transition-colors"
        >
          Blog — guias de café especial
        </a>
        <p className="text-[10px] font-bold opacity-30 uppercase tracking-[3px]">
          The Cafe © 2026 • Feito para quem ama grãos.
        </p>
      </footer>
    </div>
  );
}
