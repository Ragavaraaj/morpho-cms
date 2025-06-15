import mongoose, { Schema } from "mongoose";
import { FieldErrorSchema } from "@/server/db/fieldError/model";
import { FieldOptionSchema } from "@/server/db/fieldOption/model";
import { FieldType } from "@/server/db/enum";

export const FormFieldSchema = new Schema({
  status: { type: Boolean, default: true },
  label: { type: String, required: true },
  type: { type: String, enum: Object.values(FieldType), required: true },
  required: { type: Boolean, default: false },
  placeholder: { type: String },
  description: { type: String },
  max_length: { type: Number },
  selectable_date: { type: Number },
  error_messages: [FieldErrorSchema],
  options: [FieldOptionSchema],
  created_at_db: { type: Date, default: Date.now },
  updated_at_db: { type: Date, default: Date.now },
});

export const FormFieldModel =
  mongoose.models.FormField ?? mongoose.model("FormField", FormFieldSchema);
