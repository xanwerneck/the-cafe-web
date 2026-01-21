import Image from "next/image";
import { useEffect, useState } from "react";

// Componente de Feed Global
export default function Feed() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch('api/coffees')
    .then(response => response.json())
    .then(data => setCoffees(data.slice(0, 3)))
    .catch(error => console.error(error))
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-[#5e2a8b]">Descobertas da Comunidade</h1>
        <p className="opacity-70">O que os entusiastas estão bebendo agora</p>
      </header>

      {/* Grid Responsivo: 1 coluna no mobile, 2 no tablet, 3 no desktop */}
      {coffees && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffees.map((coffee) => (
            <div 
              key={coffee.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
            >
              {/* Foto do Rótulo */}
              <div className="aspect-square w-full bg-gray-100 relative overflow-hidden">
                <Image
                  src={coffee.original_picture} 
                  alt={coffee.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  width={250} height={250}
                />
                {/* Badge de Processo/Variedade (se existir) */}
                {coffee.process && (
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight shadow-sm">
                    {coffee.process}
                  </span>
                )}
              </div>

              {/* Info do Café */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900 leading-tight">{coffee.title}</h3>
                    <p className="text-xs text-gray-500">por @{coffee.user?.username || 'Entusiasta'}</p>
                  </div>
                  {/* Botão de "Cheers/Like" simples */}
                  <button className="flex flex-col items-center text-gray-400 hover:text-brown-600 transition-colors">
                    <span className="text-xl">☕</span>
                    <span className="text-[10px] font-bold">{coffee.views || 0}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}