# Agent Instructions for LeMatic Videoproduction

This file contains guidelines and instructions for AI coding agents operating within the LeMatic Videoproduction repository. Please adhere to these rules to maintain code quality, consistency, and system stability.

## 1. Project Overview & Tech Stack
- **Framework:** Next.js (App Router, explicitly >= v14/v15)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS (v3), `clsx`, and `tailwind-merge`
- **Animations:** Framer Motion
- **Icons:** `lucide-react`
- **Data Management:** Static data files (`src/data/projects.ts`), simulating a lightweight CMS for a non-technical end-user.
- **Target OS Environment:** Developed on macOS, but targeting execution on Windows 11 (via a custom `.bat` script) for the final user. Ensure no Mac-specific build artifacts break the Windows runtime.

## 2. Build, Lint, and Test Commands

### Core Commands
- **Install Dependencies:** `npm install`
- **Run Development Server:** `npm run dev` (starts on `http://localhost:3000`)
- **Build for Production:** `npm run build`
- **Start Production Server:** `npm run start`
- **Lint Code:** `npm run lint`

### Testing Conventions
*Note: A formal test framework is currently not fully installed in `package.json`. If requested to write tests, you must first verify or initialize the required libraries (Vitest or Jest).*

Once testing is configured, adhere strictly to these commands:
- **Run all tests:** `npm run test`
- **Run tests in watch mode:** `npm run test:watch`
- **Run a single test file:** 
  - Using Vitest: `npx vitest run src/components/Hero.test.tsx`
  - Using Jest: `npx jest src/components/Hero.test.tsx`
- **Run a specific test case (by name):** 
  - `npm run test -- -t "should render the correct client name"`
- **Test Placement:** Always place test files directly adjacent to the file they are testing using the `.test.tsx` or `.spec.ts` suffix (e.g., `Hero.test.tsx` next to `Hero.tsx`).
- **Test Philosophy:** Focus on testing user interactions and rendering critical UI states.

## 3. Architecture & Project Structure
- `src/app/`: Next.js App Router directory. Contains routes (`page.tsx`), layouts (`layout.tsx`), and global CSS (`globals.css`).
- `src/app/projects/[id]/`: Dynamic routing for individual project detail pages.
- `src/components/`: Reusable React components. Keep them modular and purely presentational where possible.
- `src/data/`: Centralized data (`projects.ts`). Specifically designed with comments to be safely edited by non-technical users.
- `src/lib/` or `src/utils/`: For utility functions like `cn` (combining `clsx` and `twMerge`).
- `public/`: Static assets (logos, fallback images).
- `START_LEMATIC.bat` / `ANLEITUNG_MARTIN.md`: Custom launch scripts and guides for the Windows user. **CRITICAL:** Do not break their functionality or rename paths they rely on.

## 4. Code Style Guidelines

### 4.1. React & Next.js Conventions
- **App Router Exclusive:** Do not use the legacy `pages/` directory. All routing must use `app/`.
- **Server vs. Client Components:**
  - By default, assume components are Server Components.
  - Add the `'use client';` directive at the absolute top of the file *only* when the component requires React hooks (`useState`, `useEffect`), Framer Motion (`<motion.div>`), or client-side event listeners (`onClick`).
  - Keep Client Components as low in the tree as possible to maximize server-rendering performance.
- **Next.js Features:** Utilize `next/image` for image optimization. Always include `alt` tags. Use `next/link` for client-side navigation. Use Next.js loading states (`loading.tsx`) and Suspense boundaries where applicable.

### 4.2. TypeScript & Typings
- **Strict Typing:** The project operates with `strict: true`. Never use `any`. Use `unknown` if the type is truly dynamic, followed by type narrowing.
- **Data Interfaces:** When handling project data, strictly adhere to the `Project` and `BTSImage` interfaces exported from `src/data/projects.ts`.
- **Props Definition:** Define inline or adjacent interfaces for component props (e.g., `interface VideoModalProps { isOpen: boolean; }`). Avoid `FC` or `React.FC`; define the props type directly on the function signature.

### 4.3. Styling & Tailwind CSS
- **Tailwind First:** Use Tailwind CSS utility classes for all styling.
- **Dynamic Classes:** Use `clsx` and `tailwind-merge` for conditionally applying classes. If a `cn` utility exists in `src/utils` or `src/lib`, use it. Example: `className={cn("text-white", isActive && "text-blue-500")}`.
- **Cinematic Dark Theme:** Default backgrounds should be dark (`bg-black`, `bg-[#050505]`, `bg-gray-900`), text should be light (`text-white`, `text-gray-400`). Use uppercase tracking (`uppercase tracking-widest`) for typography accents.
- **Responsiveness:** Adopt a mobile-first approach. Use Tailwind breakpoints (`md:`, `lg:`) to scale layouts.
- **Animations:** Use Framer Motion for complex enter/exit and scroll animations. Rely on Tailwind's `transition-*` utilities for simple hover/focus states.

### 4.4. Imports & Exports
- **Aliases:** Always use the `@/` path alias to import from the `src` directory (e.g., `import { projects } from '@/data/projects';`). Do not use relative paths `../../` to reach `src/`.
- **Import Order Strategy:**
  1. Built-in modules or external packages (`react`, `next/link`, `framer-motion`, `lucide-react`).
  2. Absolute alias imports (`@/components/Header`, `@/data/projects`).
  3. Relative imports (`./VideoModal`).
- **Exports:** Default export React page/layout components. Named exports are preferred for utilities, types, and raw data objects.

### 4.5. Naming Conventions
- **React Components:** PascalCase (e.g., `ProjectGrid.tsx`, `BTSGallery.tsx`).
- **Functions, Hooks & Variables:** camelCase (e.g., `isOpen`, `handleClose`, `useProjectData`).
- **Interfaces & Types:** PascalCase without an "I" prefix (e.g., `Project`, `BTSImage`).
- **Booleans:** Prefix boolean variables with `is`, `has`, or `should` (e.g., `isModalOpen`).
- **Files & Directories:**
  - Components: PascalCase (`Hero.tsx`).
  - Route directories: kebab-case or Next.js specific routing brackets (`[id]`).
  - Utilities/Data files: camelCase (`projects.ts`).

### 4.6. Error Handling
- **Routing:** Use `notFound()` from `next/navigation` when a requested resource (like a specific project ID) does not exist.
- **Component Error Boundaries:** Implement `error.tsx` at route segments if data fetching is involved.
- **Defensive Rendering:** Always check array lengths or presence before mapping (e.g., `project.videos?.map(...)` or `project.videos && project.videos.length > 0`).
- **Try/Catch:** Wrap asynchronous operations in `try/catch` blocks. Log errors to the console in development, and display graceful fallback UI to the user.

### 4.7. Agent Operational Directives
- **Check Before Writing:** Always use the `read` tool to check a file's contents before using `write` or `edit`.
- **Target Audience Considerations:** Remember that files like `src/data/projects.ts` are edited by an end-user. Preserve all explanatory German comments (`// HINWEIS FÜR MARTIN`). Do not introduce complex nested structures there that are easy to break.
- **No Hallucinated Dependencies:** Before importing a library, use `bash` to read `package.json` to verify it is installed.
- **Tool Selection:** Prefer targeted tools (`edit`, `write`) over bash commands (`sed`, `cat >`) for file modifications.
- **Verification:** After modifying code, run `npm run lint` and `npm run build` to ensure no regressions were introduced.
