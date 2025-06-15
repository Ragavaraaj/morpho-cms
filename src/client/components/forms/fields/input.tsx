import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/client/components/shadcn/form";
import { Input } from "@/client/components/shadcn/input";
import { FormValues } from "@/client/zod-schemas/form-schema";
import { UseFormReturn } from "react-hook-form";

type FieldInputProps = {
  form: UseFormReturn<FormValues>;
  label: string;
  name: keyof FormValues;
  description?: string;
  placeholder?: string;
  value?: string;
};

export function FieldInput({
  form,
  label,
  description,
  placeholder,
  name,
  value,
}: Readonly<FieldInputProps>) {
  return (
    <FormField
      name={name}
      defaultValue={value ?? ""}
      control={form?.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          {description && <FormDescription>{description}</FormDescription>}
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              value={String(field.value || "")}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
export { Input };
