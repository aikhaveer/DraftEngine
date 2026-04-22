# Spec for Dark Mode, Branding, and Login-Only Setup

branch: feature/dark-mode-branding-login-only

## Summary

Strip the scaffold down to a single login page, rebrand the app as DraftEngine, apply a dark mode theme globally, and remove the Next.js badge from the footer.

## Functional Requirements

- Visiting `/` redirects to `/login`; no other pages are reachable
- App name reads "DraftEngine" everywhere (navbar, browser tab, footer copyright)
- The entire UI uses a dark color scheme (dark backgrounds, light text, dark borders)
- The Next.js badge/logo in the bottom-left is removed
- Routes `/about` and `/dashboard` are deleted
- Footer navigation links pointing to removed pages are removed

## Possible Edge Cases

- Root redirect must work for both unauthenticated and authenticated users
- Removing pages should not break any remaining imports or references in layout/navbar
- Dark mode classes must cover all shared components (Navbar, Footer, layout body) to avoid light patches

## Acceptance Criteria

- [ ] Visiting `/` redirects to `/login`
- [ ] `/about` and `/dashboard` return 404 or are deleted
- [ ] Browser tab reads "DraftEngine" or "Login | DraftEngine"
- [ ] No Next.js badge or logo is visible anywhere
- [ ] All UI surfaces render with a dark background and legible light text
- [ ] No light-mode flash on initial load

## Open Questions

- Should the footer be removed entirely on the login page, or kept with just the copyright line?
- Is there a `NEXT_PUBLIC_APP_NAME` env var already set that needs updating, or only the default in `config/site.js`?

## Testing Guidelines

Create a test file(s) in the `.test` folder for this feature with meaningful coverage for:

- Root `/` redirects to `/login`
- `/about` and `/dashboard` routes no longer resolve
- Page `<title>` contains "DraftEngine"
- No element with the Next.js logo `alt` or class is rendered
