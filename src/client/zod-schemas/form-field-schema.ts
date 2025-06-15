import { z } from "zod";

export const FormFieldSchema = z.object({
  status: z.boolean(),
  label: z.string().min(1, "Label is required"),
  type: z.string().min(1, "Type is required"),
  required: z.boolean(),
  placeholder: z.string().optional(),
  description: z.string().optional(),
  max_length: z.number().int().positive().optional(),
  selectable_date: z.number().int().optional(),
  error_messages: z.array(
    z.object({
      type: z.string().min(1),
      message: z.string().min(1),
    })
  ),
  options: z.array(
    z.object({
      value: z.string().min(1),
      label: z.string().min(1),
    })
  ),
});

export type FormFieldValues = z.infer<typeof FormFieldSchema>;
