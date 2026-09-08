import { FEED_PAGE_SIZE, type Coffee, type FeedCoffee } from "@/lib/coffees/types";

const API_BASE =
  process.env.THE_CAFE_API_URL ??
  "https://the-cafe-api-service-ffm7qsxejq-rj.a.run.app/api";

const MAX_COFFEE_PAGES = 1000;

type GetCoffeesOptions = {
  revalidate?: number;
};

export async function getCoffees(
  page = 0,
  { revalidate = 60 }: GetCoffeesOptions = {},
): Promise<FeedCoffee[]> {
  try {
    const response = await fetch(`${API_BASE}/coffees?page=${page}`, {
      next: { revalidate },
    });

    if (!response.ok) {
      console.error(`Failed to fetch coffees: ${response.status}`);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getAllCoffees(
  { revalidate = 60 }: GetCoffeesOptions = {},
): Promise<FeedCoffee[]> {
  const coffees: FeedCoffee[] = [];
  const seen = new Set<number>();

  for (let page = 0; page < MAX_COFFEE_PAGES; page += 1) {
    const batch = await getCoffees(page, { revalidate });
    if (batch.length === 0) break;

    for (const coffee of batch) {
      if (seen.has(coffee.id)) continue;
      seen.add(coffee.id);
      coffees.push(coffee);
    }

    if (batch.length < FEED_PAGE_SIZE) break;
  }

  return coffees;
}

export async function getCoffee(id: number): Promise<Coffee | null> {
  const response = await fetch(`${API_BASE}/coffees/${id}`, {
    next: { revalidate: 60 },
  });

  if (response.status === 404) return null;

  if (!response.ok) {
    throw new Error(`Failed to fetch coffee ${id}: ${response.status}`);
  }

  const data = await response.json();
  if (!data || typeof data.id !== "number") return null;
  return data as Coffee;
}
