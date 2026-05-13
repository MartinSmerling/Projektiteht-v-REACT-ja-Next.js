import { prisma } from '@/lib/prisma';
import { updateInvoice } from '@/lib/actions';
import { notFound } from 'next/navigation';

export default async function EditInvoicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const invoice = await prisma.invoice.findUnique({
    where: { id },
  });

  if (!invoice) notFound();

  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6">Muokkaa laskua</h1>
        <form action={updateInvoiceWithId} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Asiakas</label>
            <input
              name="customer"
              type="text"
              defaultValue={invoice.customer}
              required
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Summa (€)</label>
            <input
              name="amount"
              type="number"
              step="0.01"
              defaultValue={invoice.amount}
              required
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Status</label>
            <select
              name="status"
              defaultValue={invoice.status}
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Tallenna muutokset
          </button>
        </form>
      </div>
    </div>
  );
}