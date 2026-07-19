export const siteConfig = {
  name: "The Cafe",
  tagline: "Sua estante virtual de cafés especiais",
  description:
    "Catalogue seus grãos favoritos, descubra novas origens e conquiste seu selo de especialista. A maior comunidade de entusiastas de café do Brasil.",
  locale: "pt_BR",
  language: "pt-BR",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://thecafe.app",
  blogUrl: process.env.NEXT_PUBLIC_BLOG_URL ?? "https://blog.thecafe.app",
  blogHost: process.env.BLOG_HOST ?? "blog.thecafe.app",
  blogName: "Blog The Cafe",
  blogDescription:
    "Guias, dicas e conteúdos sobre café especial para iniciantes e entusiastas. Aprenda sobre origens, torras, métodos e como montar sua estante virtual.",
  appStoreUrl: "https://apps.apple.com/us/app/the-cafe/id6472904370",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.thecafeapp",
} as const;

export const siteTitle = `${siteConfig.name} — ${siteConfig.tagline}`;
export const blogTitle = `${siteConfig.blogName} — ${siteConfig.name}`;
