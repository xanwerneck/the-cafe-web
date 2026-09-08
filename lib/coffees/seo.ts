import { type Coffee } from "@/lib/coffees/types";

const DESCRIPTION_MAX = 160;

export function coffeeDisplayTitle(coffee: Coffee) {
  return coffee.title || coffee.name || "Café";
}

export function coffeeSeoDescription(coffee: Coffee) {
  const bio = coffee.bio?.trim().replace(/\s+/g, " ");
  if (bio) {
    if (bio.length <= DESCRIPTION_MAX) return bio;
    return `${bio.slice(0, DESCRIPTION_MAX - 1).trimEnd()}…`;
  }

  const details = [coffee.origin?.trim(), coffee.producer?.trim()].filter(Boolean);
  const suffix = details.length ? ` ${details.join(" · ")}.` : "";
  return `${coffeeDisplayTitle(coffee)} — café especial catalogado na comunidade The Cafe.${suffix}`;
}
