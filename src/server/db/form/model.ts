import { PUBLISHED_STATUS } from "@/server/db/enum";
import { Schema, model, models } from "mongoose";
import type { Form } from "@/server/db/form/interface";
import { FormFieldSchema } from "@/server/db/formField/model";

const FormSchema = new Schema({
  publish_status: {
    type: String,
    enum: Object.values(PUBLISHED_STATUS),
    default: PUBLISHED_STATUS.DRAFT,
  },
  title: { type: String, required: true },
  description: { type: String },
  footer: { type: String },
  notes: { type: String },
  lead_source: { type: String },
  slug: { type: String, required: true, unique: true },
  created_at_db: { type: Date, default: Date.now },
  updated_at_db: { type: Date, default: Date.now },
  fields: [FormFieldSchema],
});

export const FormModel = models.Form<Form> ?? model<Form>("Form", FormSchema);
