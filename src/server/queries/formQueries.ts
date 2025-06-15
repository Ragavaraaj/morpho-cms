"use server";
import dbConnect from "@/server/lib/mongodb";
import { FormModel } from "@/server/db/form/model";
import type { Form } from "@/server/db/form/interface";
import {
  $full_project,
  $lookups,
  $partial_project,
} from "@/server/db/form/args";
import { Types } from "mongoose";

export const getForms = async (): Promise<Form[]> => {
  await dbConnect();
  const forms = await FormModel.aggregate([{ $match: {} }, $partial_project]);
  return forms;
};

export const getFormById = async (id: string): Promise<Form | null> => {
  await dbConnect();
  if (!Types.ObjectId.isValid(id)) return null;
  const form = await FormModel.aggregate([
    { $match: { _id: new Types.ObjectId(id) } },
    ...$lookups,
    $full_project,
    { $limit: 1 },
  ]);
  if (!form?.[0]) return null;
  return form[0];
};

export const createForm = async (
  data: Omit<Form, "id" | "history">
): Promise<string> => {
  await dbConnect();
  const created = await FormModel.create(data);
  if (!created?.id) {
    throw new Error("Failed to create form");
  }
  return created.id.toString();
};

export const updateForm = async (
  id: string,
  data: Partial<Omit<Form, "id" | "history">>
): Promise<string> => {
  await dbConnect();
  if (!Types.ObjectId.isValid(id)) return "";
  const updated = await FormModel.findByIdAndUpdate(id, data, {
    new: true,
    $setFields: data.fields,
  });
  if (!updated) {
    throw new Error("Failed to update form");
  }
  return updated.id.toString();
};

export const deleteForm = async (id: string): Promise<boolean> => {
  await dbConnect();
  if (!Types.ObjectId.isValid(id)) return false;
  const res = await FormModel.findByIdAndDelete(id);
  return !!res;
};
