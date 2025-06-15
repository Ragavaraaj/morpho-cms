import { FormField } from "@/server/db/formField/interface";
import { FormHistory } from "@/server/db/formHistory/interface";

export interface FormPartial {
  id: string;
  title: string;
  description?: string;
  slug: string;
  status: string;
}

export interface Form extends FormPartial {
  fields: FormField[];
  history: FormHistory[];
}
