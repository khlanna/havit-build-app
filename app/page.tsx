import { Suspense } from "react";
import { HeroSection } from "@/components/posts/HeroSection";
import { PostsList } from "@/components/posts/PostsList";
import { PostsLoading } from "@/components/posts/PostsLoading";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <Suspense fallback={<PostsLoading />}>
        <PostsList limit={5} />
      </Suspense>
    </div>
  );
}
