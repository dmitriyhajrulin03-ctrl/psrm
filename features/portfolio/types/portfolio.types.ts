export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

export type PortfolioFilter = "all" | string;



