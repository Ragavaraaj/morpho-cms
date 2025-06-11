<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Project Overview

- This project is a Next.js 15 (React 18, TypeScript) app using MongoDB (Docker) and shadcn/ui.
- Ensure compatibility with the latest versions of Next.js, React, TypeScript, MongoDB, shadcn/ui, and NextAuth.js.
- We are creating a custom CMS with a focus on best practices, code quality, and maintainability.

# Project Requirements

- The cms will be used to manage the content of the website.
- The cms should allow for easy addition and editing of blog posts.
- The cms should support categories and tags for blog posts.
- The cms should have a user-friendly interface for non-technical users.
- The cms should allow for media uploads (images, videos).
- The cms should support SEO features for blog posts (meta titles, descriptions).
- The cms should have a built-in WYSIWYG editor for blog posts.
- The cms should allow for scheduling of blog posts.
- The cms should have a version control system for blog posts.
- The cms should support user roles and permissions for content management.
- The cms should have a search functionality for blog posts.
- The cms should allow for easy integration with social media platforms.
- The cms should have a responsive design for mobile and tablet users.
- The cms should support multilingual content for blog posts.
- The cms should have analytics features to track blog post performance.
- The cms should allow for custom fields in blog posts.
- The cms should have a comment system for blog posts.
- The cms should support custom themes and templates for blog posts.
- The cms should have a backup and restore feature for blog content.
- The cms should allow for easy import and export of blog content.
- The cms should have a notification system for content updates.
- The cms should support integration with email marketing tools.
- The cms should have a built-in RSS feed for blog posts.
- The cms should allow for easy linking of related blog posts.

# Project Structure

- Use the Next.js App Router for routing and page structure.
- Use TypeScript for type safety and to catch errors at compile time.
- Use shadcn/ui for UI components, utility classes, and theming.
- Use Zustand for state management where necessary.
- Use Zod for data validation and sanitization in the client side.
- Use mongoose for MongoDB schema definitions and data validation in the server side.
- Use NextAuth.js for authentication and authorization.
- Use Docker for MongoDB setup and ensure it runs smoothly with the Next.js app.

# Code Quality & Conventions

- Use best practices for Next.js App Router and MongoDB integration.
- Use TypeScript for type safety and to catch errors at compile time.
- Use TypeScript interfaces, types, and generics to define data structures and enhance type safety.
- Use modern JavaScript/TypeScript features where appropriate.
- Follow the project's coding style and conventions.
- Use descriptive variable and function names.
- Ensure code is clean, well-structured, modular, and follows separation of concerns.
- Never use deprecated or outdated features from Next.js, React, TypeScript, MongoDB, or shadcn/ui.
- Never use class components in React; prefer functional components with hooks.
- Never use any third-party libraries that are not compatible with the latest versions of core dependencies.

# UI & UX

- Use shadcn/ui for UI components, utility classes, theming, and follow their recommended patterns.
- Use shadcn/ui's form components for consistent form handling and validation.
- Use shadcn/ui components for consistent UI design and user experience.
- Ensure the project is responsive and works well on different screen sizes.
- Ensure accessibility and follow best practices for web accessibility.
- Use Next.js image optimization features for better performance.
- Use shadcn/ui's theming capabilities to ensure a consistent look and feel across the application.

# State Management

- Use modern React features like hooks and context API for simple global state.
- Use Zustand for more complex state management needs.
- Ensure best practices for state management, especially with complex data flows.

# Backend & Data

- Use Docker for MongoDB setup and ensure it runs smoothly with the Next.js app.
- Use environment variables for configuration (e.g., MongoDB connection string) and sensitive data.
- Never hard-code sensitive information like API keys or database connection strings.
- Use Next.js API routes for backend logic and for developers to hardcode data into db.
- Use Next.js's built-in support for API routes to handle server-side logic.
- Always use Next.js server actions for server-side logic to ensure proper data fetching and mutation.
- Ensure compatibility with the latest MongoDB features and best practices.
- Ensure compatibility with the latest Docker practices for MongoDB.
- Use moongoose for MongoDB schema definitions and data validation.

# Authentication & Security

- Use NextAuth.js for authentication and authorization.
- Ensure the project is secure and follows best practices for web security.
- Only use Google Authentication or email/password authentication with NextAuth.js.

# Next.js Features & Optimization

- Use Next.js features like API routes, static generation, and server-side rendering where appropriate.
- Ensure the project is optimized for performance and follows best practices for Next.js.
- Ensure compatibility with both server-side and client-side rendering.
- Use Next.js dynamic routing for flexible page structures.
- Use Next.js error handling features to provide a better user experience.
- Use Next.js analytics features to monitor performance and user interactions.
- Use Next.js internationalization features if applicable.

# Testing, CI/CD, and Documentation

- Ensure all code is tested and works with the latest versions of dependencies.
- Ensure the project is well-tested with unit and integration tests.
- Use ESLint and Prettier for code formatting and linting.
- Use GitHub Actions for CI/CD to automate testing and deployment.
- Provide clear and concise documentation in the README.md file.
- Provide clear and concise commit messages.
- Use semantic versioning for releases.

# Maintainability & Extensibility

- Ensure the project is easy to maintain and extend in the future.
- The project should be modular, easy to extend, and follow modern web development standards.

# Don'ts

- Do not use deprecated or outdated features from Next.js, React, TypeScript, MongoDB, or shadcn/ui.
- Do not use class components in React; prefer functional components with hooks.
- Do not hard-code sensitive information like API keys or database connection strings.
- Do not generate code inside `ui` prompts; instead, prompt me to install shadcn/ui components.

## Third-Party Libraries Don'ts

- Do not use third-party libraries that are not compatible with the latest versions of core dependencies.
- Do not use any third-party libraries that are not necessary for the project.
- Do not use any third-party libraries that do not follow best practices for security and performance.
- Do not use any third-party libraries that are not actively maintained or have known security vulnerabilities.
- Do not use any third-party libraries that do not have good documentation or community support.
- Do not use any third-party libraries that do not follow modern web development standards.
- Do not use any third-party libraries that do not have a clear license or are not open source.
