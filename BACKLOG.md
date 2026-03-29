# LeMatic Videoproduction - Backlog & Roadmap 🚀

This file tracks planned improvements, technical debt, and feature ideas for the LeMatic Videoproduction website.

## 🔴 High Priority (Immediate Impact)

### 1. Performance: Next.js Image Optimization
- **Goal:** Replace standard `<img>` tags in `ProjectGrid.tsx` and `BTSGallery.tsx` with `next/image`.
- **Why:** Better loading times, automatic WebP conversion, and prevention of Layout Shifts (CLS).
- **Task:** Update `ProjectGrid.tsx` and ensure remote patterns are configured in `next.config.js` for Unsplash images.

### 2. SEO & Social Sharing (Open Graph)
- **Goal:** Add comprehensive meta-tags to `src/app/layout.tsx`.
- **Why:** Professional appearance when links are shared on WhatsApp, Instagram, or LinkedIn.
- **Task:** Add `og:title`, `og:description`, `og:image`, and `twitter:card`.

### 3. Typography & Branding
- **Goal:** Integrate a modern, high-quality font via `next/font/google`.
- **Why:** The current default system font looks "generic". A font like *Inter* or *Bebas Neue* (for headings) would enhance the cinematic feel.
- **Task:** Import font in `layout.tsx` and apply to `globals.css` or via Tailwind config.

---

## 🟡 Medium Priority (Polishing & UX)

### 4. Code Refactoring: ProjectCard Component
- **Goal:** Extract the project card logic from `ProjectGrid.tsx` into its own `src/components/ProjectCard.tsx`.
- **Why:** Improves readability and maintainability.
- **Task:** Move Framer Motion logic and UI for the card into a separate component.

### 5. Defensive Data Validation (Zod)
- **Goal:** Add a validation layer for `src/data/projects.ts`.
- **Why:** Martin (the user) edits this file manually. A missing comma or wrong URL format currently breaks the build.
- **Task:** Create a script/utility using `zod` to validate the data at runtime or build time and show helpful error messages.

### 6. Video Modal Enhancements
- **Goal:** Support native video players and improve transitions.
- **Why:** Currently focuses on YouTube/Vimeo. Adding support for direct MP4 links or better loading states would be a plus.
- **Task:** Refactor `VideoModal.tsx`.

---

## 🟢 Low Priority (Future Proofing)

### 7. Automated Testing Setup
- **Goal:** Install Vitest and add basic smoke tests for the Hero and ProjectGrid components.
- **Why:** Ensures that future updates (by AI or humans) don't break existing features.
- **Task:** `npm install vitest @testing-library/react`.

### 8. Contact Form / Lead Generation
- **Goal:** Add a simple contact section with a form.
- **Why:** Easier for potential clients to get in touch.
- **Task:** Create a new component and integrate with a service like Formspree or a simple API route.

### 9. Dark/Light Mode (Cinematic Toggle)
- **Goal:** While dark is default, a "Cinema Mode" toggle could add a nice interactive touch.
- **Why:** Adds "wow-factor" to the site.

---

## 💡 Long-term Vision
- **CMS Integration:** Migrate from `projects.ts` to a headless CMS (like Sanity or Contentful) if the number of projects grows significantly.
- **Motion Backgrounds:** Add more subtle Parallax or Particle effects to the background for a more premium feel.
