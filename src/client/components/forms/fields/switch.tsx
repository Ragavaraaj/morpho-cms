import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/client/components/shadcn/form";
import { FormValues } from "@/client/zod-schemas/form-schema";
import { UseFormReturn } from "react-hook-form";
import { Switch } from "@radix-ui/react-switch";

type FieldSwitchProps = {
  name: keyof FormValues; // Optional name prop for compatibility
  form: UseFormReturn<FormValues>;
  label: string;
  description?: string;
  value?: boolean;
};

export function FieldSwitch({
  name,
  form,
  label,
  description,
}: Readonly<FieldSwitchProps>) {
  return (
    <FormField
      control={form.control}
      name={name}
      defaultValue={"false"} // Default value for the switch
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <div className="space-y-1 pr-2">
            <FormLabel>{label}</FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          <FormControl>
            <Switch
              checked={Boolean(field.value)}
              onCheckedChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
