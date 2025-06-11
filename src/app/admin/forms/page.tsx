import DashboardTable from "@/client/components/forms-table";
import { handleGetForms } from "@/server/actions/formAction";

export default async function AdminForms() {
  // Fetch posts directly from the database
  const postsWithStringId = await handleGetForms();
  return <DashboardTable posts={postsWithStringId} />;
}
