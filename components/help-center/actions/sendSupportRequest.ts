"use server";

import { Resend } from "resend";

export interface SupportRequestPayload {
  name: string;
  email: string;
  phone: string;
  branch: string;
  subject: string;
  message: string;
  preferredReply: "Email" | "Phone" | "WhatsApp";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        character
      ] ?? character,
  );
}

export async function sendSupportRequest(payload: SupportRequestPayload) {
  const values = Object.values(payload).map((value) => value.trim());
  if (!payload.name.trim() || !payload.email.trim() || !payload.subject.trim() || !payload.message.trim()) {
    return { success: false, error: "Please complete all required fields." };
  }
  if (values.some((value) => value.length > 3000) || payload.message.length > 3000) {
    return { success: false, error: "Please shorten your message and try again." };
  }
  if (payload.preferredReply !== "Email" && !payload.phone.trim()) {
    return { success: false, error: `Please add a number for a ${payload.preferredReply} reply.` };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { success: false, error: "Online submission is being configured. Please email info@haramainquraninstitute.com." };
  }

  const safe = Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, escapeHtml(value)]),
  ) as unknown as SupportRequestPayload;
  const resend = new Resend(apiKey);
  const from = `${process.env.EMAIL_SENDER_NAME || "Haramain Quran Institute"} <${process.env.EMAIL_FROM || "noreply@haramainquraninstitute.com"}>`;
  const recipient =
    process.env.HELP_CENTER_EMAIL ||
    process.env.TRIAL_BOOKING_EMAIL ||
    "email.hqinstitute@gmail.com";

  const detailRows = [
    ["Name", safe.name],
    ["Email", safe.email],
    ["Phone / WhatsApp", safe.phone || "Not provided"],
    ["Preferred reply", safe.preferredReply],
    ["Preferred branch", safe.branch],
    ["Subject", safe.subject],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px;border-bottom:1px solid #e8e1d7;color:#667">${label}</td><td style="padding:10px;border-bottom:1px solid #e8e1d7;color:#0d463e;font-weight:600">${value}</td></tr>`,
    )
    .join("");
  const shell = (title: string, content: string) =>
    `<div style="max-width:640px;margin:auto;background:#fbf6ef;padding:36px;border-radius:12px;font-family:Arial,sans-serif"><div style="color:#d0a86c;font-size:12px;font-weight:700;letter-spacing:2px">HARAMAIN QURAN INSTITUTE</div><h1 style="color:#0d463e;font-size:30px;margin:12px 0 18px">${title}</h1>${content}</div>`;

  try {
    await Promise.all([
      resend.emails.send({
        from,
        to: recipient,
        replyTo: payload.email,
        subject: `Help Center: ${payload.subject}`,
        html: shell(
          "New support request",
          `<table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif">${detailRows}</table><h2 style="color:#0d463e;font-size:18px;margin-top:24px">Message</h2><p style="color:#56706b;line-height:1.7;white-space:pre-wrap">${safe.message}</p>`,
        ),
      }),
      resend.emails.send({
        from,
        to: payload.email,
        subject: "We received your Haramain support request",
        html: shell(
          "Thank you for contacting us",
          `<p style="color:#56706b;line-height:1.7">Assalamu Alaikum ${safe.name}, your message has reached the Haramain team. We will reply by <strong>${safe.preferredReply}</strong> using the details you provided.</p><p style="color:#56706b;line-height:1.7">Your request: <strong>${safe.subject}</strong></p>`,
        ),
      }),
    ]);
    return { success: true };
  } catch (error) {
    console.error("Help Center email failed", error);
    return { success: false, error: "We could not send your request. Please try again shortly." };
  }
}
