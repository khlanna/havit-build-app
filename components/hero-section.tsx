import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
        Welcome to Havit Build App
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
        A modern web application built with Next.js, TypeScript, and shadcn/ui.
        Explore our posts or submit a form to get started.
      </p>
      <Button asChild size="lg">
        <Link href="/form">Go to Form</Link>
      </Button>
    </section>
  );
}
