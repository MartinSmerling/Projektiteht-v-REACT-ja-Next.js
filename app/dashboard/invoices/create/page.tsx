import { createInvoice } from '@/lib/actions';

export default function CreateInvoicePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6">Uusi lasku</h1>
        <form action={createInvoice} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Asiakas</label>
            <input
              name="customer"
              type="text"
              required
              placeholder="Asiakkaan nimi"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Summa (€)</label>
            <input
              name="amount"
              type="number"
              step="0.01"
              required
              placeholder="0.00"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Status</label>
            <select
              name="status"
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
            Luo lasku
          </button>
        </form>
      </div>
    </div>
  );
}