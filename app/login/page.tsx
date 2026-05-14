import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { createSession } from '@/lib/auth';

async function login(formData: FormData) {
  'use server';
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || user.password !== password) {
    return;
  }
  await createSession(user.id);
  redirect('/dashboard');
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <form action={login} className="flex flex-col gap-4 w-full max-w-sm p-8 bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-2">Kirjaudu sisään</h1>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="border border-gray-600 bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          name="password"
          type="password"
          placeholder="Salasana"
          required
          className="border border-gray-600 bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold transition"
        >
          Kirjaudu
        </button>
      </form>
    </div>
  );
}