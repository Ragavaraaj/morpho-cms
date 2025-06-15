import mongoose, { Schema } from "mongoose";

export const FieldOptionSchema = new Schema({
  value: { type: String, required: true },
  label: { type: String, required: true },
  fieldId: { type: Schema.Types.ObjectId, ref: "FormField", required: true },
  created_at_db: { type: Date, default: Date.now, required: false },
  updated_at_db: { type: Date, default: Date.now, required: false },
});

export const FieldOptionModel =
  mongoose.models.FieldOption ??
  mongoose.model("FieldOption", FieldOptionSchema);
