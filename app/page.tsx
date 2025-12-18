import { HeroSection } from "@/components/hero-section";
import { PostsList } from "@/components/posts-list";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PostsList limit={5} />
    </div>
  );
}
