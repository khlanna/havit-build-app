"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Post } from "@/types";
import { PostCard } from "@/components/posts/PostCard";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

type Props = {
  initialOffset: number; // e.g. 5
  pageSize: number; // e.g. 5
};

export function LoadMorePosts({ initialOffset, pageSize }: Props) {
  const [offset, setOffset] = useState(initialOffset);
  const [extraPosts, setExtraPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `${API_BASE_URL}/posts?_start=${offset}&_limit=${pageSize}`
      );

      if (!res.ok) throw new Error("Failed to load more posts");

      const next: Post[] = await res.json();

      setExtraPosts((prev) => [...prev, ...next]);
      setOffset((prev) => prev + pageSize);

      // If API returned fewer than pageSize => no more pages
      setHasMore(next.length === pageSize);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load more posts");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8">
      {extraPosts.length > 0 && (
        <div className="flex flex-col gap-6">
          {extraPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-col items-center gap-3">
        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}

        {hasMore ? (
          <Button
            onClick={loadMore}
            disabled={isLoading}
            className="w-full sm:w-auto"
            variant="outline"
          >
            {isLoading ? "Loading..." : "Load More"}
          </Button>
        ) : (
          <p className="text-sm text-muted-foreground">You reached the end.</p>
        )}
      </div>
    </div>
  );
}
