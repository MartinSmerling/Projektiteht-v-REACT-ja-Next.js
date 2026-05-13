import { Card } from '@/components/Card';

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
      <Card>
        <h2 className="text-lg font-semibold text-gray-800">Tervetuloa ACME Dashboardiin</h2>
        <p className="text-gray-600 mt-2">Hallinnoi laskujasi vasemman valikon kautta.</p>
      </Card>
    </div>
  );
}