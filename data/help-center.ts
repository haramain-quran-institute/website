import { instituteContact } from "@/data/site-contact";

export interface BranchContact {
  code: "KSA" | "UAE" | "PAK";
  name: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  location: string;
  timezone: string;
}

const supportEmail =
  process.env.HARAMAIN_SUPPORT_EMAIL || instituteContact.email;

export const helpCenterBranches: BranchContact[] = [
  {
    code: "KSA",
    name: "Kingdom of Saudi Arabia",
    email: process.env.HARAMAIN_KSA_EMAIL || supportEmail,
    phone: process.env.HARAMAIN_KSA_PHONE || instituteContact.phoneDisplay,
    whatsapp: process.env.HARAMAIN_KSA_WHATSAPP || instituteContact.phoneDisplay,
    location: process.env.HARAMAIN_KSA_LOCATION || instituteContact.address,
    timezone: "Arabia Standard Time (UTC+3)",
  },
  {
    code: "UAE",
    name: "United Arab Emirates",
    email: process.env.HARAMAIN_UAE_EMAIL || supportEmail,
    phone: process.env.HARAMAIN_UAE_PHONE,
    whatsapp: process.env.HARAMAIN_UAE_WHATSAPP,
    location: process.env.HARAMAIN_UAE_LOCATION || "United Arab Emirates",
    timezone: "Gulf Standard Time (UTC+4)",
  },
  {
    code: "PAK",
    name: "Pakistan",
    email: process.env.HARAMAIN_PAK_EMAIL || supportEmail,
    phone: process.env.HARAMAIN_PAK_PHONE,
    whatsapp: process.env.HARAMAIN_PAK_WHATSAPP,
    location: process.env.HARAMAIN_PAK_LOCATION || "Islamabad, Pakistan",
    timezone: "Pakistan Standard Time (UTC+5)",
  },
];
