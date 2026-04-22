import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Home',
};

const features = [
  {
    title: 'Next.js 15 App Router',
    description: 'Server Components by default, client only when required.',
    icon: '⚡',
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first styling with a consistent design token system.',
    icon: '🎨',
  },
  {
    title: 'Feature-First Architecture',
    description: 'Domain modules, clean API layer, and global state via Context.',
    icon: '🏗️',
  },
];

export default function HomePage() {
  return (
    <div className="container py-20">
      <section className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
          {siteConfig.description}
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      <section className="mt-24 grid gap-8 sm:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="p-6">
            <div className="mb-4 text-3xl">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </Card>
        ))}
      </section>
    </div>
  );
}
