"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { coffeeHref } from "@/lib/coffeeSlug";
import { userHref } from "@/lib/userSlug";

const PAGE_SIZE = 4;

function CoffeeCard({ coffee }) {
  const router = useRouter();
  const href = coffeeHref(coffee);

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
      <Link href={href} className="block">
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
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Link href={href}>
              <h3 className="font-bold text-gray-900 leading-tight line-clamp-2 hover:text-[#5e2a8b] transition-colors">
                {coffee.title}
              </h3>
            </Link>
            <p className="text-xs text-gray-500">
              por{" "}
              {coffee.user?.username ? (
                <button
                  type="button"
                  onClick={() => router.push(userHref(coffee.user.username))}
                  className="hover:text-[#5e2a8b] hover:underline cursor-pointer"
                >
                  @{coffee.user.username}
                </button>
              ) : (
                "@Entusiasta"
              )}
            </p>
          </div>
          <span className="flex flex-col items-center text-gray-400">
            <span className="text-xl">☕</span>
            <span className="text-[10px] font-bold">{coffee.views || 0}</span>
          </span>
        </div>
      </div>
    </article>
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

export default function Feed() {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const pageRef = useRef(1);
  const loadingRef = useRef(false);
  const hasMoreRef = useRef(true);

  const loadNextPage = useCallback(async () => {
    if (loadingRef.current || !hasMoreRef.current) return;

    loadingRef.current = true;
    setLoading(true);

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
    }
  }, []);

  useEffect(() => {
    loadNextPage();
  }, [loadNextPage]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#5e2a8b]">
          Descobertas da Comunidade
        </h2>
        <p className="opacity-70 font-medium mt-1">O que os entusiastas estão bebendo agora</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}

        {loading &&
          coffees.length === 0 &&
          Array.from({ length: 4 }).map((_, i) => (
            <CoffeeCardSkeleton key={`skeleton-${i}`} />
          ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        {hasMore && (
          <button
            type="button"
            onClick={loadNextPage}
            disabled={loading}
            className="bg-white text-[#5e2a8b] border-2 border-[#5e2a8b]/15 px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-sm hover:bg-[#E4D1B9]/20 hover:border-[#5e2a8b]/25 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Carregando..." : "Carregar mais rótulos"}
          </button>
        )}

        {!loading && !hasMore && coffees.length > 0 && (
          <p className="text-sm text-[#5e2a8b]/40 font-medium">
            Você viu todos os cafés por agora ☕
          </p>
        )}

        {!loading && coffees.length === 0 && (
          <p className="text-sm text-[#5e2a8b]/50 font-medium">
            Nenhum café encontrado no momento.
          </p>
        )}
      </div>
    </div>
  );
}
