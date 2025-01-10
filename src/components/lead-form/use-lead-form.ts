/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { LeadDatabase, leadDatabaseSchema } from "./index";
import { createLead } from "@/lib/actions/lead";
import { toast } from "sonner";

export const useLeadForm = () => {
  const form = useForm<LeadDatabase>({
    resolver: zodResolver(leadDatabaseSchema),
  });

  const onSubmit: SubmitHandler<LeadDatabase> = async (data) => {
    const result = await createLead(data);

    if (result.success) {
      toast.success("Recebemos suas informações!", {
        description: "Em breve entraremos em contato com você.",
      });
      form.reset();
    } else {
      toast.error("Não foi possível prosseguir!", {
        description: result.message || "Por favor, verifique as informações e tente novamente.",
      });
    }
  };

  return {
    form,
    onSubmit,
  };
};
