import { NextRequest, NextResponse } from "next/server";
import {
  handleGetFormById,
  handleUpdateForm,
  handleDeleteForm,
} from "@/server/actions/formAction";

// GET /api/forms/[id] - get form by id
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const form = await handleGetFormById(params.id);
  if (!form) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(form);
}

// PUT /api/forms/[id] - update form by id
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const result = await handleUpdateForm(params.id, data);
  if (!result) {
    return NextResponse.json({ error: "Update failed" }, { status: 400 });
  }
  if ("error" in result) {
    return NextResponse.json(result, { status: 400 });
  }
  return NextResponse.json(result);
}

// DELETE /api/forms/[id] - delete form by id
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const ok = await handleDeleteForm(params.id);
  if (!ok) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
