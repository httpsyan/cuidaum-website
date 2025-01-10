"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type LeadFormData = {
  name: string;
  email: string;
  phone: string;
  profile: string;
};

type ActionResult<T = unknown> = {
  success: boolean;
  message?: string;
  data?: T;
};

export async function createLead(data: LeadFormData): Promise<ActionResult> {
  const formattedPhone = data.phone.replace(/[()\-\s]/g, "");

  const [emailExists, phoneExists] = await Promise.all([
    prisma.lead.findFirst({ where: { email: data.email } }),
    prisma.lead.findFirst({ where: { phone: formattedPhone } }),
  ]);

  if (emailExists) {
    return {
      success: false,
      message: "E-mail já cadastrado"
    };
  }

  if (phoneExists) {
    return {
      success: false,
      message: "Número de celular já cadastrado"
    };
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
