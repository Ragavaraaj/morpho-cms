import { createContext, useContext } from "react";
import { FormValues } from "../zod-schemas/form-schema";
import { UseFormReturn } from "react-hook-form";

export const FormDataContext = createContext<{
  onSubmit: ((data: FormValues) => Promise<void>) | undefined;
  data: FormValues;
  form: UseFormReturn<FormValues>;
}>({
  data: {
    title: "",
    slug: "",
    status: "",
    description: "",
    fields: [],
    footer: "",
    notes: "",
    lead_source: "",
  },
  form: {} as UseFormReturn<FormValues>,
  onSubmit: undefined,
});

export function useFormContext() {
  return useContext(FormDataContext);
}
