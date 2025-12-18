"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";

type PostsErrorProps = { error?: unknown };

export function PostsError({ error }: PostsErrorProps) {
  const router = useRouter();

  const message =
    error instanceof Error ? error.message : String(error ?? "Unknown error");

  return (
    <Card role="alert" className="border-destructive/40 bg-destructive/5">
      <CardHeader>
        <div className="flex items-center gap-3">
          <AlertCircle className="h-5 w-5 text-destructive" />
          <CardTitle>Unable to load posts</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Please try again. You can still use the rest of the page.
        </p>

        <Button
          onClick={() => router.refresh()}
          variant="outline"
          className="w-full sm:w-auto"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Retry
        </Button>

        {process.env.NODE_ENV === "development" && (
          <details>
            <summary className="cursor-pointer text-xs text-muted-foreground hover:text-foreground">
              Technical details
            </summary>
            <pre className="mt-2 rounded-md bg-muted p-3 text-xs">
              {message}
            </pre>
          </details>
        )}
      </CardContent>
    </Card>
  );
}

