"use client";

import { useEffect, useRef } from "react";

export default function CoffeeViewsTracker({ coffeeId }: { coffeeId: number }) {
  const viewsRecorded = useRef(false);

  useEffect(() => {
    if (!coffeeId || viewsRecorded.current) return;
    viewsRecorded.current = true;
    fetch(`/api/coffees/${coffeeId}/views`, { method: "PUT" });
  }, [coffeeId]);

  return null;
}
