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
    <form action={login} className="flex flex-col gap-4 max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">Kirjaudu sisään</h1>
      <input name="email" type="email" placeholder="Email" required className="border p-2 rounded" />
      <input name="password" type="password" placeholder="Salasana" required className="border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Kirjaudu</button>
    </form>
  );
}