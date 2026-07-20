import Image from "next/image";
import Link from "next/link";
import { coffeeHref } from "@/lib/coffeeSlug";
import { userHref } from "@/lib/userSlug";

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

export default function CoffeeCard({ coffee }: { coffee: FeedCoffee }) {
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
          {coffee.process ? (
            <span className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight shadow-sm">
              {coffee.process}
            </span>
          ) : null}
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
                <Link
                  href={userHref(coffee.user.username)}
                  className="hover:text-[#5e2a8b] hover:underline"
                >
                  @{coffee.user.username}
                </Link>
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
