export const metadata = {
  title: 'About',
  description: 'Learn more about this application.',
};

export default function AboutPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">About</h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          A production-grade Next.js scaffold built with the App Router, Tailwind CSS, and a
          feature-first architecture designed for real-world applications.
        </p>
        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Architecture</h2>
            <p className="mt-3 text-gray-600">
              Organized by domain (<code className="rounded bg-gray-100 px-1">features/</code>)
              rather than technical role, making it easy to scale and reason about bounded contexts.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Tech Stack</h2>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>• Next.js 15 with App Router</li>
              <li>• React 19 with Server Components</li>
              <li>• Tailwind CSS v3</li>
              <li>• Context API for global state</li>
              <li>• Route-handler API layer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
