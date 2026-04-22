import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <nav className="flex gap-6">
          {siteConfig.footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
