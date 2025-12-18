"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Havit Build App
        </Link>
        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/form">Form</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
