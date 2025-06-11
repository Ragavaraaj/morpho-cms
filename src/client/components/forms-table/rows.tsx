"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import type { Form } from "@/server/db/form/interface";
import { TableRow, TableCell } from "@/client/components/shadcn/table";

export function FormsTableRows({ forms }: { forms: Form[] }) {
  const router = useRouter();
  return (
    <>
      {forms.map((form) => (
        <TableRow
          key={form._id}
          className="cursor-pointer hover:bg-accent"
          onClick={() => router.push(`/admin/forms/edit/${form._id}`)}
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
