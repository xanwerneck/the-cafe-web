export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "link"; text: string; href: string };

export type BlogCoverImage = {
  src: string;
  alt: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  readingTimeMinutes: number;
  coverImage?: BlogCoverImage;
  content: BlogBlock[];
};
