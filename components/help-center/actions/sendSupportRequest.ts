"use server";

import { cleanText, requireEmail, requireText, sendWebsiteEmails, WebsiteEmailError } from "@/lib/email";

export interface SupportRequestPayload {
  name: string;
  email: string;
  phone: string;
  branch: string;
  subject: string;
  message: string;
  preferredReply: "Email" | "Phone" | "WhatsApp";
  sourcePage?: string;
}

export async function sendSupportRequest(payload: SupportRequestPayload) {
  try {
    const name = requireText(payload.name, "Full name", 120);
    const email = requireEmail(payload.email);
    const phone = cleanText(payload.phone, "Phone / WhatsApp", 50);
    const branch = requireText(payload.branch, "Branch", 80);
    const subject = requireText(payload.subject, "Subject", 160);
    const message = requireText(payload.message, "Message", 3000);
    const preferredReply = requireText(payload.preferredReply, "Preferred reply", 30);

    if (preferredReply !== "Email" && !phone) {
      return { success: false, error: `Please add a number for a ${preferredReply} reply.` };
    }

    await sendWebsiteEmails({
      formName: "Help Center Contact Form",
      adminSubject: "New Contact Inquiry",
      sourcePage: payload.sourcePage || "/help-center",
      replyTo: email,
      dedupeValues: [email, subject, message],
      fields: [
        { label: "Full Name", value: name },
        { label: "Email", value: email },
        { label: "Phone / WhatsApp", value: phone },
        { label: "Preferred Reply", value: preferredReply },
        { label: "Preferred Branch", value: branch },
        { label: "Subject", value: subject },
        { label: "Message", value: message },
      ],
      confirmation: {
        to: email,
        subject: "We Received Your Message — Haramain Quran Institute",
        title: "Thank You for Contacting Us",
        message: "Assalamu Alaikum. Your message has been received successfully. The Haramain Quran Institute team will review your enquiry and respond through your preferred contact method.",
        fields: [
          { label: "Subject", value: subject },
          { label: "Preferred Reply", value: preferredReply },
        ],
      },
    });

    return { success: true };
  } catch (error) {
    if (error instanceof WebsiteEmailError) return { success: false, error: error.message };
    console.error("Help Center notification failed.");
    return { success: false, error: "We could not send your message. Please try again shortly." };
  }
}
