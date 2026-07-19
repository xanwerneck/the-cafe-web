import type { Metadata } from "next";
import { blogTitle, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.blogUrl),
  title: {
    default: blogTitle,
    template: `%s | ${siteConfig.blogName}`,
  },
  description: siteConfig.blogDescription,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.blogName,
    url: siteConfig.blogUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.blogUrl,
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
