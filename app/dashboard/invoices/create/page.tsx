import { createInvoice } from '@/lib/actions';

export default function CreateInvoicePage() {
  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Uusi lasku</h1>
      <form action={createInvoice} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Asiakas</label>
          <input
            name="customer"
            type="text"
            required
            className="w-full border rounded p-2"
            placeholder="Asiakkaan nimi"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Summa (€)</label>
          <input
            name="amount"
            type="number"
            step="0.01"
            required
            className="w-full border rounded p-2"
            placeholder="0.00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select name="status" className="w-full border rounded p-2">
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Luo lasku
        </button>
      </form>
    </div>
  );
}