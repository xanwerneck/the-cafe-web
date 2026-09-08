export const FEED_PAGE_SIZE = 4;

export type FeedCoffee = {
  id: number;
  title: string;
  original_picture: string;
  process?: string;
  views?: number;
  user?: {
    username?: string;
  };
};

export type CoffeeUser = {
  id?: number;
  name?: string;
  username?: string;
  bio?: string;
  verified?: boolean;
  original_picture?: string;
};

export type CoffeeReview = {
  body: string;
  created_at?: string;
};

export type Coffee = {
  id: number;
  title?: string;
  name?: string;
  bio?: string;
  origin?: string;
  producer?: string;
  burn?: number;
  format?: number;
  tastes?: string;
  views?: number;
  process?: string;
  altitude?: string;
  resized_picture?: string;
  original_picture?: string;
  user?: CoffeeUser;
  comment?: CoffeeReview[];
};
