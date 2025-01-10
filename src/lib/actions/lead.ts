"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type LeadFormData = {
  name: string;
  email: string;
  phone: string;
  profile: string;
};

export async function createLead(data: LeadFormData) {
  const formattedPhone = data.phone.replace(/[()\-\s]/g, "");

  const [emailExists, phoneExists] = await Promise.all([
    prisma.lead.findFirst({ where: { email: data.email } }),
    prisma.lead.findFirst({ where: { phone: formattedPhone } }),
  ]);

  if (emailExists) {
    throw new Error("E-mail já cadastrado");
  }

  if (phoneExists) {
    throw new Error("Número de celular já cadastrado");
  }

  const lead = await prisma.lead.create({
    data: {
      ...data,
      phone: formattedPhone,
    },
  });

  revalidatePath("/");
  return { success: true, data: lead };
}

export async function updateLead(id: string, data: LeadFormData) {
  const lead = await prisma.lead.update({
    where: { id },
    data,
  });

  revalidatePath("/");
  return { success: true, data: lead };
}

export async function deleteLead(id: string) {
  await prisma.lead.delete({
    where: { id },
  });

  revalidatePath("/");
  return { success: true };
}
