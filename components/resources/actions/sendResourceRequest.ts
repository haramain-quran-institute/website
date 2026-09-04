"use server";

import { requireEmail, requireText, sendWebsiteEmails, WebsiteEmailError } from "@/lib/email";

export interface ResourceRequestPayload {
  email: string;
  country: string;
  resourceTitle: string;
  sourcePage: string;
}

export async function sendResourceRequest(payload: ResourceRequestPayload) {
  try {
    const email = requireEmail(payload.email);
    const country = requireText(payload.country, "Country", 100);
    const resourceTitle = requireText(payload.resourceTitle, "Resource", 180);

    await sendWebsiteEmails({
      formName: "Free Resource Download",
      adminSubject: "New Download Request",
      sourcePage: payload.sourcePage,
      replyTo: email,
      dedupeValues: [email, resourceTitle],
      fields: [
        { label: "Email", value: email },
        { label: "Country", value: country },
        { label: "Resource", value: resourceTitle },
        { label: "Resource Type", value: "Free PDF" },
      ],
      confirmation: {
        to: email,
        subject: "Your Resource Request — Haramain Quran Institute",
        title: "Your Resource Request Was Received",
        message: "Assalamu Alaikum. Your free learning resource request has been received, and the PDF download has started on the website.",
        fields: [{ label: "Resource", value: resourceTitle }],
      },
    });

    return { success: true };
  } catch (error) {
    if (error instanceof WebsiteEmailError) return { success: false, error: error.message };
    console.error("Resource download notification failed.");
    return { success: false, error: "We could not prepare your download. Please try again shortly." };
  }
}
