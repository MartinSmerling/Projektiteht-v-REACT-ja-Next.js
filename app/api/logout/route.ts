import { destroySession } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  await destroySession();
  const url = new URL('/', req.url);
  return NextResponse.redirect(url);
}