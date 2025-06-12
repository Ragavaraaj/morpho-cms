import { FormFields } from "@/client/components/forms-table/fields";
import { handleGetFormById } from "@/server/actions/formAction";

export default async function EditForm({
  params,
}: Readonly<{ params: Promise<{ id: string }> }>) {
  const actualParams = await params;
  const formData = await handleGetFormById(actualParams.id);

  const defaultFormData = {
    title: "",
    slug: "",
    status: "",
    description: "",
  };

  return (
    <FormFields
      formData={formData ?? defaultFormData}
      id={actualParams.id}
      submitLabel="Update Form"
      title="Edit Form"
    />
  );
}
