"use client";

import { useState, type FormEvent } from "react";
import { type CoffeeReview } from "@/lib/coffees/types";

function formatReviewDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function CoffeeReviews({
  coffeeId,
  initialReviews,
}: {
  coffeeId: number;
  initialReviews: CoffeeReview[];
}) {
  const [reviews, setReviews] = useState(initialReviews);
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function refreshReviews() {
    const response = await fetch(`/api/coffees/${coffeeId}`);
    if (!response.ok) return;
    const data = await response.json();
    setReviews(Array.isArray(data.comment) ? data.comment : []);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = body.trim();
    if (!trimmed || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: trimmed, coffee_id: coffeeId }),
      });

      if (!response.ok) throw new Error("Não foi possível enviar sua opinião.");

      setBody("");
      await refreshReviews();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Não foi possível enviar sua opinião.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-white rounded-[24px] p-5 ring-1 ring-[#5e2a8b]/8 shadow-sm space-y-5">
      <div>
        <h2 className="text-[10px] font-bold uppercase tracking-[2px] text-[#5e2a8b]/45">
          Opiniões
        </h2>
        {reviews.length > 0 && (
          <p className="text-sm text-[#5e2a8b]/50 font-medium mt-1">
            {reviews.length === 1 ? "1 opinião" : `${reviews.length} opiniões`}
          </p>
        )}
      </div>

      {reviews.length > 0 ? (
        <ul className="space-y-4">
          {reviews.map((review, index) => (
            <li
              key={`${review.created_at}-${index}`}
              className="border-t border-[#5e2a8b]/8 pt-4 first:border-0 first:pt-0"
            >
              <p className="text-[#5e2a8b]/85 leading-relaxed font-medium whitespace-pre-wrap">
                {review.body}
              </p>
              {review.created_at && (
                <time
                  dateTime={review.created_at}
                  className="block text-[11px] text-[#5e2a8b]/40 font-semibold mt-2"
                >
                  {formatReviewDate(review.created_at)}
                </time>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-[#5e2a8b]/50 font-medium">
          Ninguém opinou sobre este café ainda. Seja o primeiro!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 border-t border-[#5e2a8b]/8 pt-5">
        <label htmlFor="review-body" className="sr-only">
          Sua opinião
        </label>
        <textarea
          id="review-body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="Conte o que achou deste café..."
          rows={3}
          maxLength={1000}
          disabled={submitting}
          className="w-full resize-none rounded-2xl border border-[#5e2a8b]/10 bg-[#FDFCFB] px-4 py-3 text-[#5e2a8b] placeholder:text-[#5e2a8b]/35 font-medium leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#5e2a8b]/20 disabled:opacity-60"
        />
        {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
        <button
          type="submit"
          disabled={submitting || !body.trim()}
          className="w-full bg-[#5e2a8b] text-white py-3 rounded-2xl font-black text-sm shadow-lg shadow-[#5e2a8b]/15 hover:scale-[1.01] active:scale-[0.99] transition-transform disabled:opacity-50 disabled:hover:scale-100"
        >
          {submitting ? "Enviando..." : "Publicar opinião"}
        </button>
      </form>
    </section>
  );
}
