import { FormFieldSchema } from "@/client/zod-schemas/form-field-schema";
import {
  getFormFields,
  getFormFieldById,
  createFormField,
  updateFormField,
  deleteFormField,
} from "@/server/queries/formFieldsQueries";
import { z } from "zod";

export type FormFieldInput = z.infer<typeof FormFieldSchema>;

function isFormData(input: unknown): input is FormData {
  return typeof FormData !== "undefined" && input instanceof FormData;
}

function formDataToObject(input: FormData): Record<string, unknown> {
  const obj: Record<string, unknown> = {};
  for (const [key, value] of input.entries()) {
    obj[key] = typeof value === "string" ? value : String(value ?? "");
  }
  // Convert boolean and number fields
  if ("required" in obj) obj.required = obj.required === "true";
  if ("status" in obj) obj.status = obj.status === "true";
  if ("max_length" in obj && obj.max_length !== undefined)
    obj.max_length = Number(obj.max_length);
  if ("selectable_date" in obj && obj.selectable_date !== undefined)
    obj.selectable_date = Number(obj.selectable_date);
  return obj;
}

async function parseFormFieldInput(
  input: FormFieldInput | FormData
): Promise<FormFieldInput> {
  if (isFormData(input)) {
    const obj = formDataToObject(input);
    return obj as FormFieldInput;
  }
  return input;
}

export async function handleGetFormFields(formId: string) {
  return await getFormFields(formId);
}

export async function handleGetFormFieldById(id: string) {
  return await getFormFieldById(id);
}

export async function handleCreateFormField(input: FormFieldInput | FormData) {
  const data = await parseFormFieldInput(input);
  const result = FormFieldSchema.safeParse(data);
  if (!result.success) {
    return { error: result.error.format() };
  }

  // Add created_at_db and updated_at_db to each error_message
  const now = new Date();
  const error_messages =
    result.data.error_messages?.map((err) => ({
      ...err,
      created_at_db: now,
      updated_at_db: now,
    })) ?? [];

  // Add created_at_db and updated_at_db to each option
  const options =
    result.data.options?.map((opt) => ({
      ...opt,
      created_at_db: now,
      updated_at_db: now,
    })) ?? [];

  return await createFormField({
    ...result.data,
    error_messages,
    options,
  });
}

export async function handleUpdateFormField(
  id: string,
  input: FormFieldInput | FormData
) {
  const data = await parseFormFieldInput(input);
  const result = FormFieldSchema.safeParse(data);
  if (!result.success) {
    return { error: result.error.format() };
  }

  // Add created_at_db and updated_at_db to each error_message if missing
  const now = new Date();
  const error_messages =
    result.data.error_messages?.map((err) => ({
      ...err,
      created_at_db: now,
      updated_at_db: now,
    })) ?? [];

  // Add created_at_db and updated_at_db to each option if missing
  const options =
    result.data.options?.map((opt) => ({
      ...opt,
      created_at_db: now,
      updated_at_db: now,
    })) ?? [];

  return await updateFormField(id, {
    ...result.data,
    error_messages,
    options,
  });
}

export async function handleDeleteFormField(id: string) {
  return await deleteFormField(id);
}
