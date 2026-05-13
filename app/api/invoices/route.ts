import { prisma } from '@/lib/prisma';
import { createSession } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  const user = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (!user || user.password !== data.password) {
    return NextResponse.json({ error: 'Virheellinen tunnus' }, { status: 401 });
  }

  await createSession(user.id);

  return NextResponse.json({ ok: true });
}