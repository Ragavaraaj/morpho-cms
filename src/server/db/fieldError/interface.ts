export interface FieldError {
  id: string;
  type: string; // Should match FieldErrorType enum
  message: string;
  created_at_db: Date;
  updated_at_db: Date;
}
