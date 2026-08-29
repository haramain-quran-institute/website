"use server";

import { headers } from "next/headers";
import React from "react";
import { Resend } from "resend";
import { AlfursanContactEmail } from "../emails/AlfursanContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY!);

function getStr(formData: FormData, key: string) {
  return formData.get(key)?.toString() ?? "";
}

function getNumStr(formData: FormData, key: string) {
  const v = formData.get(key)?.toString();
  return v === undefined || v === null || v === "" ? "" : String(v);
}

function titleForFormType(formType: string) {
  if (formType === "umrah-class") return "Umrah Class";
  if (formType === "umrah") return "Umrah";
  if (formType === "ziaraat") return "Ziaraat";
  if (formType === "hajj") return "Hajj";
  if (formType === "student-consultancy-application")
    return "Student Consultancy Application";
  return "Inquiry";
}

export async function sendAlfursanEmail(formData: FormData) {
  const formType = getStr(formData, "form_type") || "inquiry";

  const name = getStr(formData, "name");
  const email = getStr(formData, "email");
  const phoneCode = getStr(formData, "phoneCode");
  const phone = getStr(formData, "phone");
  const destination = getStr(formData, "destination");
  const message = getStr(formData, "message");
  const pageUrl = getStr(formData, "metadata_url") || "Unknown";

  if (!email || !message) {
    throw new Error("Email and message are required.");
  }

  const persons = getNumStr(formData, "persons");
  const performedBefore = getStr(formData, "performedBefore");
  const bookedWithAlfursan = getStr(formData, "bookedWithAlfursan");
  const firstExperience = getStr(formData, "firstExperience");
  const adults = getNumStr(formData, "adults");
  const children = getNumStr(formData, "children");
  const month = getStr(formData, "month");
  const duration = getStr(formData, "duration");
  const year = getNumStr(formData, "year");

  const studentCountry = getStr(formData, "student_country");
  const studentUniversity = getStr(formData, "student_university");
  const studentProgram = getStr(formData, "student_program");

  let city = "Unknown";
  let country = "Unknown";

  try {
    const h = await headers();
    const encodedCity = h.get("x-vercel-ip-city");
    city = encodedCity ? decodeURIComponent(encodedCity) : "Unknown";
    country =
      h.get("x-vercel-ip-country-name") ||
      h.get("x-vercel-ip-country") ||
      "Unknown";
  } catch {
    city = "Unknown";
    country = "Unknown";
  }

  const FROM_NAME = process.env.ALFURSAN_FROM_NAME || "Alfursan Travel";
  const FROM_EMAIL =
    process.env.ALFURSAN_FROM_EMAIL || "noreply@alfursan.digital";
  const TO_EMAIL = process.env.ALFURSAN_EMAIL_TO || "info@alfursan.digital";
  const CC_EMAIL = process.env.ALFURSAN_EMAIL_CC || "";

  const formTitle = titleForFormType(formType);

  const extraFields: Array<{ label: string; value: string }> = [];

  if (persons) extraFields.push({ label: "Persons", value: persons });
  if (performedBefore)
    extraFields.push({ label: "Performed Before", value: performedBefore });
  if (bookedWithAlfursan)
    extraFields.push({
      label: "Booked with Alfursan",
      value: bookedWithAlfursan,
    });
  if (firstExperience)
    extraFields.push({ label: "Alfursan Experience", value: firstExperience });
  if (adults !== "") extraFields.push({ label: "Adults (18+)", value: adults });
  if (children !== "") extraFields.push({ label: "Children", value: children });
  if (month) extraFields.push({ label: "Month", value: month });
  if (duration) extraFields.push({ label: "Duration", value: duration });
  if (year) extraFields.push({ label: "Year", value: year });
  if (studentCountry)
    extraFields.push({ label: "Selected Country", value: studentCountry });
  if (studentUniversity)
    extraFields.push({
      label: "Selected University",
      value: studentUniversity,
    });
  if (studentProgram)
    extraFields.push({ label: "Selected Program", value: studentProgram });

  const subject =
    formTitle === "Inquiry"
      ? `New Inquiry – ${destination || "Alfursan Travel"}`
      : `New ${formTitle} Inquiry – ${destination || "Alfursan Travel"}`;

  const reactEmail = React.createElement(AlfursanContactEmail, {
    formTitle,
    name,
    email,
    phone: `${phoneCode} ${phone}`.trim(),
    destination,
    message,
    city,
    country,
    url: pageUrl,
    extraFields,
  });

  await resend.emails.send({
    from: `${FROM_NAME} <${FROM_EMAIL}>`,
    to: TO_EMAIL,
    cc: CC_EMAIL || undefined,
    replyTo: email,
    subject,
    react: reactEmail,
  });

  return { ok: true };
}
