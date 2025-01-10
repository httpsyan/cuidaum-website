"use client";

import { Button } from "@/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";

import { Form, FormField, FormItem } from "@/ui/form";
import { InputField } from "@/ui/input-field";
import { leadDatabaseFields } from "./index";
import { useLeadForm } from "./use-lead-form";
import { LoaderIcon } from "@/ui/loader-icon";

export function LeadForm() {
  const { form, onSubmit } = useLeadForm();

  console.log(form.formState.errors);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        {leadDatabaseFields.map((item) => (
          <InputField
            key={item.name}
            control={form.control}
            registerName={item.name}
            placeholder={item.placeholder}
            maskName={item.mask as "phone" | undefined}
            className="h-12"
          />
        ))}
        <FormField
          control={form.control}
          name="profile"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecione o seu perfil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Patient">Sou paciente</SelectItem>
                    <SelectItem value="Health Professional">
                      Sou profissional de saúde
                    </SelectItem>
                    <SelectItem value="Representative of a company">
                      Represento uma empresa
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="h-12 mt-2 bg-[#1C44F2] hover:bg-[#1C44F2]/80"
        >
          {form.formState.isSubmitting ? (
            <LoaderIcon className="w-8 h-8" />
          ) : (
            "Quero fazer parte dessa transformação"
          )}
        </Button>
      </form>
    </Form>
  );
}
