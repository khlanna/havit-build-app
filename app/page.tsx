import { HeroSection } from "@/components/posts/HeroSection";
import { PostsList } from "@/components/posts/PostsList";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PostsList limit={5} />
    </div>
  );
}
