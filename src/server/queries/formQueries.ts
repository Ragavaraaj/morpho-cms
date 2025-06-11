"use server";
import dbConnect from "@/server/lib/mongodb";
import { FormModel } from "@/server/db/form/model";
import type { Form } from "@/server/db/form/interface";
import { Types } from "mongoose";

export const getForms = async (): Promise<Form[]> => {
  await dbConnect();
  const forms = await FormModel.find({}, { fields: 0 }).lean();
  return forms.map((form) => ({
    _id: form._id?.toString() ?? "",
    title: form.title ?? "",
    description: form.description ?? "",
    slug: form.slug ?? "",
    status: form.status ?? "",
  }));
};

export const getFormById = async (id: string): Promise<Form | null> => {
  await dbConnect();
  if (!Types.ObjectId.isValid(id)) return null;
  const form = await FormModel.findById(id);
  if (!form) return null;
  return {
    _id: form._id?.toString() ?? "",
    title: form.title ?? "",
    description: form.description ?? "",
    slug: form.slug ?? "",
    status: form.status ?? "",
  };
};

export const createForm = async (data: Omit<Form, "_id">): Promise<Form> => {
  await dbConnect();
  const created = await FormModel.create(data);
  return {
    _id: created._id.toString(),
    title: created.title,
    description: created.description,
    slug: created.slug,
    status: created.status,
  };
};

export const updateForm = async (
  id: string,
  data: Partial<Omit<Form, "_id">>
): Promise<Form | null> => {
  await dbConnect();
  if (!Types.ObjectId.isValid(id)) return null;
  const updated = await FormModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updated) return null;
  return {
    _id: updated._id?.toString() ?? "",
    title: updated.title ?? "",
    description: updated.description ?? "",
    slug: updated.slug ?? "",
    status: updated.status ?? "",
  };
};

export const deleteForm = async (id: string): Promise<boolean> => {
  await dbConnect();
  if (!Types.ObjectId.isValid(id)) return false;
  const res = await FormModel.findByIdAndDelete(id);
  return !!res;
};
