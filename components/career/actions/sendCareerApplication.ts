"use server";

import { basename, extname } from "node:path";
import { cleanText, requireEmail, requireText, sendWebsiteEmails, WebsiteEmailError } from "@/lib/email";

const allowedCvTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const allowedCvExtensions = new Set([".pdf", ".doc", ".docx"]);
const maxCvBytes = 5 * 1024 * 1024;

export async function sendCareerApplication(formData: FormData) {
  try {
    const fullName = requireText(formData.get("fullName"), "Full name", 120);
    const email = requireEmail(formData.get("email"));
    const phone = requireText(formData.get("phone"), "Phone / WhatsApp", 50);
    const experience = requireText(formData.get("experience"), "Experience and qualifications", 3000);
    const position = requireText(formData.get("position"), "Job position", 160);
    const sourcePage = cleanText(formData.get("sourcePage") || "/career", "Source page", 300);
    const cv = formData.get("cv");

    if (!(cv instanceof File) || cv.size === 0) {
      throw new WebsiteEmailError("Please attach your CV or résumé.");
    }
    const extension = extname(cv.name).toLowerCase();
    if (!allowedCvTypes.has(cv.type) || !allowedCvExtensions.has(extension)) {
      throw new WebsiteEmailError("Please upload a PDF, DOC, or DOCX file.");
    }
    if (cv.size > maxCvBytes) {
      throw new WebsiteEmailError("Your CV must be 5 MB or smaller.");
    }

    const safeFilename = basename(cv.name).replace(/[^a-zA-Z0-9._ -]/g, "_");
    const cvBuffer = Buffer.from(await cv.arrayBuffer());

    await sendWebsiteEmails({
      formName: "Career Application",
      adminSubject: "New Career Application",
      sourcePage,
      replyTo: email,
      dedupeValues: [email, position, String(cv.size)],
      fields: [
        { label: "Full Name", value: fullName },
        { label: "Email", value: email },
        { label: "Phone / WhatsApp", value: phone },
        { label: "Job Position", value: position },
        { label: "Experience & Qualifications", value: experience },
        { label: "CV / Résumé", value: safeFilename },
      ],
      attachments: [{ filename: safeFilename, content: cvBuffer, contentType: cv.type }],
      confirmation: {
        to: email,
        subject: "Application Received — Haramain Quran Institute",
        title: "Your Application Was Received",
        message: "Assalamu Alaikum. Thank you for your interest in Haramain Quran Institute. Your application has been received successfully and will be reviewed. We will contact shortlisted candidates directly.",
        fields: [{ label: "Position", value: position }],
      },
    });

    return { success: true };
  } catch (error) {
    if (error instanceof WebsiteEmailError) return { success: false, error: error.message };
    console.error("Career application notification failed.");
    return { success: false, error: "We could not send your application. Please try again shortly." };
  }
}
