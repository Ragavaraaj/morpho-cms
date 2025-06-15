import { FormSchema } from "@/client/zod-schemas/form-schema";
import {
  getForms,
  getFormById,
  createForm,
  updateForm,
  deleteForm,
} from "@/server/queries/formQueries";

type FormInput = Record<string, string | undefined>;

export async function handleGetForms() {
  return await getForms();
}

export async function handleGetFormById(id: string) {
  return await getFormById(id);
}

export async function handleCreateForm(input: FormInput) {
  console.log("handleCreateForm", JSON.stringify(input, null, 2));
  const result = FormSchema.safeParse(input);
  if (!result.success) {
    return { error: result.error.format() };
  }
  return await createForm(result.data);
}

export async function handleUpdateForm(id: string, input: FormInput) {
  console.log("handleUpdateForm", JSON.stringify(input, null, 2));
  const result = FormSchema.safeParse({ ...input, id });
  if (!result.success) {
    return { error: result.error.format() };
  }

  return await updateForm(id, result.data);
}

export async function handleDeleteForm(id: string) {
  return await deleteForm(id);
}
