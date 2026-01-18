"use client";
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function NovoCafe() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const [formData, setFormData] = useState({
    title: '',
    producer: '',
    origin: '',
    burn: 4,
    format: 1, // 1: Grãos, 2: Moído, etc.
    tastes: '',
    bio: '' // Agora focado na descrição do produto
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('auth_token');
    
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (fileInputRef.current.files[0]) {
      data.append('picture', fileInputRef.current.files[0]);
    }

    try {
      const response = await fetch('/api/coffees', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: data
      });

      if (response.ok) {
        setIsSuccess(true); // Ativa a tela de sucesso
      } else {
        alert("Erro ao salvar. Verifique se todos os campos estão preenchidos.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center justify-center p-6 text-center">
        {/* Ícone de Conquista */}
        <div className="w-20 h-20 bg-[#5e2a8b] rounded-full flex items-center justify-center mb-6 shadow-xl animate-bounce">
          <span className="text-3xl">🎖️</span>
        </div>

        <h1 className="text-3xl font-black text-[#5e2a8b] tracking-tighter mb-2 italic uppercase">
          Rótulo Enviado!
        </h1>
        
        <p className="text-[#5e2a8b] opacity-70 max-w-xs mb-8 font-medium">
          Seu café foi catalogado com sucesso e já está disponível na sua estante virtual.
        </p>

        {/* Card do Desafio Verificado */}
        <div className="w-full max-w-xs bg-white p-6 rounded-[32px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-[#E4D1B9]/30 mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-blue-500 text-sm">🛡️</span>
            <span className="text-[10px] font-black uppercase tracking-[2px] text-[#5e2a8b]">Desafio Verificado</span>
          </div>
          
          <p className="text-xs font-bold text-[#5e2a8b] leading-relaxed">
            Sabia que ao completar <span className="text-lg">10</span> rótulos válidos, seu perfil ganha automaticamente o <span className="text-[#5e2a8b] underline">Selo de Especialista</span> no app?
          </p>

          <div className="mt-4 pt-4 border-t border-gray-50">
            <p className="text-[10px] opacity-50 font-medium">
              Confira seu progresso atual direto no seu perfil no App The Cafe.
            </p>
          </div>
        </div>
        
        <div className="space-y-4 w-full max-w-sm">
          <button 
            onClick={() => {
              setIsSuccess(false);
              setPreview(null);
              setFormData({ title: '', producer: '', origin: '', burn: 3, format: 1, tastes: '', bio: '' });
            }}
            className="block w-full bg-[#5e2a8b] text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-[#1B120F] transition-all cursor-pointer"
          >
            CADASTRAR OUTRO
          </button>
          
          <a 
            href="https://thecafe.app/open" // Link que redireciona para o app
            className="block w-full bg-transparent text-[#5e2a8b] py-2 font-black text-xs opacity-40 hover:opacity-100 cursor-pointer tracking-widest uppercase"
          >
            Ver meu progresso no App
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#5e2a8b] pb-20">
      <header className="p-6 max-w-xl mx-auto flex justify-between items-center">
        <button onClick={() => router.back()} className="font-bold opacity-50 text-xs cursor-pointer">CANCELAR</button>
        <h1 className="font-black tracking-tighter text-xl text-center">ADICIONAR CAFÉ</h1>
        <div className="w-10"></div>
      </header>

      <main className="max-w-xl mx-auto px-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Foto do Rótulo */}
          <div 
            onClick={() => fileInputRef.current.click()}
            className="relative w-full aspect-square rounded-[32px] border-2 border-dashed border-gray-200 bg-[#F8F7F6] flex flex-col items-center justify-center overflow-hidden cursor-pointer hover:border-[#5e2a8b]/30 transition-all"
          >
            {preview ? (
              <img src={preview} className="w-full h-full object-cover" alt="Preview" />
            ) : (
              <div className="text-center">
                <span className="text-4xl mb-2 block">📸</span>
                <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Foto do Rótulo</p>
              </div>
            )}
            <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
          </div>

          <div className="space-y-6">
            {/* Título e Produtor */}
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[2px] mb-2 opacity-50">Nome do Rótulo</label>
                <input 
                  type="text" required placeholder="Ex: Amor Perfecto"
                  className="w-full bg-white p-4 rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-[#5e2a8b] outline-none"
                  onChange={e => setFormData({...formData, title: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[2px] mb-2 opacity-50">Produtor</label>
                <input 
                  type="text" placeholder="Ex: Vive Cafe"
                  className="w-full bg-white p-4 rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-[#5e2a8b] outline-none"
                  onChange={e => setFormData({...formData, producer: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[2px] mb-2 opacity-50">Origem</label>
                <input 
                  type="text" placeholder="Ex: Colômbia"
                  className="w-full bg-white p-4 rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-[#5e2a8b] outline-none"
                  onChange={e => setFormData({...formData, origin: e.target.value})}
                />
              </div>
            </div>

            {/* Formato e Notas */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[2px] mb-2 opacity-50">Formato</label>
                <select 
                  className="w-full bg-white p-4 rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-[#5e2a8b] outline-none appearance-none cursor-pointer"
                  onChange={e => setFormData({...formData, format: parseInt(e.target.value)})}
                >
                  <option value="1">Em Grãos</option>
                  <option value="2">Moído</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[2px] mb-2 opacity-50">Notas Sensoriais</label>
                <input 
                  type="text" placeholder="Ex: Frutas e Chocolate"
                  className="w-full bg-white p-4 rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-[#5e2a8b] outline-none"
                  onChange={e => setFormData({...formData, tastes: e.target.value})}
                />
              </div>
            </div>

            {/* Nível de Torra */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[2px] mb-2 opacity-50 text-center">Nível de Torra: {formData.burn}</label>
              <input 
                type="range" min="1" max="8" 
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#5e2a8b]"
                value={formData.burn}
                onChange={e => setFormData({...formData, burn: e.target.value})}
              />
            </div>

            {/* BIO - DESCRIÇÃO DO CAFÉ */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[2px] mb-2 opacity-50">Descrição do Café (Bio)</label>
              <textarea 
                rows="4"
                placeholder="Descreva as características técnicas, a história do grão ou o perfil sensorial detalhado..."
                className="w-full bg-white p-4 rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-[#5e2a8b] outline-none resize-none"
                onChange={e => setFormData({...formData, bio: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit" disabled={loading}
            className="w-full bg-[#5e2a8b] text-[#FFFFFF] py-5 rounded-[24px] font-black text-lg shadow-xl active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'SALVANDO...' : 'CADASTRAR RÓTULO'}
          </button>
        </form>
      </main>
    </div>
  );
}