'use client';
import { useState } from 'react';

export default function NewInvoicePage() {
  const [message, setMessage] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();
    const res = await fetch('/api/invoices', {
      method: 'POST',
      body: JSON.stringify({
        customer: e.target.customer.value,
        amount: Number(e.target.amount.value),
        status: e.target.status.value,
      }),
    });
    setMessage(res.ok ? 'Invoice added!' : 'Error adding invoice');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="customer" placeholder="Customer" required />
      <input name="amount" type="number" placeholder="Amount" required />
      <input name="status" placeholder="Status" required />
      <button type="submit">Add Invoice</button>
      <p>{message}</p>
    </form>
  );
}
