import { useState } from "react";

export function usePortfolio() {
  const [filter, setFilter] = useState<string>("all");
  const [items, setItems] = useState([]);

  return {
    filter,
    setFilter,
    items,
  };
}





