"use server";

import { requireEmail, sendWebsiteEmails, WebsiteEmailError } from "@/lib/email";

export async function sendNewsletterSubscription(emailValue: string, sourcePage = "/blogs") {
  try {
    const email = requireEmail(emailValue);
    await sendWebsiteEmails({
      formName: "Newsletter Subscription",
      adminSubject: "New Newsletter Subscription",
      sourcePage,
      replyTo: email,
      dedupeValues: [email],
      fields: [{ label: "Email", value: email }],
      confirmation: {
        to: email,
        subject: "Newsletter Subscription Received — Haramain Quran Institute",
        title: "Thank You for Staying Connected",
        message: "Assalamu Alaikum. Haramain Quran Institute has received your newsletter subscription. You will receive beneficial Quran learning articles, reminders, and institute updates.",
      },
    });
    return { success: true };
  } catch (error) {
    if (error instanceof WebsiteEmailError) return { success: false, error: error.message };
    console.error("Newsletter subscription notification failed.");
    return { success: false, error: "We could not complete your subscription. Please try again shortly." };
  }
}
