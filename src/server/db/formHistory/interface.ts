import { Types } from "mongoose";

export interface FormHistory {
  id: Types.ObjectId;
  action: string; // e.g. 'created', 'updated', 'deleted'
  data?: Record<string, unknown>;
  user?: string;
}
