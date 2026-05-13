import { NextResponse } from 'next/server';
import { getPrisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const prisma = getPrisma();
  const data = await req.json();
  // ...
}
