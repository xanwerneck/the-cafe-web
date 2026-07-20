"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";
import CoffeeCard from "@/components/CoffeeCard";

const PAGE_SIZE = 4;

type FeedCoffee = {
  id: number;
  title: string;
  original_picture: string;
  process?: string;
  views?: number;
  user?: {
    username?: string;
  };
};

type FeedGridProps = {
  children: ReactNode;
  initialPage: number;
  hasMoreInitial: boolean;
  seedIds: number[];
};

export default function FeedGrid({
  children,
  initialPage,
  hasMoreInitial,
  seedIds,
}: FeedGridProps) {
  const [extraCoffees, setExtraCoffees] = useState<FeedCoffee[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(hasMoreInitial);

  const pageRef = useRef(initialPage);
  const loadingRef = useRef(false);
  const hasMoreRef = useRef(hasMoreInitial);
  const seenIdsRef = useRef(new Set(seedIds));

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
        const fresh = data.filter((coffee: FeedCoffee) => !seenIdsRef.current.has(coffee.id));
        fresh.forEach((coffee: FeedCoffee) => seenIdsRef.current.add(coffee.id));
        setExtraCoffees((prev) => [...prev, ...fresh]);
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

  const totalCount = seedIds.length + extraCoffees.length;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {children}
        {extraCoffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        {hasMore ? (
          <button
            type="button"
            onClick={loadNextPage}
            disabled={loading}
            className="bg-white text-[#5e2a8b] border-2 border-[#5e2a8b]/15 px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-sm hover:bg-[#E4D1B9]/20 hover:border-[#5e2a8b]/25 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Carregando..." : "Carregar mais rótulos"}
          </button>
        ) : null}

        {!loading && !hasMore && totalCount > 0 ? (
          <p className="text-sm text-[#5e2a8b]/40 font-medium">
            Você viu todos os cafés por agora ☕
          </p>
        ) : null}

        {!loading && totalCount === 0 ? (
          <p className="text-sm text-[#5e2a8b]/50 font-medium">
            Nenhum café encontrado no momento.
          </p>
        ) : null}
      </div>
    </>
  );
}
