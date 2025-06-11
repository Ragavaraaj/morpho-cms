import mongoose, { Schema } from "mongoose";

export const FieldOptionSchema = new Schema({
  value: { type: String, required: true },
  label: { type: String, required: true },
  fieldId: { type: Schema.Types.ObjectId, ref: "FormField", required: true },
  created_at_db: { type: Date, default: Date.now },
  updated_at_db: { type: Date, default: Date.now },
});

export const FieldOptionModel =
  mongoose.models.FieldOption ??
  mongoose.model("FieldOption", FieldOptionSchema);
