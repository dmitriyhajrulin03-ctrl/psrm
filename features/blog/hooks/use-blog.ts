import { useState } from "react";

export function useBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  return {
    posts,
    loading,
  };
}




