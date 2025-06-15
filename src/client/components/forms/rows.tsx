"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import type { FormPartial } from "@/server/db/form/interface";
import { TableRow, TableCell } from "@/client/components/shadcn/table";

type FormsTableRowsProps = Readonly<{
  forms: FormPartial[];
}>;

export function FormsTableRows({ forms }: FormsTableRowsProps) {
  const router = useRouter();
  return (
    <>
      {forms.map((form) => (
        <TableRow
          key={form.id}
          className="cursor-pointer hover:bg-accent"
          onClick={() => router.push(`/admin/forms/edit/${form.id}`)}
        >
          <TableCell>{form.title}</TableCell>
          <TableCell>{form.description}</TableCell>
          <TableCell>{form.slug}</TableCell>
          <TableCell>{form.status}</TableCell>
        </TableRow>
      ))}
    </>
  );
}
