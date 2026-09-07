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
