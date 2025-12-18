import { Post, FormData } from "@/types";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 * Fetch posts from JSONPlaceholder API
 * @param limit - Number of posts to fetch (default: 5)
 */
export async function fetchPosts(limit: number = 5): Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/posts?_limit=${limit}`, {
    // SSG: Cache at build time for static generation
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

/**
 * Submit form data to JSONPlaceholder API
 * @param data - Form data to submit
 */
export async function submitForm(data: FormData): Promise<Post> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.fullName,
        body: data.message,
        userId: 1, // Required by API
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to submit form: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    // Re-throw network errors with more context
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Network error: Unable to connect to the server");
    }
    throw error;
  }
}
