import {
  getForms,
  getFormById,
  createForm,
  updateForm,
  deleteForm,
} from "@/server/queries/formQueries";
import { z } from "zod";

export const FormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  slug: z.string().min(1, "Slug is required"),
  status: z.string().min(1, "Status is required"),
});

type FormInput = Record<string, string | undefined> | FormData;
async function parseFormInput(
  input: FormInput
): Promise<Record<string, string>> {
  if (input instanceof FormData) {
    const obj: Record<string, string> = {};
    for (const [key, value] of input.entries()) {
      if (typeof value === "string") {
        obj[key] = value;
      } else if (value instanceof File) {
        obj[key] = "";
      } else {
        obj[key] = String(value ?? "");
      }
    }
    return obj;
  }
  return typeof input === "object" ? (input as Record<string, string>) : {};
}

export async function handleGetForms() {
  return await getForms();
}

export async function handleGetFormById(id: string) {
  return await getFormById(id);
}

export async function handleCreateForm(input: FormInput) {
  const data = await parseFormInput(input);
  const result = FormSchema.safeParse(data);
  if (!result.success) {
    return { error: result.error.format() };
  }
  return await createForm(result.data);
}

export async function handleUpdateForm(id: string, input: FormInput) {
  const data = await parseFormInput(input);
  const result = FormSchema.safeParse({ ...data, _id: id });
  if (!result.success) {
    return { error: result.error.format() };
  }
  return await updateForm(id, result.data);
}

export async function handleDeleteForm(id: string) {
  return await deleteForm(id);
}
