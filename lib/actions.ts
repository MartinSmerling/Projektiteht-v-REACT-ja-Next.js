'use server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createInvoice(formData: FormData) {
  const cookieStore = await cookies();
  const userId = cookieStore.get('session')?.value;
  console.log('userId:', userId);
  if (!userId) redirect('/login');

  const customer = formData.get('customer') as string;
  const amount = parseFloat(formData.get('amount') as string);
  const status = formData.get('status') as string;

  await prisma.invoice.create({
    data: { customer, amount, status, userId },
  });
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const cookieStore = await cookies();
  const userId = cookieStore.get('session')?.value;
  if (!userId) redirect('/login');

  const customer = formData.get('customer') as string;
  const amount = Math.round(parseFloat(formData.get('amount') as string));
  const status = formData.get('status') as string;

  await prisma.invoice.update({
    where: { id },
    data: { customer, amount, status, userId },
  });
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  const cookieStore = await cookies();
  const userId = cookieStore.get('session')?.value;
  if (!userId) redirect('/login');
  await prisma.invoice.delete({ where: { id } });
  revalidatePath('/dashboard/invoices');
}