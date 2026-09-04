"use server";

import { cleanText, requireEmail, requireText, sendWebsiteEmails, WebsiteEmailError } from "@/lib/email";

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
  sourcePage?: string;
}

export async function sendTrialBooking(payload: TrialBookingPayload) {
  try {
    const organizerName = requireText(payload.organizerName, "Organizer name", 120);
    const studentName = requireText(payload.studentName, "Student name", 120);
    const email = requireEmail(payload.email);
    const phone = cleanText(payload.phone, "Phone / WhatsApp", 50);
    const contactMethod = requireText(payload.contactMethod, "Contact method", 30);
    const course = requireText(payload.course, "Course", 120);
    const timezone = requireText(payload.timezone, "Time zone", 100);
    const studentTime = requireText(payload.studentTime, "Student date and time", 180);
    const pakistanTime = requireText(payload.pakistanTime, "Pakistan date and time", 180);
    const notes = cleanText(payload.notes, "Additional notes", 2000);

    await sendWebsiteEmails({
      formName: "Free Trial Class",
      adminSubject: "New Free Trial Request",
      sourcePage: payload.sourcePage || "/book-free-trial",
      replyTo: email,
      dedupeValues: [email, studentName, payload.utcTime],
      fields: [
        { label: "Parent / Organizer", value: organizerName },
        { label: "Student", value: studentName },
        { label: "Email", value: email },
        { label: "Phone / WhatsApp", value: phone },
        { label: "Course", value: course },
        { label: "Preferred Contact", value: contactMethod },
        { label: "Student Date & Time", value: studentTime },
        { label: "Pakistan Date & Time", value: pakistanTime },
        { label: "Time Zone", value: timezone },
        { label: "Additional Notes", value: notes },
      ],
      confirmation: {
        to: email,
        subject: "We Received Your Free Trial Request — Haramain Quran Institute",
        title: "Your Free Trial Request Was Received",
        message: "Assalamu Alaikum. Haramain Quran Institute has received your request successfully. Our team will review the details and contact you regarding the trial class. You do not need to submit the form again.",
        fields: [
          { label: "Student", value: studentName },
          { label: "Course", value: course },
          { label: "Requested Time", value: studentTime },
          { label: "Preferred Contact", value: contactMethod },
        ],
      },
    });

    return { success: true };
  } catch (error) {
    if (error instanceof WebsiteEmailError) return { success: false, error: error.message };
    console.error("Free trial notification failed.");
    return { success: false, error: "We could not send your request. Please try again shortly." };
  }
}
