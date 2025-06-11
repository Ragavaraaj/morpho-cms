import mongoose, { Schema } from "mongoose";
import { FieldErrorType } from "@/server/db/enum";

export const FieldErrorSchema = new Schema({
  type: { type: String, enum: Object.values(FieldErrorType), required: true },
  fieldId: { type: Schema.Types.ObjectId, ref: "FormField", required: true },
  message: { type: String, required: true },
  created_at_db: { type: Date, default: Date.now },
  updated_at_db: { type: Date, default: Date.now },
});

export const FieldErrorModel =
  mongoose.models.FieldError ?? mongoose.model("FieldError", FieldErrorSchema);
