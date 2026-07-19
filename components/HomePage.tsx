"use client";

import Link from "next/link";
import Feed from "@/components/Feed";
import { useAuth } from "@/components/AuthProvider";
import { userHref } from "@/lib/userSlug";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  const { ready, isAuthenticated, user, logout } = useAuth();
  const catalogHref = isAuthenticated ? "/novo" : "/login?redirect=/novo";

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#5e2a8b] selection:bg-[#5e2a8b] selection:text-white">
      <header>
        <nav
          className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full"
          aria-label="Principal"
        >
          <Link href="/" aria-label={`${siteConfig.name} — início`}>
            <img
              src="/logo.png"
              alt={siteConfig.name}
              width={120}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            {ready && isAuthenticated && user?.username ? (
              <Link
                href={userHref(user.username)}
                className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              >
                @{user.username}
              </Link>
            ) : null}
            {ready && isAuthenticated ? (
              <button
                type="button"
                onClick={logout}
                className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              >
                Sair
              </button>
            ) : (
              <Link
                href="/login"
                className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              >
                Entrar
              </Link>
            )}
          </div>
        </nav>

        <section
          className="max-w-5xl mx-auto px-6 pt-12 pb-16 text-center"
          aria-labelledby="hero-heading"
        >
          <p className="inline-block bg-[#E4D1B9]/30 text-[#5e2a8b] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[2px] mb-6">
            Comunidade para os Apaixonados por café
          </p>

          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-6"
          >
            Sua estante virtual{" "}
            <span className="text-[#5e2a8b]/40 italic">de cafés especiais.</span>
          </h1>

          <p className="max-w-md mx-auto text-lg opacity-70 font-medium leading-relaxed mb-10">
            Catalogue seus grãos favoritos, descubra novas origens e conquiste
            seu selo de especialista.
          </p>

          <div className="flex flex-col gap-4 w-full max-w-sm sm:max-w-none items-center justify-center mx-auto">
            <Link
              href={catalogHref}
              className="w-full sm:w-auto bg-[#5e2a8b] text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-[1.03] active:scale-95 transition-all cursor-pointer text-center"
            >
              CATALOGAR MEU CAFÉ
            </Link>

            {ready && isAuthenticated ? (
              <p className="text-[10px] font-black text-[#5e2a8b]/50 tracking-[2px] uppercase">
                Você está conectado
                {user?.name ? `, ${user.name.split(" ")[0]}` : ""}
              </p>
            ) : null}

            <p className="text-[10px] font-black opacity-30 tracking-[3px] uppercase">
              Ou baixe o app nativo
            </p>

            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-[#5e2a8b] border-2 border-[#5e2a8b]/10 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all cursor-pointer shadow-sm w-full sm:w-auto"
            >
              <span className="text-xl" aria-hidden="true">
                🤖
              </span>
              <span className="text-sm tracking-tight">Google Play</span>
            </a>
          </div>
        </section>
      </header>

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
              <h3 className="font-black text-sm uppercase tracking-tight">
                Foto do Rótulo
              </h3>
              <p className="text-sm opacity-60 font-medium">
                Digitalize seus pacotes de café e mantenha um histórico visual
                da sua jornada.
              </p>
            </article>
            <article className="space-y-3 text-center md:text-left">
              <span className="text-2xl" aria-hidden="true">
                🎖️
              </span>
              <h3 className="font-black text-sm uppercase tracking-tight">
                Selo Especialista
              </h3>
              <p className="text-sm opacity-60 font-medium">
                Cadastre 10 rótulos válidos e torne seu perfil verificado na
                comunidade.
              </p>
            </article>
            <article className="space-y-3 text-center md:text-left">
              <span className="text-2xl" aria-hidden="true">
                🌍
              </span>
              <h3 className="font-black text-sm uppercase tracking-tight">
                Origens Únicas
              </h3>
              <p className="text-sm opacity-60 font-medium">
                Explore produtores de todo o mundo, da Colômbia ao Cerrado
                Mineiro.
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
