'use client';
import { useEffect, useState } from 'react';

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<any[]>([]);
  const [customer, setCustomer] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('pending');
  const [editId, setEditId] = useState<string | null>(null);

  async function fetchInvoices() {
    const res = await fetch('/api/invoices');
    const data = await res.json();
    setInvoices(data);
  }

  useEffect(() => { fetchInvoices(); }, []);

  async function handleSubmit() {
    if (editId) {
      await fetch(`/api/invoices/${editId}`, {
        method: 'PUT',
        body: JSON.stringify({ customer, amount: parseInt(amount), status }),
      });
      setEditId(null);
    } else {
      await fetch('/api/invoices', {
        method: 'POST',
        body: JSON.stringify({ customer, amount: parseInt(amount), status }),
      });
    }
    setCustomer(''); setAmount(''); setStatus('pending');
    fetchInvoices();
  }

  async function handleDelete(id: string) {
    await fetch(`/api/invoices/${id}`, { method: 'DELETE' });
    fetchInvoices();
  }

  function handleEdit(invoice: any) {
    setEditId(invoice.id);
    setCustomer(invoice.customer);
    setAmount(invoice.amount.toString());
    setStatus(invoice.status);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Invoices</h1>

      <div className="flex gap-2 mb-6">
        <input className="border p-2 rounded" placeholder="Asiakas" value={customer} onChange={e => setCustomer(e.target.value)} />
        <input className="border p-2 rounded" placeholder="Summa" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        <select className="border p-2 rounded" value={status} onChange={e => setStatus(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>
          {editId ? 'Tallenna' : 'Lisää'}
        </button>
      </div>

      <ul className="space-y-2">
        {invoices.map((invoice) => (
          <li key={invoice.id} className="flex gap-4 items-center border p-3 rounded">
            <span>{invoice.customer} — {invoice.amount}€ ({invoice.status})</span>
            <button className="text-blue-500" onClick={() => handleEdit(invoice)}>Muokkaa</button>
            <button className="text-red-500" onClick={() => handleDelete(invoice.id)}>Poista</button>
          </li>
        ))}
      </ul>
    </div>
  );
}