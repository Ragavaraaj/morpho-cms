import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/client/components/shadcn/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/client/components/shadcn/table";
import type { Form } from "@/server/db/form/interface";
import { FormsTableRows } from "@/client/components/forms/rows";

type FormsTableProps = Readonly<{
  forms: Form[];
}>;

export function FormsTable({ forms }: FormsTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Forms</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <FormsTableRows forms={forms} />
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
