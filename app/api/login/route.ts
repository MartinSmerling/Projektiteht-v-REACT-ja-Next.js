import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  
  const user = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (!user || user.password !== data.password) {
    return NextResponse.json({ error: 'Virheellinen tunnus' }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}