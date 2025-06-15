import mongoose, { Schema } from "mongoose";

export const FormHistorySchema = new Schema({
  formId: { type: Schema.Types.ObjectId, ref: "Form", required: true },
  action: { type: String, required: true }, // e.g. 'created', 'updated', 'deleted'
  data: { type: Schema.Types.Mixed }, // snapshot of form data or diff
  user: { type: String }, // user who performed the action (optional)
  created_at_db: { type: Date, default: Date.now },
});

export const FormHistoryModel =
  mongoose.models.FormHistory ??
  mongoose.model("FormHistory", FormHistorySchema);
