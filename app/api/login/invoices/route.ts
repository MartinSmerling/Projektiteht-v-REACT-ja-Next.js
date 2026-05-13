import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(
  req: Request,
  context: any
) {
  const { id } = await context.params;
  const data = await req.json();
  const invoice = await prisma.invoice.update({
    where: { id },
    data: { customer: data.customer, amount: data.amount, status: data.status },
  });
  return NextResponse.json(invoice);
}

export async function DELETE(
  _: Request,
  context: any
) {
  const { id } = await context.params;
  await prisma.invoice.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}