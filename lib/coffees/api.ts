import { type FeedCoffee } from "@/lib/coffees/types";

const API_BASE =
  process.env.THE_CAFE_API_URL ??
  "https://the-cafe-api-service-ffm7qsxejq-rj.a.run.app/api";

export async function getCoffees(page = 0): Promise<FeedCoffee[]> {
  try {
    const response = await fetch(`${API_BASE}/coffees?page=${page}`, {
      next: { revalidate: 60 },
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
