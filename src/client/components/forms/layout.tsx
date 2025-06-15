"use client";
import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Form } from "@/client/components/shadcn/form";
import { FormSideBar } from "@/client/components/forms/side-bar";
import {
  handleCreateForm,
  handleUpdateForm,
} from "@/server/actions/formAction";
import { FormSchema, FormValues } from "../../zod-schemas/form-schema";
import { FormDataContext } from "@/client/hooks/useFormDataConext";

export function ClientFormLayout({
  formData,
  children,
  formId,
}: Readonly<{
  children: React.ReactNode;
  formId: string;
  formData: FormValues | null;
}>) {
  const router = useRouter();
  const form = useForm<FormValues>({
    defaultValues: {
      title: formData?.title ?? "",
      description: formData?.description ?? "",
      slug: formData?.slug ?? "",
      status: formData?.status ?? "draft",
      fields: formData?.fields ?? [],
    },
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = useCallback(
    async (data: FormValues) => {
      const payload = {
        ...data,
        fields: data.fields,
      };
      const result = await (formId
        ? handleUpdateForm(formId, payload)
        : handleCreateForm(payload));
      if (!result) {
        alert("Failed to update form");
      } else {
        router.push("/admin/forms");
      }
    },
    [formId, router]
  );

  const contextValue = useMemo(
    () => ({
      data: formData ?? {
        title: "",
        description: "",
        slug: "",
        status: "draft",
        fields: [],
      },
      form,
      onSubmit,
    }),
    [formData, form, onSubmit]
  );

  return (
    <FormDataContext.Provider value={contextValue}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-8">
            {children}
            <FormSideBar />
          </div>
        </form>
      </Form>
    </FormDataContext.Provider>
  );
}
