export const siteConfig = {
  name: "The Cafe",
  tagline: "Sua estante virtual de cafés especiais",
  description:
    "Catalogue seus grãos favoritos, descubra novas origens e conquiste seu selo de especialista. A maior comunidade de entusiastas de café do Brasil.",
  locale: "pt_BR",
  language: "pt-BR",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://thecafe.app",
  appStoreUrl: "https://apps.apple.com/us/app/the-cafe/id6472904370",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.thecafeapp",
} as const;

export const siteTitle = `${siteConfig.name} — ${siteConfig.tagline}`;
