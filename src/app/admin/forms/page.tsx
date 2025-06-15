import { FormsTable } from "@/client/components/forms/table";
import { handleGetForms } from "@/server/actions/formAction";

export default async function AdminForms() {
  const postsWithStringId = await handleGetForms();
  return <FormsTable forms={postsWithStringId} />;
}
