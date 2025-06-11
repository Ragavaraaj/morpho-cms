export interface FieldOption {
  _id: string;
  value: string;
  label: string;
  fieldId: string; // ObjectId as string
  created_at_db: Date;
  updated_at_db: Date;
}
