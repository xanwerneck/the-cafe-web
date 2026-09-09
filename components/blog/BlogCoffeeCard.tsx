import Image from "next/image";

type BlogCoffeeCardProps = {
  href: string;
  title: string;
  image: string;
  imageAlt: string;
  producer?: string;
  meta?: string;
  description?: string;
  cta?: string;
};

export default function BlogCoffeeCard({
  href,
  title,
  image,
  imageAlt,
  producer,
  meta,
  description,
  cta = "Ver ficha e avaliações no The Cafe →",
}: BlogCoffeeCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl ring-1 ring-[#5e2a8b]/12 bg-[#FDFCFB] hover:ring-[#5e2a8b]/25 hover:shadow-md transition-all"
    >
      <div className="relative w-full sm:w-40 h-44 sm:h-auto sm:min-h-[10.5rem] shrink-0 bg-[#E4D1B9]/30 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 160px"
          className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
        />
      </div>

      <div className="p-4 sm:p-5 flex flex-col justify-center gap-1.5 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#5e2a8b]/45">
          No acervo The Cafe
        </p>
        <h3 className="font-black text-lg leading-tight text-[#5e2a8b]">{title}</h3>
        {producer ? (
          <p className="text-sm font-semibold text-[#5e2a8b]/70">{producer}</p>
        ) : null}
        {meta ? (
          <p className="text-xs font-medium text-[#5e2a8b]/50">{meta}</p>
        ) : null}
        {description ? (
          <p className="text-sm font-medium text-[#5e2a8b]/70 leading-relaxed line-clamp-2">
            {description}
          </p>
        ) : null}
        <span className="mt-1 inline-flex items-center text-sm font-black text-[#5e2a8b] underline underline-offset-4 decoration-[#5e2a8b]/30 group-hover:decoration-[#5e2a8b] transition-colors">
          {cta}
        </span>
      </div>
    </a>
  );
}
