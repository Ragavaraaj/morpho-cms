import { FieldInput } from "@/client/components/forms/fields/input";
import { FieldTextarea } from "@/client/components/forms/fields/textarea";
import { FieldSwitch } from "@/client/components/forms/fields/switch";
import { FieldSelect } from "@/client/components/forms/fields/select";
import { useFormContext } from "@/client/hooks/useFormDataContext";
import { FormValues } from "@/client/zod-schemas/form-schema";

type FieldRendererProps = {
  name: string;
  parentPath: string;
  value: string | boolean | number | undefined; // Optional value prop to handle different field types
};

export function FieldSelector({
  name,
  parentPath,
  value,
}: Readonly<FieldRendererProps>) {
  const { form } = useFormContext();
  const commonProps = {
    form,
    name: `${parentPath}.${name}` as keyof FormValues,
    label: name?.charAt(0).toUpperCase() + name?.slice(1),
  };

  if (["notes", "footer"].includes(name)) {
    return (
      <FieldTextarea
        {...commonProps}
        value={value as string | undefined} // Ensure value is a string or undefined
        placeholder={`Enter ${name} Name`}
      />
    );
  }

  if (["status", "required"].includes(name)) {
    return (
      <FieldSwitch {...commonProps} value={value as boolean | undefined} />
    );
  }

  if (["type"].includes(name)) {
    return (
      <FieldSelect
        {...commonProps}
        placeholder={`Select ${name}`}
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
      placeholder={`Enter ${name} Name`}
      value={value as string | undefined} // Ensure value is a string or undefined
    />
  );
}
