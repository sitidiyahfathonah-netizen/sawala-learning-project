
export type Article = {
  id: number;
  title: string;
  description: string;
  category: string;
  slug?: string;
  imageUrl?: string | null;
};
