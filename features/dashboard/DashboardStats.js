import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

const stats = [
  { label: 'Total Users', value: '12,400', change: '+8.2%', up: true },
  { label: 'Revenue', value: '$48,295', change: '+14.1%', up: true },
  { label: 'Active Sessions', value: '1,837', change: '-2.4%', up: false },
  { label: 'Conversion Rate', value: '3.6%', change: '+0.8%', up: true },
];

export default function DashboardStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-500">{stat.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            <p className={`mt-1 text-sm font-medium ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} vs last period
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
