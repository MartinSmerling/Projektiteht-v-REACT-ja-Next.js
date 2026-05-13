'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    if (res.ok) {
      window.location.href = '/dashboard';
    } else {
      setError('Virheellinen käyttäjätunnus tai salasana');
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-2">ACME Dashboard</h1>
        <p className="text-gray-400 mb-6">Kirjaudu sisään jatkaaksesi</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Sähköposti</label>
            <input
              name="email"
              type="email"
              placeholder="sinä@esimerkki.fi"
              required
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Salasana</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {loading ? 'Kirjaudutaan...' : 'Kirjaudu sisään'}
          </button>
        </form>
      </div>
    </main>
  );
}