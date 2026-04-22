import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/features/auth/AuthContext';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
