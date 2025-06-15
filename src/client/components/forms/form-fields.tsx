"use client";
import { ObjectCard } from "@/client/components/forms/object-card";
import { useFormContext } from "@/client/hooks/useFormDataConext";
import { Card, CardContent } from "@/client/components/shadcn/card";

export function FormFields() {
  const { data } = useFormContext();

  const clonedData = JSON.parse(JSON.stringify(data)); // Deep clone to avoid mutation
  delete clonedData.id; // Remove fields from the cloned data
  delete clonedData.status; // Remove status from the cloned data
  delete clonedData.history; // Remove history from the cloned data
  const { fields = [], ...basicDetails } = clonedData;

  return (
    <Card className="w-full">
      <CardContent>
        <ObjectCard obj={{ fields, basicDetails }} title="Form Fields" />
      </CardContent>
    </Card>
  ); // Wrap fields in an object for ObjectCard
}
