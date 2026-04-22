'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/dashboard', label: 'Dashboard' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-blue-600',
                  pathname === href ? 'text-blue-600' : 'text-gray-600'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'block text-sm font-medium transition-colors',
                    pathname === href ? 'text-blue-600' : 'text-gray-600'
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
