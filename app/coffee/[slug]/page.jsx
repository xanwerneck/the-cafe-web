"use client";

import { useParams } from "next/navigation";
import CoffeeDetail from "@/components/CoffeeDetail";

export default function CoffeePage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  if (!slug) return null;

  return <CoffeeDetail slug={slug} />;
}
