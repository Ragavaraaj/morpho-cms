import { z } from "zod";
import { FormFieldSchema } from "@/client/zod-schemas/form-field-schema";

export const FormSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional().default(""),
  status: z.string().optional().default("draft"),
  fields: z.array(FormFieldSchema).optional().default([]),
  footer: z.string().optional().default(""),
  notes: z.string().optional().default(""),
  lead_source: z.string().optional().default(""),
});

export type FormValues = z.infer<typeof FormSchema>;
