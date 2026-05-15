import Image from "next/image";
import { useState, useEffect } from "react";

export default function CoffeeDetail({ slug }) {
  const titleFromSlug = slug.replaceAll('-', ' ');
  const [coffee, setCoffee] = useState()

  useEffect(() => {
    fetch(`api/search/coffee?title=${titleFromSlug.toLowerCase()}`)
    .then(response => response.json())
    .then(data => setCoffee(data?.[0]))
    .catch(error => console.error(error))
  }, [titleFromSlug])

  if (!coffee) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER / NAVIGATION */}
      <nav className="p-4 flex justify-between items-center border-b border-gray-50">
        <button onClick={() => window.history.back()} className="text-gray-400">← Voltar</button>
        <span className="font-bold text-[#4a3728]">The Cafe</span>
        <button className="text-gray-400">⋮</button>
      </nav>

      {/* IMAGEM DO RÓTULO (Destaque Total) */}
      <div className="w-full aspect-square bg-gray-100">
        <Image
          src={coffee.original_picture} 
          alt={coffee.title}
          className="w-full h-full object-cover"
          width={250} height={250}
        />
      </div>

      {/* INFO PRINCIPAL */}
      <div className="p-6 space-y-6">
        <header>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-black text-gray-900 leading-tight">{coffee.name}</h1>
              {coffee.user && 
                <p className="text-lg text-gray-500 font-medium">@{coffee.user.username}</p>
              }
            </div>
            <div className="bg-gray-50 p-3 rounded-2xl text-center min-w-[60px]">
              <span className="block text-2xl">☕</span>
              <span className="text-sm font-bold">{coffee.views || 0}</span>
            </div>
          </div>
        </header>

        {/* NOTAS DO DONO (O "Que as pessoas falam") */}
        <section className="bg-brown-50/50 p-4 rounded-2xl border border-brown-100">
          <h2 className="text-xs font-bold uppercase text-brown-400 tracking-widest mb-2">Comentários</h2>
          <p className="text-gray-700 leading-relaxed italic">
            "{coffee.notes || 'Nenhuma descrição adicionada.'}"
          </p>
        </section>

        {/* DETALHES TÉCNICOS (O Caos Organizado) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-100 p-4 rounded-xl">
            <span className="text-xs text-gray-400 block uppercase">Processo</span>
            <span className="font-bold text-gray-700">{coffee.process || 'N/A'}</span>
          </div>
          <div className="border border-gray-100 p-4 rounded-xl">
            <span className="text-xs text-gray-400 block uppercase">Altitude</span>
            <span className="font-bold text-gray-700">{coffee.altitude || 'N/A'}</span>
          </div>
        </div>

        {/* CTA PARA QUEM VEM DE FORA */}
        <div className="pt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">Gostou deste café? Comece sua própria estante.</p>
          <button className="w-full bg-[#4a3728] text-white py-4 rounded-2xl font-bold shadow-xl shadow-brown-200">
            Criar minha Estante ☕
          </button>
        </div>
      </div>
    </div>
  );
}