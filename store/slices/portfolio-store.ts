import { create } from "zustand";
import type { PortfolioItem } from "@/features/portfolio/types/portfolio.types";

interface PortfolioState {
  items: PortfolioItem[];
  filter: string;
  setItems: (items: PortfolioItem[]) => void;
  setFilter: (filter: string) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  items: [],
  filter: "all",
  setItems: (items) => set({ items }),
  setFilter: (filter) => set({ filter }),
}));



