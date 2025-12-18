import { fetchPosts } from "@/lib/api";
import { Post } from "@/types";
import { PostsError } from "@/components/posts/PostsError";
import { PostCard } from "@/components/posts/PostCard";
import { LoadMorePosts } from "@/components/posts/LoadMorePosts";

interface PostsListProps {
  limit?: number;
}

export async function PostsList({ limit = 5 }: PostsListProps) {
  let posts: Post[] = [];
  let error: unknown = null;

  try {
    // Fetch initial posts from API (SSG - Static Site Generation)
    posts = await fetchPosts(0, limit);
  } catch (err) {
    error = err;
  }

  if (error) {
    return (
      <section className="container mx-auto px-4 py-12">
        <PostsError error={error} />
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-muted-foreground">No posts available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Recent Posts</h2>
        <p className="text-muted-foreground">
          Here are some posts fetched from the JSONPlaceholder API.
        </p>
      </div>

      {/* Initial posts rendered on the server */}
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Client-side append */}
      <LoadMorePosts initialOffset={limit} pageSize={limit} />
    </section>
  );
}
