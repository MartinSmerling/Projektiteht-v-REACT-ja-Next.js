import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const invoices = await prisma.invoice.findMany();
  return NextResponse.json(invoices);
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const data = await req.json();
  const invoice = await prisma.invoice.create({
    data: {
      customer: data.customer,
      amount: data.amount,
      status: data.status,
      userId: session,
    },
  });
  return NextResponse.json(invoice);
}