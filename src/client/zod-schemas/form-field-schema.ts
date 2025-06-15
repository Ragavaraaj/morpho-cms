import { z } from "zod";

export const FormFieldSchema = z.object({
  status: z.boolean().default(true),
  label: z.string().min(1, "Label is required"),
  type: z.string().min(1, "Type is required"),
  required: z.boolean().default(false),
  placeholder: z.string().optional().default(""),
  description: z.string().optional().default(""),
  max_length: z.number().int().optional().default(-1),
  selectable_date: z.number().int().optional().default(-1),
  error_messages: z
    .array(
      z.object({
        type: z.string().min(1),
        message: z.string().min(1),
      })
    )
    .default([]),
  options: z
    .array(
      z.object({
        value: z.string().min(1),
        label: z.string().min(1),
      })
    )
    .default([]),
});

export type FormFieldValues = z.infer<typeof FormFieldSchema>;
