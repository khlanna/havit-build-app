# Havit Build App – Technical Assessment

A modern web application built with **Next.js**, **TypeScript**, and **shadcn/ui** as part of the Havit Build technical assessment.

---

## Project Overview

This application consists of two main pages:

1. **Main Page (Home)**  
   Features a hero section and displays a list of posts fetched from the JSONPlaceholder API.

2. **Form Page**  
   A contact form with validation that submits data to the JSONPlaceholder API without refreshing the page.

---

## API Used

This project uses the free mock API [JSONPlaceholder](https://jsonplaceholder.typicode.com):

- **Base URL**: `https://jsonplaceholder.typicode.com`
- **Endpoints Used**:
  - `GET /posts?_start={start}&_limit={limit}` – Fetch posts with pagination
  - `POST /posts` – Submit form data

---

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Package Manager**: npm

---

## Project Structure

```
havit-build-app/
├── app/
│   ├── error.tsx             # Route-level error boundary
│   ├── form/
│   │   └── page.tsx          # Form page
│   ├── layout.tsx            # Root layout with navigation
│   ├── loading.tsx           # Route-level loading state
│   └── page.tsx              # Home page
├── components/
│   ├── form/
│   │   ├── FormField.tsx     # Reusable form field component
│   │   ├── SubmitStatus.tsx  # Form submission status component
│   │   └── useContactForm.ts # Custom hook for form logic
│   ├── posts/
│   │   ├── HeroSection.tsx   # Hero section component
│   │   ├── LoadMorePosts.tsx # Load more posts component
│   │   ├── PostCard.tsx      # Reusable post card component
│   │   ├── PostsError.tsx    # Posts error component
│   │   ├── PostsList.tsx     # Posts list server component
│   │   ├── PostsLoading.tsx  # Posts loading component
│   │   └── useLoadMorePosts.ts # Custom hook for load more logic
│   ├── Navigation.tsx        # Navigation component
│   └── ui/                   # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   ├── api.ts                # API utility functions
│   ├── utils.ts              # Utility functions
│   └── validation/
│       └── formSchema.ts     # Zod validation schema
└── types/
    └── index.ts              # TypeScript type definitions
```

---

## How to Run the Project Locally

### Prerequisites

- Node.js 18+
- npm (included with Node.js)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd havit-build-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open in browser:

```
http://localhost:3000
```

---

### Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm start` – Start production server
- `npm run lint` – Run ESLint

---

## Features

### Home Page

- ✅ Hero section with headline and description
- ✅ Navigation button to Form page
- ✅ Fetches and displays initial 5 posts from API (server-rendered)
- ✅ **Load More** functionality to fetch additional posts client-side
- ✅ Loading and error states handled
- ✅ Route-level error boundary (`error.tsx`) for unexpected crashes
- ✅ Route-level loading state (`loading.tsx`)
- ✅ Inline error UI (`PostsError`) for partial failures without blocking the page
- ✅ Single column layout (one post per line)
- ✅ **Server-side data fetching with caching (SSG)** for initial load
- ✅ React Suspense for async data loading

### Form Page

- ✅ Full Name field with validation
- ✅ Email Address field with email validation
- ✅ Message textarea with validation
- ✅ Form validation using Zod schema
- ✅ React Hook Form for form state management
  - **Note:** Form state is managed with React Hook Form instead of individual `useState` hooks per input field. This provides better performance through uncontrolled components, built-in validation integration, and reduces unnecessary re-renders.
- ✅ Client-side POST request to API
- ✅ Success and error feedback
- ✅ Form data logged to the browser console
- ✅ No page refresh on submission

---

## Cache & Revalidation Notes

JSONPlaceholder is a mock API and does **not persist newly created posts**.  
For this reason, cache invalidation using `revalidateTag()` is **not implemented**.

In a real-world scenario where the API persists data, the posts fetch would be tagged (e.g. `tags: ['posts']`) and invalidated after a successful form submission using `revalidateTag('posts')`, followed by `router.refresh()` to update the UI.

This was intentionally omitted here to reflect the actual behavior of the API and avoid misleading revalidation logic.

---

## Future Enhancements

- Additional form validation rules
- More reusable components
- Enhanced error handling and UI feedback
- Grid layout option for posts display

---

## Notes

- No backend or database is required
- Uses Next.js App Router conventions
- TypeScript is used throughout for type safety
- Clean, minimal implementation without over-engineering
