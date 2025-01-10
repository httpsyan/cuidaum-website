"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type UserFormData = {
  name: string;
  email: string;
  phone: string;
  profile: string;
};

export async function createUser(data: UserFormData) {
  try {
    const user = await prisma.leadDatabase.create({
      data,
    });
    revalidatePath("/");
    return { success: true, data: user };
  } catch {
    return { success: false, error: "Failed to create user" };
  }
}

export async function updateUser(id: string, data: UserFormData) {
  try {
    const user = await prisma.leadDatabase.update({
      where: { id },
      data,
    });
    revalidatePath("/");
    return { success: true, data: user };
  } catch {
    return { success: false, error: "Failed to update user" };
  }
}

export async function deleteUser(id: string) {
  try {
    await prisma.leadDatabase.delete({
      where: { id },
    });
    revalidatePath("/");
    return { success: true };
  } catch {
    return { success: false, error: "Failed to delete user" };
  }
}
