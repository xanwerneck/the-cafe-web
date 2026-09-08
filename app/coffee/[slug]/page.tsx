import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import CoffeeDetail from "@/components/CoffeeDetail";
import { coffeeHref, coffeePublicUrl, parseCoffeeId } from "@/lib/coffeeSlug";
import { getCoffee } from "@/lib/coffees/api";
import { coffeeDisplayTitle, coffeeSeoDescription } from "@/lib/coffees/seo";
import { type Coffee } from "@/lib/coffees/types";
import { siteConfig } from "@/lib/site";

type CoffeePageProps = {
  params: Promise<{ slug: string }>;
};

const notFoundMetadata: Metadata = {
  title: "Café não encontrado",
  robots: { index: false, follow: false },
};

function coffeeKeywords(coffee: Coffee) {
  return [
    coffeeDisplayTitle(coffee),
    coffee.origin?.trim(),
    coffee.producer?.trim(),
    coffee.process?.trim(),
    "café especial",
    "The Cafe",
  ].filter((value): value is string => Boolean(value));
}

function coffeeJsonLd(coffee: Coffee) {
  const title = coffeeDisplayTitle(coffee);
  const url = coffeePublicUrl(coffee);
  const image = coffee.original_picture || coffee.resized_picture;
  const extraProperties = [
    coffee.origin?.trim() && {
      "@type": "PropertyValue",
      name: "Origem",
      value: coffee.origin.trim(),
    },
    coffee.process?.trim() && {
      "@type": "PropertyValue",
      name: "Processo",
      value: coffee.process.trim(),
    },
    coffee.altitude?.trim() && {
      "@type": "PropertyValue",
      name: "Altitude",
      value: coffee.altitude.trim(),
    },
  ].filter((value) => Boolean(value));

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description: coffeeSeoDescription(coffee),
    image,
    url,
    ...(coffee.producer?.trim()
      ? { brand: { "@type": "Brand", name: coffee.producer.trim() } }
      : {}),
    ...(extraProperties.length ? { additionalProperty: extraProperties } : {}),
  };
}

export async function generateMetadata({ params }: CoffeePageProps): Promise<Metadata> {
  const { slug } = await params;
  const coffeeId = parseCoffeeId(slug);

  if (!coffeeId) return notFoundMetadata;

  try {
    const coffee = await getCoffee(coffeeId);
    if (!coffee) return notFoundMetadata;

    const title = coffeeDisplayTitle(coffee);
    const description = coffeeSeoDescription(coffee);
    const url = coffeePublicUrl(coffee);
    const image = coffee.original_picture || coffee.resized_picture || "/logo.png";

    return {
      title,
      description,
      keywords: coffeeKeywords(coffee),
      alternates: {
        canonical: url,
      },
      openGraph: {
        type: "website",
        locale: siteConfig.locale,
        url,
        siteName: siteConfig.name,
        title,
        description,
        images: [
          {
            url: image,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  } catch {
    return {
      title: siteConfig.name,
    };
  }
}

export default async function CoffeePage({ params }: CoffeePageProps) {
  const { slug } = await params;
  const coffeeId = parseCoffeeId(slug);

  if (!coffeeId) notFound();

  const coffee = await getCoffee(coffeeId);
  if (!coffee) notFound();

  const canonicalPath = coffeeHref(coffee);
  if (`/coffee/${slug}` !== canonicalPath) {
    permanentRedirect(canonicalPath);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coffeeJsonLd(coffee)) }}
      />
      <CoffeeDetail coffee={coffee} />
    </>
  );
}
