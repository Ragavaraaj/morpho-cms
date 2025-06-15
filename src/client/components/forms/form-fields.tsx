"use client";
import { TraverseRender } from "@/client/components/forms/traverse-render";
import { useFormContext } from "@/client/hooks/useFormDataContext";

export function FormFields() {
  const { data } = useFormContext();

  const clonedData = JSON.parse(JSON.stringify(data)); // Deep clone to avoid mutation
  delete clonedData.id; // Remove fields from the cloned data
  delete clonedData.status; // Remove status from the cloned data
  delete clonedData.history; // Remove history from the cloned data
  const { fields = [], ...basicDetails } = clonedData;

  return (
    <div className="w-full flex flex-col gap-4">
      <TraverseRender obj={basicDetails} title="Basic Details" />
      <TraverseRender obj={fields} title="Fields" />
    </div>
  );
}
