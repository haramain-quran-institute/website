import "server-only";

import { createHash } from "node:crypto";
import nodemailer from "nodemailer";
import type { SendMailOptions, Transporter } from "nodemailer";

export interface NotificationField {
  label: string;
  value?: string | number | null;
}

interface ConfirmationEmail {
  to: string;
  subject: string;
  title: string;
  message: string;
  fields?: NotificationField[];
}

interface WebsiteEmailOptions {
  formName: string;
  adminSubject: string;
  sourcePage: string;
  replyTo?: string;
  fields: NotificationField[];
  confirmation?: ConfirmationEmail;
  attachments?: SendMailOptions["attachments"];
  dedupeValues: string[];
}

declare global {
  var haramainMailer: Transporter | undefined;
  var haramainRecentSubmissions: Map<string, number> | undefined;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const duplicateWindowMs = 90_000;

export class WebsiteEmailError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "WebsiteEmailError";
  }
}

export class EmailConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EmailConfigurationError";
  }
}

export function logWebsiteEmailFailure(context: string, error: unknown) {
  const details =
    error instanceof Error
      ? {
          name: error.name,
          message: error.message,
          code: "code" in error ? String(error.code) : undefined,
        }
      : { name: "UnknownError" };

  console.error(`${context} failed.`, details);
}

export function cleanText(value: unknown, label: string, maxLength = 2000) {
  const cleaned = String(value ?? "").replace(/\u0000/g, "").trim();
  if (cleaned.length > maxLength) {
    throw new WebsiteEmailError(`${label} is too long.`);
  }
  return cleaned;
}

export function requireText(value: unknown, label: string, maxLength = 2000) {
  const cleaned = cleanText(value, label, maxLength);
  if (!cleaned) throw new WebsiteEmailError(`${label} is required.`);
  return cleaned;
}

export function requireEmail(value: unknown) {
  const email = requireText(value, "Email address", 254).toLowerCase();
  if (!emailPattern.test(email) || /[\r\n]/.test(email)) {
    throw new WebsiteEmailError("Please enter a valid email address.");
  }
  return email;
}

function safeHeader(value: string, label: string) {
  const cleaned = requireText(value, label, 180);
  if (/[\r\n]/.test(cleaned)) {
    throw new WebsiteEmailError(`${label} is invalid.`);
  }
  return cleaned;
}

function escapeHtml(value: unknown) {
  return String(value ?? "").replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        character
      ] ?? character,
  );
}

function getCredentials() {
  const user = process.env.GMAIL_USER?.trim();
  const password = process.env.GMAIL_APP_PASSWORD?.trim();

  if (!user || !emailPattern.test(user) || /[\r\n]/.test(user)) {
    throw new EmailConfigurationError("GMAIL_USER is missing or invalid.");
  }
  if (!password || password.startsWith("PASSWORD_")) {
    throw new EmailConfigurationError("GMAIL_APP_PASSWORD is missing or still a placeholder.");
  }

  return { user, password };
}

function getTransporter() {
  const { user, password } = getCredentials();

  if (!globalThis.haramainMailer) {
    globalThis.haramainMailer = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass: password },
      pool: true,
      maxConnections: 3,
      maxMessages: 50,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
      tls: { minVersion: "TLSv1.2" },
    });
  }

  return { transporter: globalThis.haramainMailer, user };
}

function renderedRows(fields: NotificationField[]) {
  return fields
    .filter(({ value }) => value !== undefined && value !== null && String(value).trim() !== "")
    .map(
      ({ label, value }) => `
        <tr>
          <td style="width:38%;padding:12px 14px;border-bottom:1px solid #E8E1D7;color:#66736F;font-size:13px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:12px 14px;border-bottom:1px solid #E8E1D7;color:#0D463E;font-size:14px;font-weight:600;line-height:1.55;white-space:pre-wrap;word-break:break-word;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");
}

function brandedEmail({
  title,
  message,
  fields,
}: {
  title: string;
  message: string;
  fields: NotificationField[];
}) {
  return `<!doctype html>
  <html lang="en">
    <body style="margin:0;padding:0;background:#F1ECE4;font-family:Arial,Helvetica,sans-serif;color:#243833;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F1ECE4;padding:24px 12px;">
        <tr><td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#FBF6EF;border:1px solid #E2D8CA;border-radius:14px;overflow:hidden;">
            <tr><td style="background:#0D463E;padding:28px 30px;">
              <div style="color:#D0A86C;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Haramain Quran Institute</div>
              <h1 style="margin:10px 0 0;color:#FFFFFF;font-size:28px;line-height:1.2;">${escapeHtml(title)}</h1>
            </td></tr>
            <tr><td style="padding:28px 30px;">
              <p style="margin:0 0 20px;color:#526762;font-size:15px;line-height:1.7;">${escapeHtml(message)}</p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #E8E1D7;border-radius:10px;border-collapse:separate;border-spacing:0;background:#FFFFFF;overflow:hidden;">
                ${renderedRows(fields)}
              </table>
            </td></tr>
            <tr><td style="border-top:1px solid #E2D8CA;padding:22px 30px;color:#65736F;font-size:12px;line-height:1.7;">
              <strong style="color:#0D463E;">Haramain Quran Institute</strong><br />
              Online Quran Learning<br /><br />
              This is an automated website notification.
            </td></tr>
          </table>
        </td></tr>
      </table>
    </body>
  </html>`;
}

function submissionMetadata(formName: string, sourcePage: string) {
  const now = new Date();
  const date = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Riyadh",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(now);
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Riyadh",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  }).format(now);

  return [
    { label: "Submission Date", value: date },
    { label: "Submission Time", value: time },
    { label: "Source Page", value: sourcePage },
    { label: "Form Name", value: formName },
  ];
}

function claimSubmission(formName: string, values: string[]) {
  const now = Date.now();
  const store = globalThis.haramainRecentSubmissions ?? new Map<string, number>();
  globalThis.haramainRecentSubmissions = store;

  for (const [key, createdAt] of store) {
    if (now - createdAt > duplicateWindowMs) store.delete(key);
  }

  const key = createHash("sha256")
    .update([formName, ...values].join("|").toLowerCase())
    .digest("hex");

  if (store.has(key)) return { duplicate: true, key };
  store.set(key, now);
  return { duplicate: false, key };
}

export async function sendWebsiteEmails(options: WebsiteEmailOptions) {
  const formName = safeHeader(options.formName, "Form name");
  const adminSubject = safeHeader(options.adminSubject, "Email subject");
  const sourcePage = cleanText(options.sourcePage || "Website", "Source page", 300);
  const replyTo = options.replyTo ? requireEmail(options.replyTo) : undefined;
  const confirmationTo = options.confirmation ? requireEmail(options.confirmation.to) : undefined;
  const claim = claimSubmission(formName, options.dedupeValues.map(String));

  if (claim.duplicate) return { duplicate: true };

  try {
    const { transporter, user } = getTransporter();
    const sender = `"Haramain Quran Institute" <${user}>`;
    const metadata = submissionMetadata(formName, sourcePage);
    const adminFields = [...options.fields, ...metadata];
    const messages: SendMailOptions[] = [
      {
        from: sender,
        to: user,
        replyTo,
        subject: `${adminSubject} — Haramain Quran Institute`,
        html: brandedEmail({
          title: adminSubject,
          message: "A new website submission has been received. The details are shown below.",
          fields: adminFields,
        }),
        attachments: options.attachments,
      },
    ];

    if (options.confirmation && confirmationTo) {
      messages.push({
        from: sender,
        to: confirmationTo,
        replyTo: user,
        subject: safeHeader(options.confirmation.subject, "Confirmation subject"),
        html: brandedEmail({
          title: options.confirmation.title,
          message: options.confirmation.message,
          fields: options.confirmation.fields ?? [],
        }),
      });
    }

    await Promise.all(messages.map((message) => transporter.sendMail(message)));
    return { duplicate: false };
  } catch (error) {
    globalThis.haramainRecentSubmissions?.delete(claim.key);
    throw error;
  }
}
