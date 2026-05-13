import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6">
        {/* Sidebar content */}
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
