import { NextRequest, NextResponse } from "next/server";
import { handleGetForms, handleCreateForm } from "@/server/actions/formAction";

// GET /api/forms - get all forms
export async function GET() {
  const forms = await handleGetForms();
  return NextResponse.json(forms);
}

// POST /api/forms - create a new form
export async function POST(req: NextRequest) {
  const data = await req.json();
  const result = await handleCreateForm(data);
  if ("error" in result) {
    return NextResponse.json(result, { status: 400 });
  }
  return NextResponse.json(result);
}
