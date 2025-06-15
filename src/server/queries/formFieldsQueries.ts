import dbConnect from "@/server/lib/mongodb";
import { FormFieldModel } from "@/server/db/formField/model";
import type { FormField } from "@/server/db/formField/interface";
import type { FieldError } from "@/server/db/fieldError/interface";
import type { FieldOption } from "@/server/db/fieldOption/interface";
import {
  $full_project,
  $lookups,
  $partial_project,
} from "@/server/db/formField/args";
import { Types } from "mongoose";

export interface FormFieldWithExtras
  extends Omit<FormField, "error_messages" | "options" | "formId"> {
  formId: string;
  error_messages: FieldError[];
  options: FieldOption[];
}

export const getFormFields = async (
  formId: string
): Promise<FormFieldWithExtras[]> => {
  await dbConnect();
  const fields = await FormFieldModel.aggregate([
    { $match: { formId: new Types.ObjectId(formId) } },
    ...$lookups,
    $full_project,
  ]);
  return fields;
};

export const getFormFieldById = async (
  id: string
): Promise<FormFieldWithExtras | null> => {
  await dbConnect();
  if (!Types.ObjectId.isValid(id)) return null;
  const results = await FormFieldModel.aggregate([
    { $match: { _id: new Types.ObjectId(id) } },
    ...$lookups,
    $full_project,
    { $limit: 1 },
  ]);
  if (!results?.[0]) return null;
  return results[0];
};

export const createFormField = async (
  data: Omit<FormField, "id">
): Promise<string> => {
  console.log("Creating form field with data:", data);
  await dbConnect();
  const created = await FormFieldModel.create(data, {
    projection: $partial_project,
  });
  if (!created?.[0]?.id) {
    throw new Error("Failed to create form field");
  }
  return created?.[0]?.id?.toString() ?? "";
};

export const updateFormField = async (
  id: string,
  data: Partial<Omit<FormField, "id">>
): Promise<string> => {
  console.log("Updating form field with id:", id, "and data:", data);
  await dbConnect();
  if (!Types.ObjectId.isValid(id)) return "";
  const updated = await FormFieldModel.findByIdAndUpdate(id, data, {
    new: true,
    projection: $partial_project,
  });
  if (!updated) {
    throw new Error("Failed to update form field");
  }
  return updated?.[0]?.id?.toString() ?? "";
};

export const deleteFormField = async (id: string): Promise<boolean> => {
  await dbConnect();
  if (!Types.ObjectId.isValid(id)) return false;
  const res = await FormFieldModel.findByIdAndDelete(id);
  return !!res;
};
