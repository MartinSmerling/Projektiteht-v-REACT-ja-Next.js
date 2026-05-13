import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const invoices = await prisma.invoice.findMany();
  return NextResponse.json(invoices);
}

export async function POST(req: Request) {
  const data = await req.json();
  const invoice = await prisma.invoice.create({
    data: {
      customer: data.customer,
      amount: data.amount,
      status: data.status,
      userId: 'placeholder',
    },
  });
  return NextResponse.json(invoice);
}