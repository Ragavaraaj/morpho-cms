import { z } from "zod";
import { FormFieldSchema } from "@/client/zod-schemas/form-field-schema";

export const FormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  slug: z.string().min(1, "Slug is required"),
  status: z.string().min(1, "Status is required"),
  fields: z.array(FormFieldSchema),
});

export type FormValues = z.infer<typeof FormSchema>;
