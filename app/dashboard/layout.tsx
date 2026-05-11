export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6">
        <nav className="space-y-4">
          <a href="/dashboard" className="block">Overview</a>
          <a href="/dashboard/invoices" className="block">Invoices</a>
          <a href="/dashboard/settings" className="block">Settings</a>
        </nav>
      </aside>

      <main className="flex-1 p-10 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
