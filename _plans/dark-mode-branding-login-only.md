# Plan: Dark Mode, Branding, and Login-Only Setup

## Context
The scaffold was generated with a generic "My App" name, light-mode styling, and placeholder pages (home, about, dashboard). This plan strips it down to a single login page, rebrands it as DraftEngine, and applies a permanent dark color scheme throughout.

---

## Files to Delete
- `app/about/page.js` + directory
- `app/dashboard/page.js` + directory

---

## File Changes

### 1. `config/site.js`
- Default name: `'My App'` → `'DraftEngine'`
- Remove `footerLinks` array (no nav pages remain)

### 2. `app/page.js`
- Replace entire file with a server-side redirect: `import { redirect } from 'next/navigation'; export default function HomePage() { redirect('/login'); }`

### 3. `app/layout.js`
- Body classes: `bg-gray-50` → `bg-gray-900 text-gray-100`

### 4. `app/not-found.js`
- `text-gray-200` (404 number) → `text-gray-700`
- `text-gray-900` → `text-gray-100`
- `text-gray-600` → `text-gray-400`

### 5. `middleware.js`
- Remove `/dashboard` from `PROTECTED_ROUTES` (route is deleted)
- Change `isAuthRoute && token` redirect target from `/dashboard` → `/` (root then redirects to login)

### 6. `components/shared/Navbar.js`
- Clear `navLinks` array — no routes exist to link to
- Header: `border-gray-200 bg-white/80` → `border-gray-800 bg-gray-900/80`
- Logo: `text-gray-900` → `text-gray-100`
- Mobile toggle button: `text-gray-600 hover:bg-gray-100` → `text-gray-400 hover:bg-gray-800`
- Mobile menu container: `border-gray-200 bg-white` → `border-gray-800 bg-gray-900`
- Mobile link colors: `text-gray-600` → `text-gray-400`

### 7. `components/shared/Footer.js`
- Wrapper: `border-gray-200 bg-white` → `border-gray-800 bg-gray-900`
- Text/link: `text-gray-500` → `text-gray-400`, `hover:text-gray-900` → `hover:text-gray-100`
- Nav links will be empty (config cleared); remove the `<nav>` block entirely

### 8. `app/login/page.js`
- Heading: `text-gray-900` → `text-gray-100`
- Subtitle: `text-gray-600` → `text-gray-400`

### 9. `components/ui/Input.js`
- Label: `text-gray-700` → `text-gray-300`
- Input: `border-gray-300 bg-white` → `border-gray-700 bg-gray-800 text-gray-100`
- Hint text: `text-gray-500` → `text-gray-400`

### 10. `components/ui/Button.js`
- `outline` variant: `border-gray-300 bg-white text-gray-700 hover:bg-gray-50` → `border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800`
- `ghost` variant: `text-gray-700 hover:bg-gray-100` → `text-gray-300 hover:bg-gray-800`

### 11. `features/auth/LoginForm.js`
- After successful login: `router.push('/dashboard')` → `router.push('/')` (since `/dashboard` is deleted)

---

## Notes
- The "Next.js node in the bottom left" is the scaffold homepage content — replacing `app/page.js` with a redirect eliminates it. No badge component exists in the codebase.
- No `darkMode` Tailwind config entry is needed — colors are changed directly (permanent dark, no toggle).
- `app/api/` routes are left untouched.

---

## Verification
1. `npm run dev` — app loads at `localhost:3000`
2. Visiting `/` redirects to `/login`
3. Visiting `/about` or `/dashboard` returns Next.js 404
4. Browser tab reads "Sign In | DraftEngine"
5. No white/light surfaces visible anywhere on the login page
6. No Next.js logo or scaffold content visible
