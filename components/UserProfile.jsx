"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { coffeeHref } from "@/lib/coffeeSlug";

function ProfileCoffeeCard({ coffee }) {
  const title = coffee.title || coffee.name;

  return (
    <Link
      href={coffeeHref(coffee)}
      className="group block bg-white rounded-2xl ring-1 ring-[#5e2a8b]/8 overflow-hidden shadow-sm hover:shadow-md hover:ring-[#5e2a8b]/15 transition-all"
    >
      <div className="aspect-square relative bg-[#E4D1B9]/20 overflow-hidden">
        <Image
          src={coffee.original_picture || coffee.resized_picture}
          alt={title}
          width={400}
          height={400}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        {coffee.process && (
          <span className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight text-[#5e2a8b] shadow-sm">
            {coffee.process}
          </span>
        )}
      </div>
      <div className="p-4 flex justify-between items-start gap-2">
        <div className="min-w-0">
          <h3 className="font-bold text-[#5e2a8b] leading-tight line-clamp-2 capitalize">
            {title}
          </h3>
          {coffee.origin && (
            <p className="text-xs text-[#5e2a8b]/45 font-medium mt-1 capitalize">
              {coffee.origin}
            </p>
          )}
        </div>
        <span className="shrink-0 flex flex-col items-center text-[#5e2a8b]/40">
          <span className="text-xl leading-none">☕</span>
          <span className="text-[10px] font-black mt-0.5">{coffee.views || 0}</span>
        </span>
      </div>
    </Link>
  );
}

function ProfileSkeleton() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] animate-pulse">
      <div className="h-14 bg-white border-b border-[#5e2a8b]/5" />
      <div className="max-w-xl mx-auto px-6 py-10 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-[#E4D1B9]/30" />
          <div className="flex-1 space-y-2">
            <div className="h-6 bg-[#E4D1B9]/30 rounded-xl w-2/3" />
            <div className="h-4 bg-[#E4D1B9]/20 rounded-lg w-1/3" />
          </div>
        </div>
        <div className="h-24 bg-white rounded-[24px] ring-1 ring-[#5e2a8b]/5" />
        <div className="grid grid-cols-2 gap-3">
          <div className="aspect-square bg-white rounded-2xl ring-1 ring-[#5e2a8b]/5" />
          <div className="aspect-square bg-white rounded-2xl ring-1 ring-[#5e2a8b]/5" />
        </div>
      </div>
    </div>
  );
}

export default function UserProfile({ username }) {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!username) return;

    setLoading(true);
    setError(false);

    fetch(`/api/user/${encodeURIComponent(username)}/coffees`)
      .then((response) => {
        if (!response.ok) throw new Error("not found");
        return response.json();
      })
      .then((data) => {
        setCoffees(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setCoffees([]);
      })
      .finally(() => setLoading(false));
  }, [username]);

  if (loading) return <ProfileSkeleton />;

  const user = coffees[0]?.user;
  const displayName = user?.username || user?.login || username;
  const hasBio = Boolean(user?.bio?.trim());
  const coffeeCount = coffees.length;

  if (error || (!user && coffeeCount === 0)) {
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center justify-center gap-6 p-6 text-center text-[#5e2a8b]">
        <span className="text-4xl">☕</span>
        <div>
          <h1 className="text-xl font-black tracking-tight">Perfil não encontrado</h1>
          <p className="text-sm text-[#5e2a8b]/50 mt-1 font-medium">
            @{username} não existe ou ainda não catalogou cafés.
          </p>
        </div>
        <Link
          href="/"
          className="bg-[#5e2a8b] text-white px-8 py-3 rounded-2xl font-bold text-sm"
        >
          Voltar ao início
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#5e2a8b] pb-12">
      <PageHeader />

      <main className="max-w-xl mx-auto px-6 py-8 space-y-8">
        <section className="flex items-center gap-4">
          {user?.original_picture ? (
            <Image
              src={user.original_picture}
              alt=""
              width={80}
              height={80}
              className="rounded-full object-cover w-20 h-20 ring-2 ring-[#5e2a8b]/10 shadow-sm"
            />
          ) : (
            <span className="w-20 h-20 rounded-full bg-[#E4D1B9]/50 flex items-center justify-center text-3xl ring-2 ring-[#5e2a8b]/10">
              ☕
            </span>
          )}
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-black uppercase tracking-[2px] text-[#5e2a8b]/40 mb-1">
              Perfil
            </p>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight truncate">
              @{displayName}
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {user?.verified && (
                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wide text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full">
                  ✓ Verificado
                </span>
              )}
              <span className="text-xs font-bold text-[#5e2a8b]/45">
                {coffeeCount} {coffeeCount === 1 ? "café" : "cafés"}
              </span>
            </div>
          </div>
        </section>

        {hasBio && (
          <section className="bg-white rounded-[24px] p-5 ring-1 ring-[#5e2a8b]/8 shadow-sm">
            <h2 className="text-[10px] font-bold uppercase tracking-[2px] text-[#5e2a8b]/45 mb-2">
              Sobre
            </h2>
            <p className="text-[#5e2a8b]/85 leading-relaxed font-medium">{user.bio}</p>
          </section>
        )}

        <section className="space-y-4">
          <div className="flex justify-between items-baseline">
            <h2 className="text-[10px] font-bold uppercase tracking-[2px] text-[#5e2a8b]/45">
              Estante de cafés
            </h2>
          </div>

          {coffeeCount > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {coffees.map((coffee) => (
                <ProfileCoffeeCard key={coffee.id} coffee={coffee} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-[24px] p-8 ring-1 ring-[#5e2a8b]/8 text-center shadow-sm">
              <span className="text-3xl block mb-3">☕</span>
              <p className="text-sm text-[#5e2a8b]/50 font-medium">
                Ainda não há cafés catalogados neste perfil.
              </p>
            </div>
          )}
        </section>

        <section className="pt-2 text-center space-y-4">
          <p className="text-sm text-[#5e2a8b]/50 font-medium">
            Monte sua própria estante virtual de cafés.
          </p>
          <Link
            href="/novo"
            className="block w-full bg-[#5e2a8b] text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-[#5e2a8b]/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Catalogar meu café ☕
          </Link>
        </section>
      </main>
    </div>
  );
}
