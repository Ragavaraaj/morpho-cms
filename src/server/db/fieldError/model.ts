import mongoose, { Schema } from "mongoose";
import { FieldErrorType } from "@/server/db/enum";

export const FieldErrorSchema = new Schema({
  type: { type: String, enum: Object.values(FieldErrorType), required: true },
  message: { type: String, required: true },
  created_at_db: { type: Date, default: Date.now, required: false },
  updated_at_db: { type: Date, default: Date.now, required: false },
});

export const FieldErrorModel =
  mongoose.models.FieldError ?? mongoose.model("FieldError", FieldErrorSchema);
