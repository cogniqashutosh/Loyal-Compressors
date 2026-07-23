import { NextResponse } from "next/server"
import { inquiryFormSchema } from "@/lib/schema"

// Phase 1 stub: validates and logs the inquiry. Wire up email/CRM delivery
// (e.g. Resend, SendGrid, or a CRM webhook) when the real Contact page ships.
export async function POST(request: Request) {
  const body = await request.json()
  const parsed = inquiryFormSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  console.log("[inquiry] New quote request:", parsed.data)

  return NextResponse.json({ ok: true })
}
