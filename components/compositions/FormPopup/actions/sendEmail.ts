"use server";

import React from "react";
import { Resend } from "resend";
import GlobalFormEmail from "../emails/global-form-template";
import { instituteContact } from "@/data/site-contact";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmail(formData: FormData) {
  try {
    const organizerName =
      formData.get("organizerName")?.toString() || "";

    const studentName =
      formData.get("studentName")?.toString() || "";

    const gender =
      formData.get("gender")?.toString() || "";

    const age =
      formData.get("age")?.toString() || "";

    const relationship =
      formData.get("relationship")?.toString() || "";

    const email =
      formData.get("email")?.toString() || "";

    const whatsapp =
      formData.get("whatsapp")?.toString() || "Not Provided";

    const course =
      formData.get("course")?.toString() || "";

    const specialNeeds =
      formData.get("specialNeeds")?.toString() || "";

    const specialNeedsDetails =
      formData.get("specialNeedsDetails")?.toString() ||
      "Not Provided";

    const previousExperience =
      formData.get("previousExperience")?.toString() || "";

    const additionalNotes =
      formData.get("additionalNotes")?.toString() ||
      "Not Provided";

    const bookingDate =
      formData.get("bookingDateFormatted")?.toString() || "";

    const bookingTime =
      formData.get("bookingTime")?.toString() || "";

    const duration =
      formData.get("duration")?.toString() || "30 minutes";

    const timezone =
      formData.get("timezone")?.toString() || "Asia/Karachi";

    const meetingType =
      formData.get("meetingType")?.toString() || "Google Meet";

    const city =
      formData.get("metadata_city")?.toString() || "Unknown";

    const country =
      formData.get("metadata_country")?.toString() || "Unknown";

    const url =
      formData.get("metadata_url")?.toString() || "Unknown";

    const SENDER_NAME =
      process.env.EMAIL_SENDER_NAME ||
      "Haramain Quran Institute";

    const FROM_EMAIL = "noreply@haramainquraninstitute.com";

    const TO_EMAIL = instituteContact.email;

    const response = await resend.emails.send({
      from: `${SENDER_NAME} <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Free Trial Class Booking - ${studentName}`,
      react: React.createElement(GlobalFormEmail, {
        organizerName,
        studentName,
        gender,
        age,
        relationship,
        email,
        whatsapp,
        course,
        specialNeeds,
        specialNeedsDetails,
        previousExperience,
        additionalNotes,
        bookingDate,
        bookingTime,
        duration,
        timezone,
        meetingType,
        city,
        country,
        url,
      }),
    });

    return response;
  } catch (error) {
    console.error("Failed to send trial class booking:", error);
    throw error;
  }
}
