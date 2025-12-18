# Havit Build App - Technical Assessment

A modern web application built with Next.js, TypeScript, and shadcn/ui for the Havit Build technical assessment.

## Project Overview

This application consists of two main pages:

1. **Main Page (Home)**: Features a hero section and displays a list of posts fetched from the JSONPlaceholder API
2. **Form Page**: A contact form with validation that submits data to the JSONPlaceholder API

## API Used

This project uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com) API:

- **Base URL**: `https://jsonplaceholder.typicode.com`
- **Endpoints Used**:
  - `GET /posts` - Fetch posts for the home page
  - `POST /posts` - Submit form data

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Package Manager**: npm

## Project Structure

```
havit-build-app/
├── app/
│   ├── form/
│   │   └── page.tsx          # Form page
│   ├── layout.tsx            # Root layout with navigation
│   └── page.tsx              # Home page
├── components/
│   ├── navigation.tsx        # Navigation component
│   └── ui/                   # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   ├── api.ts                # API utility functions
│   └── utils.ts              # Utility functions
└── types/
    └── index.ts              # TypeScript type definitions
```

## How to Run the Project Locally

### Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)

### Installation Steps

1. Clone the repository:

```bash
git clone <repository-url>
cd havit-build-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features

### Home Page

- ✅ Hero section with headline and description
- ✅ Button/link navigating to Form Page
- ✅ Fetches and displays 5 posts from API
- ✅ Handles loading and error states
- ✅ Responsive grid layout using shadcn/ui Card components
- ✅ Server-side rendering (SSR) for initial data load

### Form Page

- ✅ Full Name field with validation
- ✅ Email Address field with email validation
- ✅ Message textarea with validation
- ✅ Form validation using Zod schema
- ✅ React Hook Form for form state management
- ✅ Client-side POST request to API
- ✅ Success/error message display
- ✅ Form data logged to console
- ✅ No page refresh on submission

## Future Enhancements

- Pagination or "Load More" functionality for posts (structure ready)
- Additional form validation rules
- More reusable components
- Enhanced error handling and UI feedback

## Notes

- No backend or database is required (uses JSONPlaceholder API)
- All form submissions are logged to the browser console
- The application follows Next.js App Router conventions
- TypeScript is used throughout for type safety
