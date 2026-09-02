"use server";

import { Resend } from "resend";

export interface TrialBookingPayload {
  organizerName: string;
  studentName: string;
  email: string;
  phone: string;
  contactMethod: string;
  course: string;
  timezone: string;
  studentTime: string;
  pakistanTime: string;
  utcTime: string;
  notes: string;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

export async function sendTrialBooking(payload: TrialBookingPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { success: false, error: "Email delivery is not configured yet." };

  const resend = new Resend(apiKey);
  const from = `${process.env.EMAIL_SENDER_NAME || "Haramain Quran Institute"} <${process.env.EMAIL_FROM || "noreply@haramainquraninstitute.com"}>`;
  const instituteEmail = process.env.TRIAL_BOOKING_EMAIL || "email.hqinstitute@gmail.com";
  const safe = Object.fromEntries(Object.entries(payload).map(([key, value]) => [key, escapeHtml(value)])) as unknown as TrialBookingPayload;

  const details = `<table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif">${[
    ["Organizer", safe.organizerName], ["Student", safe.studentName], ["Course", safe.course], ["Student date & time", safe.studentTime], ["Pakistan date & time", safe.pakistanTime], ["Student time zone", safe.timezone], ["Contact preference", safe.contactMethod], ["Email", safe.email], ["Phone / WhatsApp", safe.phone || "Not provided"], ["Notes", safe.notes || "None"],
  ].map(([label, value]) => `<tr><td style="padding:10px;border-bottom:1px solid #e8e1d7;color:#667">${label}</td><td style="padding:10px;border-bottom:1px solid #e8e1d7;color:#0d463e;font-weight:600">${value}</td></tr>`).join("")}</table>`;

  const header = (title: string, subtitle: string) => `<div style="max-width:640px;margin:auto;background:#fbf6ef;padding:36px;border-radius:12px;font-family:Arial,sans-serif"><div style="color:#d0a86c;font-size:12px;font-weight:700;letter-spacing:2px">HARAMAIN QURAN INSTITUTE</div><h1 style="color:#0d463e;font-size:30px;margin:12px 0 8px">${title}</h1><p style="color:#56706b;line-height:1.7">${subtitle}</p>`;

  try {
    await Promise.all([
      resend.emails.send({ from, to: instituteEmail, replyTo: payload.email, subject: `New Free Trial Booking - ${payload.studentName}`, html: `${header("A new trial class is booked", "A learner has selected a date and time for a complimentary Quran class.")}${details}</div>` }),
      resend.emails.send({ from, to: payload.email, subject: "Your Haramain free trial is booked", html: `${header("Thank you - your trial is booked", `Assalamu Alaikum ${safe.organizerName}, we have received your booking. Our team will contact you by ${safe.contactMethod} with the meeting details.`)}${details}<p style="margin-top:24px;color:#56706b;line-height:1.7">Please keep this email for your records. The appointment is stored as one exact moment and displayed above in both your selected time zone and Pakistan time.</p></div>` }),
    ]);
    return { success: true };
  } catch (error) {
    console.error("Trial booking email failed", error);
    return { success: false, error: "We could not send the booking emails. Please try again." };
  }
}
