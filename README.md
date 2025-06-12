# Morpho CMS

Morpho CMS is a modern, extensible content management system built with Next.js 15 (App Router, React 18, TypeScript), MongoDB (via Docker), and shadcn/ui for a beautiful, accessible UI. It is designed for flexibility, maintainability, and ease of use for both developers and content editors.

## Features

- **Next.js 15 (App Router, React 18, TypeScript)**
- **MongoDB** (Dockerized for easy local development)
- **shadcn/ui** for accessible, customizable UI components
- **Authentication** with NextAuth.js (Google or email/password)
- **Custom CMS** for managing blog posts, pages, forms, media, and more
- **Role-based access control** and permissions
- **WYSIWYG editor** for rich content editing
- **SEO, scheduling, versioning, and analytics** for blog posts
- **Media uploads** (images, videos)
- **Categories, tags, custom fields, and multilingual support**
- **Responsive and accessible design**
- **API endpoints** for all CMS resources
- **CI/CD with GitHub Actions**
- **ESLint, Prettier, and semantic versioning**

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start MongoDB in Docker:**
   ```sh
   docker compose up -d
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```
4. **Access the CMS:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app` — Next.js App Router pages and layouts
- `src/server` — Database models, actions, and queries (Mongoose, MongoDB)
- `src/client/components` — UI components (shadcn/ui), forms, tables, sidebar, etc.
- `src/client/hooks` — Custom React hooks
- `src/client/lib` — Utilities and helpers
- `src/app/api` — API routes for all CMS resources
- `bruno/` — Bruno API collection for testing endpoints

## API Testing

- Use the Bruno app and the provided collection in `bruno/` to test all API endpoints for forms and other resources.

## Theming

- Light/dark mode toggle is available in the user dropdown (requires `next-themes` provider in your root layout).

## Authentication

- NextAuth.js is used for authentication. Configure providers and environment variables as needed.

## Contributing

- Please follow best practices for Next.js, TypeScript, MongoDB, and shadcn/ui.
- Use ESLint and Prettier for code quality and formatting.
- Write clear commit messages and documentation.

---

For more details, see the documentation for [Next.js](https://nextjs.org/), [MongoDB](https://www.mongodb.com/), [shadcn/ui](https://ui.shadcn.com/), and [NextAuth.js](https://next-auth.js.org/).
