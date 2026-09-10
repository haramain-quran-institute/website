import { NextResponse } from "next/server";

import {
  logWebsiteEmailFailure,
  requireEmail,
  sendWebsiteEmails,
  WebsiteEmailError,
} from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const source = "Winter Short Course Home Page Popup";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const email = requireEmail(
      typeof body === "object" && body !== null && "email" in body
        ? body.email
        : "",
    );

    const result = await sendWebsiteEmails({
      formName: "Winter Short Course Interest",
      adminSubject: "New Winter Short Course Interest",
      exactAdminSubject: true,
      sourcePage: source,
      replyTo: email,
      dedupeValues: [email],
      fields: [{ label: "Submitted Email Address", value: email }],
      confirmation: {
        to: email,
        subject: "Winter Short Course — You’re on the List!",
        title: "Winter Short Course — You’re on the List!",
        message:
          "Assalamu Alaikum,\n\nThank you for your interest in the Haramain Quran Institute Winter Short Course.\n\nWe have received your email successfully and will notify you as soon as registrations open.\n\nJazakAllahu Khairan,\nHaramain Quran Institute",
      },
    });

    if (result.duplicate) {
      return NextResponse.json(
        { error: "This email was submitted recently. Please try again later." },
        { status: 429 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof WebsiteEmailError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    logWebsiteEmailFailure("Winter Short Course interest notification", error);
    return NextResponse.json(
      {
        error:
          "We could not process your request right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
