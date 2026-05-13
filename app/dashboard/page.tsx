import { prisma } from '@/lib/prisma';

export default async function InvoicesPage() {
  const invoices = await prisma.invoice.findMany();

  return (
    <div>
      <h1 className="text-2xl font-bold">Invoices</h1>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            {invoice.customer} — {invoice.amount} ({invoice.status})
          </li>
        ))}
      </ul>
    </div>
  );
}