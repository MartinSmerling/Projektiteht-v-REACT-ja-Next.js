import { cookies } from 'next/headers';

export async function createSession(userId: string) {
  const cookieStore = await cookies();
  cookieStore.set('session', userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');
  return session?.value ?? null;
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}