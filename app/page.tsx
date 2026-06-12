import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { siteConfig, siteTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteTitle,
    description: siteConfig.description,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
};

function homeJsonLd() {
  const { url, name, description, appStoreUrl, playStoreUrl } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name,
        description,
        inLanguage: "pt-BR",
        publisher: { "@id": `${url}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name,
        url,
        logo: {
          "@type": "ImageObject",
          url: `${url}/logo.png`,
        },
      },
      {
        "@type": "MobileApplication",
        name,
        operatingSystem: "iOS",
        applicationCategory: "LifestyleApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BRL",
        },
        downloadUrl: appStoreUrl,
      },
      {
        "@type": "MobileApplication",
        name,
        operatingSystem: "Android",
        applicationCategory: "LifestyleApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BRL",
        },
        downloadUrl: playStoreUrl,
      },
    ],
  };
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd()) }}
      />
      <HomePage />
    </>
  );
}
