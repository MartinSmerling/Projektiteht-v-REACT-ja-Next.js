import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();
  const invoice = await prisma.invoice.update({
    where: { id: params.id },
    data: { customer: data.customer, amount: data.amount, status: data.status },
  });
  return NextResponse.json(invoice);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.invoice.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}