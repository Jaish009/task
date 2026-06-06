# LearnOS Dashboard

A sleek, futuristic education dashboard I built to track courses, progress, and daily activity. It's built with Next.js (App Router), Supabase, Tailwind CSS, and Framer Motion.

## Architectural Choices

- **Next.js App Router:** I went with the App Router to take advantage of React Server Components (RSCs) and nested layouts. It makes data fetching feel a lot more natural.
- **Tailwind CSS v4:** I recently upgraded the project to use Tailwind v4. It's a lot cleaner now since I can just use `@import "tailwindcss"` in the global stylesheet instead of the old directives, though it did trip me up for a minute during the setup.
- **Supabase:** For the backend, I used Supabase. It gave me a PostgreSQL database and an easy-to-use client out of the box without having to write a custom API layer.
- **Framer Motion:** I wanted the UI to feel extremely premium and fluid, so I relied heavily on Framer Motion for the layout animations, hover effects, and the staggered grid loading.

## Server / Client Component Split

I tried to be really deliberate about where the server/client boundary sits:
- **Server Components:** Things like `page.tsx` and `CoursesLoader.tsx` are server components. I handle all the async Supabase data fetching here so it happens securely on the server before sending HTML to the client.
- **Client Components:** Any component that handles interactions or animations (`Sidebar.tsx`, `BentoGrid.tsx`, `CourseCard.tsx`, `ActivityTile.tsx`) has the `"use client"` directive at the top. Since Framer Motion needs access to the DOM and React hooks (`useMotionValue`, `useSpring`, `useEffect`), these had to be pushed to the client.

## Challenges

The biggest headache I ran into was a nasty React hydration mismatch error on the `ActivityTile` component. 

I was initially using `Math.random()` directly in the JSX to generate the colors for the contribution heatmap. Because Next.js renders the component on the server first (generating one set of random colors) and then hydrates it on the client (generating a completely different set of random colors), React threw an error because the HTML didn't match. 

To fix it, I had to refactor the component to generate the random pattern inside a `useEffect` hook. This way, the initial render is consistent, and the random colors only get applied once the component safely mounts in the browser.

## Getting Started

If you want to run this locally:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a Supabase project and run the queries in `supabase-schema.sql` in the SQL Editor.
3. Rename `.env.local.example` to `.env.local` and drop in your Supabase URL and Anon Key.
4. Start the dev server:
   ```bash
   npm run dev
   ```
