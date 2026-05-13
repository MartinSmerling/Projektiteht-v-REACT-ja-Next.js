import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">ACME Dashboard</h1>
        <p className="text-gray-400 mb-8">Hallinnoi laskujasi helposti</p>
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Kirjaudu sisään
        </Link>
      </div>
    </main>
  );
}