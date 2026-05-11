import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const data = await req.json();
  await prisma.invoice.create({ data });
  return NextResponse.json({ success: true });
}

export async function PUT(req: Request) {
  const data = await req.json();
  await prisma.invoice.update({
    where: { id: data.id },
    data,
  });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.invoice.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
