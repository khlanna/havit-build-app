import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchPosts } from "@/lib/api";
import { Post } from "@/types";

interface PostsListProps {
  limit?: number;
}

export async function PostsList({ limit = 5 }: PostsListProps) {
  let posts: Post[] = [];
  let error: string | null = null;

  try {
    // Fetch posts from API (SSG - Static Site Generation)
    posts = await fetchPosts(limit);
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to fetch posts";
  }

  if (error) {
    return (
      <section className="container mx-auto px-4 py-12">
        <div className="rounded-lg border border-destructive bg-destructive/10 p-6 text-center">
          <h2 className="text-xl font-semibold text-destructive mb-2">
            Error Loading Posts
          </h2>
          <p className="text-sm text-muted-foreground">{error}</p>
        </div>
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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <CardDescription>Post ID: {post.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {post.body}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
