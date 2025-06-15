import { ClientFormLayout } from "@/client/components/forms/layout";
import { handleGetFormById } from "@/server/actions/formAction";

type FormLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug?: string }>;
}>;

export default async function FormLayout({
  children,
  params,
}: FormLayoutProps) {
  const actualParams = await params;
  const formData = await handleGetFormById(actualParams.slug?.[1] ?? "");
  console.log(formData);
  return (
    <ClientFormLayout formData={formData} formId={actualParams.slug?.[1] ?? ""}>
      {children}
    </ClientFormLayout>
  );
}
