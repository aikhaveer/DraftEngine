import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="container flex items-center justify-center py-8">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
