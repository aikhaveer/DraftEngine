import DashboardStats from '@/features/dashboard/DashboardStats';

export const metadata = {
  title: 'Dashboard',
};

// Replace with real session lookup (next-auth, JWT cookie, etc.)
async function getSession() {
  return null;
}

export default async function DashboardPage() {
  // Uncomment to enforce server-side auth guard:
  // const session = await getSession();
  // if (!session) redirect('/login');

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-gray-600">Welcome back. Here&apos;s your overview.</p>
      </div>
      <DashboardStats />
    </div>
  );
}
