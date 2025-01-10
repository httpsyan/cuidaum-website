"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/ui/input";
import { ChangeEvent } from "react";
import { Control, useFormContext } from "react-hook-form";
import { normalizePhoneNumber } from "@/lib/mask";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/ui/form";
import { cn } from "../lib/utils";

interface Props {
  control: Control<any>;
  registerName: string;
  type?: string;
  textlabel?: string;
  placeholder?: string;
  maskName?: "phone";
  labelClassName?: string;
  className?: string;
}

export const InputField = ({
  registerName,
  textlabel,
  control,
  placeholder,
  type,
  labelClassName,
  maskName,
  className,
}: Omit<Props, "defaultValue">) => {
  const { setValue } = useFormContext();

  const applyMask = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (maskName === "phone") {
      setValue(name, normalizePhoneNumber(value));
      return;
    }

    setValue(name, value);
  };

  return (
    <FormField
      control={control}
      name={registerName}
      render={({ field }) => (
        <FormItem className="group space-y-0">
          {textlabel && (
            <FormLabel
              htmlFor={registerName}
              className={cn("text-strong font-medium", labelClassName)}
            >
              {textlabel}
            </FormLabel>
          )}
          <FormControl onChange={applyMask}>
            <Input
              id={registerName}
              data-mask={maskName}
              placeholder={placeholder}
              {...field}
              value={field.value || ""}
              type={type}
              autoComplete="off"
              autoCapitalize="off"
              className={cn("text-sm py-2 w-full", className)}
            />
          </FormControl>

          <FormMessage className="text-rose-400 font-normal text-xs pt-1" />
        </FormItem>
      )}
    />
  );
};
