export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? 'My App',
  description: 'A production-grade Next.js application.',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  footerLinks: [
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
  ],
};
