import { prisma } from '@/lib/prisma';

export default async function InvoicesPage() {
  const invoices = await prisma.invoice.findMany();

  return (
    <table className="w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="p-3">Customer</th>
          <th className="p-3">Amount</th>
          <th className="p-3">Status</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map(inv => (
          <tr key={inv.id} className="border-t">
            <td className="p-3">{inv.customer}</td>
            <td className="p-3">{inv.amount} €</td>
            <td className="p-3">{inv.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
