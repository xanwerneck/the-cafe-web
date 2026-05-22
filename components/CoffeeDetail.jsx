"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { parseCoffeeId, slugToTitle } from "@/lib/coffeeSlug";
import { burnLevel, formatLabel } from "@/lib/coffeeDisplay";
import { userHref } from "@/lib/userSlug";

function DetailCard({ label, value, className = "" }) {
  if (!value) return null;

  return (
    <div className={`bg-white rounded-2xl ring-1 ring-[#5e2a8b]/8 p-4 ${className}`}>
      <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#5e2a8b]/45 block mb-1">
        {label}
      </span>
      <span className="font-bold text-[#5e2a8b] leading-snug">{value}</span>
    </div>
  );
}

function BurnScale({ burn }) {
  const level = burnLevel(burn);
  if (!level) return null;

  return (
    <div className="bg-white rounded-2xl ring-1 ring-[#5e2a8b]/8 p-4 col-span-2">
      <div className="flex justify-between items-baseline mb-3">
        <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#5e2a8b]/45">
          Torra
        </span>
        <span className="text-sm font-black text-[#5e2a8b]">
          {level}
          <span className="text-[#5e2a8b]/35 font-bold">/8</span>
        </span>
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              i < level ? "bg-[#5e2a8b]" : "bg-[#E4D1B9]/60"
            }`}
          />
        ))}
      </div>
      <p className="text-[10px] text-[#5e2a8b]/40 mt-2 font-medium">
        1 = mais clara · 8 = mais escura
      </p>
    </div>
  );
}

function TastesList({ tastes }) {
  if (!tastes?.trim()) return null;

  const items = tastes
    .split(/[,|]/)
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section className="space-y-3">
      <h2 className="text-[10px] font-bold uppercase tracking-[2px] text-[#5e2a8b]/45">
        Notas
      </h2>
      {items.length > 1 ? (
        <div className="flex flex-wrap gap-2">
          {items.map((note) => (
            <span
              key={note}
              className="px-3 py-1.5 rounded-full bg-[#E4D1B9]/35 text-[#5e2a8b] text-sm font-semibold"
            >
              {note}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-[#5e2a8b]/80 font-medium leading-relaxed">{tastes}</p>
      )}
    </section>
  );
}

export default function CoffeeDetail({ slug }) {
  const coffeeId = parseCoffeeId(slug);
  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const url = coffeeId
      ? `/api/coffees/${coffeeId}`
      : `/api/search/coffee?title=${encodeURIComponent(slugToTitle(slug).toLowerCase())}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setCoffee(coffeeId ? data : data?.[0]))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [slug, coffeeId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDFCFB] animate-pulse">
        <div className="h-14 bg-white border-b border-[#5e2a8b]/5" />
        <div className="aspect-[4/3] max-h-[420px] bg-[#E4D1B9]/20" />
        <div className="max-w-xl mx-auto px-6 py-8 space-y-4">
          <div className="h-8 bg-[#E4D1B9]/30 rounded-xl w-3/4" />
          <div className="h-4 bg-[#E4D1B9]/20 rounded-lg w-1/3" />
          <div className="h-24 bg-white rounded-2xl ring-1 ring-[#5e2a8b]/5" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-20 bg-white rounded-2xl ring-1 ring-[#5e2a8b]/5" />
            <div className="h-20 bg-white rounded-2xl ring-1 ring-[#5e2a8b]/5" />
          </div>
        </div>
      </div>
    );
  }

  if (!coffee) {
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center justify-center gap-6 p-6 text-center">
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
    );
  }

  const title = coffee.title || coffee.name;
  const hasBio = Boolean(coffee.bio?.trim());

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#5e2a8b] pb-12">
      <PageHeader />

      <div className="relative w-full max-h-[420px] aspect-[4/3] bg-[#E4D1B9]/20 overflow-hidden">
        <Image
          src={coffee.original_picture || coffee.resized_picture}
          alt={title}
          className="object-cover w-full h-full"
          width={800}
          height={600}
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FDFCFB] to-transparent" />
      </div>

      <main className="max-w-xl mx-auto px-6 -mt-6 relative space-y-6">
        <section className="space-y-3">
          <div className="flex justify-between items-start gap-4">
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-black uppercase tracking-[2px] text-[#5e2a8b]/40 mb-1">
                Título
              </p>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight capitalize">
                {title}
              </h1>
            </div>
            <div className="shrink-0 bg-white ring-1 ring-[#5e2a8b]/10 px-4 py-3 rounded-2xl text-center shadow-sm">
              <span className="block text-2xl leading-none">☕</span>
              <span className="text-xs font-black mt-1 block">{coffee.views || 0}</span>
            </div>
          </div>

          {coffee.user?.username && (
            <Link
              href={userHref(coffee.user.username)}
              className="inline-flex items-center gap-2 bg-white ring-1 ring-[#5e2a8b]/8 rounded-full pl-1 pr-4 py-1 hover:ring-[#5e2a8b]/20 hover:shadow-sm transition-all"
            >
              {coffee.user.original_picture ? (
                <Image
                  src={coffee.user.original_picture}
                  alt=""
                  width={28}
                  height={28}
                  className="rounded-full object-cover w-7 h-7"
                />
              ) : (
                <span className="w-7 h-7 rounded-full bg-[#E4D1B9]/50 flex items-center justify-center text-xs">
                  ☕
                </span>
              )}
              <span className="text-sm font-bold">@{coffee.user.username}</span>
              {coffee.user.verified && (
                <span className="text-[10px] font-black uppercase tracking-wide text-blue-500">
                  ✓ Verificado
                </span>
              )}
            </Link>
          )}
        </section>

        {hasBio && (
          <section className="bg-white rounded-[24px] p-5 ring-1 ring-[#5e2a8b]/8 shadow-sm">
            <h2 className="text-[10px] font-bold uppercase tracking-[2px] text-[#5e2a8b]/45 mb-2">
              Descrição
            </h2>
            <p className="text-[#5e2a8b]/85 leading-relaxed font-medium">{coffee.bio}</p>
          </section>
        )}

        {coffee.tastes?.trim() && (
          <section className="bg-white rounded-[24px] p-5 ring-1 ring-[#5e2a8b]/8 shadow-sm">
            <TastesList tastes={coffee.tastes} />
          </section>
        )}

        <section className="grid grid-cols-2 gap-3">
          <DetailCard label="Origem" value={coffee.origin} className="capitalize" />
          <DetailCard label="Produtor" value={coffee.producer} className="capitalize" />
          <DetailCard
            label="Formato"
            value={coffee.format != null ? formatLabel(coffee.format) : null}
          />
          {coffee.process && (
            <DetailCard label="Processo" value={coffee.process} className="capitalize" />
          )}
          {coffee.altitude && <DetailCard label="Altitude" value={coffee.altitude} />}
          <BurnScale burn={coffee.burn} />
        </section>

        <section className="pt-4 text-center space-y-4">
          <p className="text-sm text-[#5e2a8b]/50 font-medium">
            Gostou deste café? Monte sua própria estante virtual.
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
