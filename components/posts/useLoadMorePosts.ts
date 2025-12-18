"use client";

import { useState } from "react";
import type { Post } from "@/types";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export function useLoadMorePosts(initialOffset: number, pageSize: number) {
  const [offset, setOffset] = useState(initialOffset);
  const [extraPosts, setExtraPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // capture the current offset once, for this request
      const currentOffset = offset;

      const res = await fetch(
        `${API_BASE_URL}/posts?_start=${currentOffset}&_limit=${pageSize}`
      );

      if (!res.ok) throw new Error("Failed to load more posts");

      const next: Post[] = await res.json();

      setExtraPosts((prev) => [...prev, ...next]);
      // advance offset after success
      setOffset((prev) => prev + pageSize);
      // stop when fewer results returned
      setHasMore(next.length === pageSize);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load more posts");
    } finally {
      setIsLoading(false);
    }
  };

  return { extraPosts, isLoading, error, hasMore, loadMore };
}
