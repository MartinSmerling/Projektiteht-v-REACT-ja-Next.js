import { ReactNode } from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col gap-2">
        <h2 className="text-xl font-bold mb-6 text-blue-400">ACME</h2>
        <Link
          href="/dashboard"
          className="px-4 py-2 rounded-lg hover:bg-gray-700 transition text-gray-300 hover:text-white"
        >
          🏠 Dashboard
        </Link>
        <Link
          href="/dashboard/invoices"
          className="px-4 py-2 rounded-lg hover:bg-gray-700 transition text-gray-300 hover:text-white"
        >
          🧾 Laskut
        </Link>
        <div className="mt-auto">
          <form action="/api/logout" method="GET">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg hover:bg-red-800 transition text-gray-400 hover:text-white block w-full text-left"
            >
              🚪 Kirjaudu ulos
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 bg-gray-950 p-8">{children}</main>
    </div>
  );
}