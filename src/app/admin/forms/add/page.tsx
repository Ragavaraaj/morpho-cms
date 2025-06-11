import { FormFields } from "@/client/components/forms-table/form-fields";

export default function AddForm() {
  const initializeFormData = {
    title: "",
    description: "",
    slug: "",
    status: "draft",
  };

  return (
    <FormFields
      formData={initializeFormData}
      submitLabel="Create Form"
      title="Add New Form"
      id=""
    />
  );
}
