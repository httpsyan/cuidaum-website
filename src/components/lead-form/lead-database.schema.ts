import { z } from "zod";

export const leadDatabaseSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  profile: z.string().min(1, "Perfil é obrigatório"),
});

export type LeadDatabase = z.infer<typeof leadDatabaseSchema>;
