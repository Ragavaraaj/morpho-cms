import { FieldInput } from "@/client/components/forms/fields/input";
import { FieldTextarea } from "@/client/components/forms/fields/textarea";
import { FieldSwitch } from "@/client/components/forms/fields/switch";
import { FieldSelect } from "@/client/components/forms/fields/select";
import { useFormContext } from "@/client/hooks/useFormDataConext";
import { FormValues } from "@/client/zod-schemas/form-schema";

type FieldRendererProps = {
  keyName: string;
  path: string;
  value: string | boolean | number | undefined; // Optional value prop to handle different field types
};

export function FieldSelector({
  keyName,
  path,
  value,
}: Readonly<FieldRendererProps>) {
  const { form } = useFormContext();
  const commonProps = {
    form,
    name: `${path}.${keyName}` as keyof FormValues,
    label: keyName.charAt(0).toUpperCase() + keyName.slice(1),
  };

  if (["notes"].includes(keyName)) {
    return (
      <FieldTextarea
        {...commonProps}
        value={value as string | undefined} // Ensure value is a string or undefined
        placeholder={`Enter ${keyName}`}
      />
    );
  }

  if (["status", "required"].includes(keyName)) {
    return (
      <FieldSwitch {...commonProps} value={value as boolean | undefined} />
    );
  }

  if (["type"].includes(keyName)) {
    return (
      <FieldSelect
        {...commonProps}
        placeholder={`Select ${keyName}`}
        value={value as string | undefined}
        options={[
          { value: "select", label: "Select" },
          { value: "multiple-select", label: "Multiple Select" },
          { value: "text", label: "Text" },
          { value: "textarea", label: "Textarea" },
          { value: "zip-code", label: "Zip Code" },
        ]}
      />
    );
  }

  return (
    <FieldInput
      {...commonProps}
      placeholder={`Enter ${keyName}`}
      value={value as string | undefined} // Ensure value is a string or undefined
    />
  );
}
