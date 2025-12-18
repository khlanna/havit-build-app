"use client";

import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/posts/PostCard";
import { useLoadMorePosts } from "@/components/posts/useLoadMorePosts";

type Props = {
  initialOffset: number;
  pageSize: number;
};

export function LoadMorePosts({ initialOffset, pageSize }: Props) {
  const { extraPosts, isLoading, error, hasMore, loadMore } = useLoadMorePosts(
    initialOffset,
    pageSize
  );

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
