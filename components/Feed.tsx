import CoffeeCard from "@/components/CoffeeCard";
import FeedGrid from "@/components/FeedGrid";
import { getCoffees } from "@/lib/coffees/api";
import { FEED_PAGE_SIZE } from "@/lib/coffees/types";

export default async function Feed() {
  const coffees = await getCoffees(0);
  const initialIds = coffees.map((coffee) => coffee.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#5e2a8b]">
          Descobertas da Comunidade
        </h2>
        <p className="opacity-70 font-medium mt-1">O que os entusiastas estão bebendo agora</p>
      </header>

      <FeedGrid
        initialPage={coffees.length >= FEED_PAGE_SIZE ? 1 : 0}
        hasMoreInitial={coffees.length >= FEED_PAGE_SIZE}
        initialIds={initialIds}
      >
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </FeedGrid>
    </div>
  );
}
