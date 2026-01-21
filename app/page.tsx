"use client";
import Link from 'next/link';
import Feed from '@/components/Feed';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#5e2a8b] selection:bg-[#5e2a8b] selection:text-white">
      {/* Header Minimalista */}
      <nav className="p-6 flex justify-between items-center max-w-5xl mx-auto w-full">
        <img src="/logo.png" alt="The Cafe" className="h-8 w-auto object-contain" />
        <Link 
          href="/login" 
          className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        >
          Entrar
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
        <div className="inline-block bg-[#E4D1B9]/30 text-[#5e2a8b] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[2px] mb-6">
          Comunidade para os Apaixonados por café
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
          Sua estante virtual <br />
          <span className="text-[#5e2a8b]/40 italic">de cafés especiais.</span>
        </h1>

        <p className="max-w-md text-lg opacity-70 font-medium leading-relaxed mb-12">
          Catalogue seus grãos favoritos, descubra novas origens e conquiste seu selo de especialista.
        </p>

        {/* CTAs Principais */}
        <div className="flex flex-col gap-4 w-full max-w-sm sm:max-w-none items-center justify-center">
          
          {/* Botão de Ação Principal (Web App) */}
          <Link 
            href="/novo" 
            className="w-full sm:w-auto bg-[#5e2a8b] text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-[1.03] active:scale-95 transition-all cursor-pointer text-center mb-4"
          >
            CATALOGAR MEU CAFÉ
          </Link>

          {/* Divisor Visual */}
          <p className="text-[10px] font-black opacity-30 tracking-[3px] mb-2 uppercase">Ou baixe o app nativo</p>

          {/* Botões das Lojas */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a 
              href="https://apps.apple.com/us/app/the-cafe/id6472904370" // Seu link da Apple
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-[#5e2a8b] border-2 border-[#5e2a8b]/10 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all cursor-pointer shadow-sm"
            >
              <span className="text-xl"></span>
              <span className="text-sm tracking-tight">App Store</span>
            </a>

            <a 
              href="https://play.google.com/store/apps/details?id=com.thecafeapp" // Seu link do Google Play
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-[#5e2a8b] border-2 border-[#5e2a8b]/10 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all cursor-pointer shadow-sm"
            >
              <span className="text-xl">🤖</span>
              <span className="text-sm tracking-tight">Google Play</span>
            </a>
          </div>
        </div>

        {/* Feature Teasers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 w-full border-t border-gray-100 pt-16">
          <div className="space-y-3">
            <span className="text-2xl">📸</span>
            <h3 className="font-black text-sm uppercase tracking-tight">Foto do Rótulo</h3>
            <p className="text-sm opacity-60 font-medium">Digitalize seus pacotes de café e mantenha um histórico visual da sua jornada.</p>
          </div>
          <div className="space-y-3">
            <span className="text-2xl">🎖️</span>
            <h3 className="font-black text-sm uppercase tracking-tight">Selo Especialista</h3>
            <p className="text-sm opacity-60 font-medium">Cadastre 10 rótulos válidos e torne seu perfil verificado na comunidade.</p>
          </div>
          <div className="space-y-3">
            <span className="text-2xl">🌍</span>
            <h3 className="font-black text-sm uppercase tracking-tight">Origens Únicas</h3>
            <p className="text-sm opacity-60 font-medium">Explore produtores de todo o mundo, da Colômbia ao Cerrado Mineiro.</p>
          </div>
        </div>
      </main>

      {/* Feed */}
      <Feed />

      {/* Footer Simples */}
      <footer className="py-10 text-center border-t border-gray-50">
        <p className="text-[10px] font-bold opacity-30 uppercase tracking-[3px]">
          The Cafe © 2026 • Feito para quem ama grãos.
        </p>
      </footer>
    </div>
  );
}