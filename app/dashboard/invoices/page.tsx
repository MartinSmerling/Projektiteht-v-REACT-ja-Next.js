export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';
import { deleteInvoice } from '@/lib/actions';
import Link from 'next/link';

export default async function InvoicesPage() {
  const invoices = await prisma.invoice.findMany();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Laskut</h1>
        <Link
          href="/dashboard/invoices/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Uusi lasku
        </Link>
      </div>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Asiakas</th>
            <th className="p-3">Summa</th>
            <th className="p-3">Status</th>
            <th className="p-3">Toiminnot</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id} className="border-t">
              <td className="p-3">{inv.customer}</td>
              <td className="p-3">{inv.amount} €</td>
              <td className="p-3">{inv.status}</td>
              <td className="p-3 flex gap-2">
                <Link
                  href={`/dashboard/invoices/${inv.id}/edit`}
                  className="text-blue-600 hover:underline"
                >
                  Muokkaa
                </Link>
                <form action={deleteInvoice.bind(null, inv.id)}>
                  <button type="submit" className="text-red-600 hover:underline">
                    Poista
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}