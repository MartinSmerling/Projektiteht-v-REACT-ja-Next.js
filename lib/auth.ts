import { cookies } from 'next/headers';

export async function createSession(userId: string) {
  const cookieStore = await cookies();
  cookieStore.set('session', userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // vain tuotannossa HTTPS
    path: '/',
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  return cookieStore.get('session')?.value;
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}