import { NextResponse } from "next/server";

import { enquirySchema } from "@/lib/validation";

export async function POST(request: Request) {
  const payload = await request.json();
  const result = enquirySchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      {
        message: "Please complete all required fields with valid business information.",
        issues: result.error.flatten(),
      },
      { status: 400 },
    );
  }

  return NextResponse.json(
    {
      message:
        "Thank you. Your wholesale enquiry has been captured by the site API. Connect this route to your CRM, email service, or database to activate full backend handling.",
      enquiry: result.data,
    },
    { status: 202 },
  );
}
