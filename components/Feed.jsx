"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { titleToSlug } from "@/lib/coffeeSlug";

const PAGE_SIZE = 4;
const REQUEST_DELAY_MS = 5000;

function CoffeeCard({ coffee }) {
  return (
    <Link
      href={`/coffee/${titleToSlug(coffee.title)}`}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group block"
    >
      <div className="aspect-square w-full bg-gray-100 relative overflow-hidden">
        <Image
          src={coffee.original_picture}
          alt={coffee.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          width={250}
          height={250}
        />
        {coffee.process && (
          <span className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight shadow-sm">
            {coffee.process}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-gray-900 leading-tight">{coffee.title}</h3>
            <p className="text-xs text-gray-500">
              por @{coffee.user?.username || "Entusiasta"}
            </p>
          </div>
          <span className="flex flex-col items-center text-gray-400">
            <span className="text-xl">☕</span>
            <span className="text-[10px] font-bold">{coffee.views || 0}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

function CoffeeCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      <div className="aspect-square w-full bg-[#E4D1B9]/25" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-[#E4D1B9]/30 rounded-lg w-3/4" />
        <div className="h-3 bg-[#E4D1B9]/20 rounded-lg w-1/2" />
      </div>
    </div>
  );
}

function LoadingIndicator({ label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-[#5e2a8b]/40 animate-bounce"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
      <p className="text-sm font-medium text-[#5e2a8b]/50">{label}</p>
    </div>
  );
}

export default function Feed() {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const pageRef = useRef(1);
  const loadingRef = useRef(false);
  const hasMoreRef = useRef(true);
  const canLoadMoreRef = useRef(false);
  const sentinelRef = useRef(null);

  const loadNextPage = useCallback(async () => {
    if (loadingRef.current || !hasMoreRef.current) return;

    loadingRef.current = true;
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY_MS));

    const page = pageRef.current;

    try {
      const response = await fetch(`/api/coffees?page=${page}`);
      const data = await response.json();

      if (!Array.isArray(data) || data.length === 0) {
        hasMoreRef.current = false;
        setHasMore(false);
      } else {
        setCoffees((prev) => {
          const seen = new Set(prev.map((c) => c.id));
          const fresh = data.filter((c) => !seen.has(c.id));
          return [...prev, ...fresh];
        });
        pageRef.current = page + 1;
        if (data.length < PAGE_SIZE) {
          hasMoreRef.current = false;
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      loadingRef.current = false;
      setLoading(false);
      canLoadMoreRef.current = true;
    }
  }, []);

  useEffect(() => {
    loadNextPage();
  }, [loadNextPage]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          canLoadMoreRef.current &&
          !loadingRef.current &&
          hasMoreRef.current
        ) {
          loadNextPage();
        }
      },
      { rootMargin: "240px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, loadNextPage, coffees.length]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-[#5e2a8b]">Descobertas da Comunidade</h1>
        <p className="opacity-70">O que os entusiastas estão bebendo agora</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}

        {loading &&
          coffees.length === 0 &&
          Array.from({ length: 4 }).map((_, i) => (
            <CoffeeCardSkeleton key={`skeleton-${i}`} />
          ))}
      </div>

      <div ref={sentinelRef} className="min-h-px" aria-hidden />

      {loading && coffees.length > 0 && (
        <LoadingIndicator label="Carregando mais cafés..." />
      )}

      {!loading && !hasMore && coffees.length > 0 && (
        <p className="text-center text-sm text-[#5e2a8b]/40 font-medium py-10">
          Você viu todos os cafés por agora ☕
        </p>
      )}

      {!loading && coffees.length === 0 && (
        <p className="text-center text-sm text-[#5e2a8b]/50 font-medium py-10">
          Nenhum café encontrado no momento.
        </p>
      )}
    </div>
  );
}
