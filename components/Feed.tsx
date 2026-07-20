import CoffeeCard from "@/components/CoffeeCard";
import FeedGrid from "@/components/FeedGrid";
import { feedSeedCoffees } from "@/lib/coffees/feedSeed";

const PAGE_SIZE = 4;

export default function Feed() {
  const seedIds = feedSeedCoffees.map((coffee) => coffee.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#5e2a8b]">
          Descobertas da Comunidade
        </h2>
        <p className="opacity-70 font-medium mt-1">O que os entusiastas estão bebendo agora</p>
      </header>

      <FeedGrid
        initialPage={feedSeedCoffees.length >= PAGE_SIZE ? 1 : 0}
        hasMoreInitial={feedSeedCoffees.length >= PAGE_SIZE}
        seedIds={seedIds}
      >
        {feedSeedCoffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </FeedGrid>
    </div>
  );
}
