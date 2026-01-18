"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Estados dos campos
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const endpoint = isLogin ? 'api/signin' : 'api/users'; 
    const payload = isLogin ? { email, password } : { name, username, email, password };

    try {
      const response = await fetch(`/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao processar requisição");
      }

      if (data.token) {
        localStorage.setItem('auth_token', data.token);
      }

      router.push('/novo');

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col justify-center px-6 py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-4xl font-black tracking-tighter text-[#5e2a8b] mb-2">thecafe.app</h2>
        <p className="text-[#5e2a8b] opacity-60 font-medium mb-10">
          {isLogin ? 'Faça login para continuar' : 'Crie sua conta no The Cafe'}
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-[400px]">
        <div className="bg-white py-10 px-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] rounded-[32px] border border-gray-100">
          
          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-600 text-xs font-bold rounded-xl text-center">
              {error.toUpperCase()}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div>
                  <label className="block text-[10px] font-bold text-[#5e2a8b] uppercase tracking-[2px] ml-1 mb-2 opacity-50">Nome Completo</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-2xl border-0 py-4 px-4 bg-[#F8F7F6] text-[#5e2a8b] ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-[#5e2a8b] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#5e2a8b] uppercase tracking-[2px] ml-1 mb-2 opacity-50">Nome de Usuário (Username)</label>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full rounded-2xl border-0 py-4 px-4 bg-[#F8F7F6] text-[#5e2a8b] ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-[#5e2a8b] outline-none transition-all"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-[10px] font-bold text-[#5e2a8b] uppercase tracking-[2px] ml-1 mb-2 opacity-50">E-mail</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-2xl border-0 py-4 px-4 bg-[#F8F7F6] text-[#5e2a8b] ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-[#5e2a8b] outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#5e2a8b] uppercase tracking-[2px] ml-1 mb-2 opacity-50">Senha</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-2xl border-0 py-4 px-4 bg-[#F8F7F6] text-[#5e2a8b] ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-[#5e2a8b] outline-none transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-2xl bg-[#5e2a8b] px-4 py-5 text-base font-bold text-[#FFFFFF] shadow-lg hover:bg-[#1B120F] transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'CARREGANDO...' : isLogin ? 'ENTRAR' : 'CADASTRAR'}
              </button>
            </div>
          </form>

          <div className="mt-10 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm font-bold text-[#5e2a8b] opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            >
              {isLogin ? 'Criar uma conta nova' : 'Já tenho uma conta'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}