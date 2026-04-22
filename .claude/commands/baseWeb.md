# Next.js Production Web App Scaffold (JavaScript + Tailwind)

## Role

Act as a senior/staff-level frontend engineer. Generate a production-grade web application scaffold using Next.js (JavaScript only, not TypeScript) and Tailwind CSS.

---

## Core Requirements

- Use latest Next.js App Router (app directory)
- Use functional React components with hooks
- Production-grade structure (not tutorial/demo code)
- Tailwind CSS fully configured
- Scalable architecture designed for real-world use

---

## Architecture Rules

Use a feature-first (domain-driven) structure, NOT just folders by type.

Required structure:

- app/
  - layout.js (root layout)
  - page.js (home)
  - about/page.js
  - not-found.js
  - api/
    - health/route.js (example API route)

- features/
  - (domain modules like auth, dashboard, profile)

- components/
  - ui/ (design system components like Button, Input, Card)
  - shared/ (reusable app components like Navbar, Footer)

- hooks/
- lib/ (utilities/helpers)
- services/ (API layer)
- config/

---

## UI System

- Reusable design system components:
  - Button
  - Input
  - Card
  - Modal
- Responsive layout system (mobile-first)
- Consistent Tailwind styling patterns
- Layout variants (header, sidebar, footer support)

---

## Data & State Management

- Use Server Components where appropriate
- Use Client Components only when required
- Include API abstraction layer (fetch wrapper or axios wrapper)
- Use Context API for global state example
- Include loading + error state patterns

---

## Authentication Pattern (Example Only)

- Provide a protected route pattern using:
  - middleware OR layout-based guard
- Token/session structure example (no real secrets)

---

## API Layer

- Use Next.js route handlers (app/api)
- Include at least:
  - /api/health
  - /api/example
- Clean request/response structure
- Separate frontend calls from backend logic

---

## Developer Experience

- ESLint configuration
- Prettier configuration
- Environment variables (.env.local)
- Path aliases for clean imports (e.g. @/components)
- Clean naming conventions

---

## Performance Best Practices

- Prefer Server Components by default
- Minimize client-side JavaScript
- Use lazy loading where appropriate
- Ensure proper code splitting

---

## Output Format

1. Full folder structure tree
2. All key files with full implementation (not pseudo-code)
3. Setup instructions:
   - install
   - run dev
   - build
4. Brief explanation of architectural decisions

---

## Constraints

- JavaScript only (no TypeScript)
- No toy/demo-level scaffolding
- Must be production-oriented
- Do not omit critical config or setup files
