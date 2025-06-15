import { FormValues } from "@/client/zod-schemas/form-schema";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/client/components/shadcn/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/client/components/shadcn/select";

type FieldSelectProps = {
  form: UseFormReturn<FormValues>;
  label: string;
  name: keyof FormValues;
  description?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  value?: string;
};

export function FieldSelect({
  form,
  label,
  name,
  description,
  placeholder,
  options = [],
  value,
}: Readonly<FieldSelectProps>) {
  return (
    <FormField
      control={form.control}
      name={name}
      defaultValue={value ?? ""}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
export { Select };
