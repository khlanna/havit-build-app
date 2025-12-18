import { Post } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PostCard({ post }: { post: Post }) {
  return (
    <Card>
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
  );
}
