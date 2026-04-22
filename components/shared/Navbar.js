'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-100">
          {siteConfig.name}
        </Link>
      </nav>
    </header>
  );
}
