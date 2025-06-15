import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/client/components/shadcn/form";
import { Textarea } from "@/client/components/shadcn/textarea";
import { FormValues } from "@/client/zod-schemas/form-schema";
import { UseFormReturn } from "react-hook-form";

type FieldTextareaProps = {
  form: UseFormReturn<FormValues>;
  label: string;
  name: keyof FormValues;
  description?: string;
  placeholder?: string;
  value?: string;
};

export function FieldTextarea({
  label,
  description,
  placeholder,
  name,
  form,
  value,
}: Readonly<FieldTextareaProps>) {
  return (
    <FormField
      control={form.control}
      name={name}
      defaultValue={value ?? ""}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="resize-none"
              {...field}
              value={String(field.value || "")} // Ensure value is always a string
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
export { Textarea };
