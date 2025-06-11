import type { FieldError } from "@/server/db/fieldError/interface";
import type { FieldOption } from "@/server/db/fieldOption/interface";

export interface FormField {
  _id: string;
  status: boolean;
  formId: string; // ObjectId as string
  label: string;
  type: string; // Should match FieldType enum
  required: boolean;
  placeholder?: string;
  description?: string;
  max_length?: number;
  selectable_date?: number;
  error_messages: FieldError[];
  options: FieldOption[];
  created_at_db: Date;
  updated_at_db: Date;
}
