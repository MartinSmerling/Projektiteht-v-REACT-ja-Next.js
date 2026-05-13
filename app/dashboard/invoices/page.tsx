export const dynamic = 'force-dynamic';
import { prisma } from '@/lib/prisma';
import { deleteInvoice } from '@/lib/actions';
import Link from 'next/link';

export default async function InvoicesPage() {
  const invoices = await prisma.invoice.findMany();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Laskut</h1>
        <Link
          href="/dashboard/invoices/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + Uusi lasku
        </Link>
      </div>

      <div className="rounded-xl overflow-hidden shadow">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-700 text-gray-200 text-left text-sm uppercase tracking-wider">
              <th className="p-4">Asiakas</th>
              <th className="p-4">Summa</th>
              <th className="p-4">Status</th>
              <th className="p-4">Toiminnot</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, i) => (
              <tr
                key={inv.id}
                className={i % 2 === 0 ? 'bg-gray-800 text-gray-100' : 'bg-gray-750 text-gray-100'}
              >
                <td className="p-4">{inv.customer}</td>
                <td className="p-4">{inv.amount} €</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    inv.status === 'paid'
                      ? 'bg-green-800 text-green-200'
                      : 'bg-yellow-800 text-yellow-200'
                  }`}>
                    {inv.status}
                  </span>
                </td>
                <td className="p-4 flex gap-3">
                  <Link
                    href={`/dashboard/invoices/${inv.id}/edit`}
                    className="text-blue-400 hover:text-blue-300 hover:underline"
                  >
                    Muokkaa
                  </Link>
                  <form action={deleteInvoice.bind(null, inv.id)}>
                    <button type="submit" className="text-red-400 hover:text-red-300 hover:underline">
                      Poista
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}