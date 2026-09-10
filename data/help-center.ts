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

export const helpCenterBranches: BranchContact[] = [
  {
    code: "KSA",
    name: "Kingdom of Saudi Arabia",
    email: process.env.HARAMAIN_KSA_EMAIL || "ksa@haramainquraninstitute.com",
    phone: process.env.HARAMAIN_KSA_PHONE || instituteContact.phoneDisplay,
    whatsapp: process.env.HARAMAIN_KSA_WHATSAPP || instituteContact.phoneDisplay,
    location: process.env.HARAMAIN_KSA_LOCATION || instituteContact.address,
    timezone: "Arabia Standard Time (UTC+3)",
  },
  {
    code: "UAE",
    name: "United Arab Emirates",
    email: process.env.HARAMAIN_UAE_EMAIL || "uae@haramainquraninstitute.com",
    phone: process.env.HARAMAIN_UAE_PHONE || "+971 52 957 3756",
    whatsapp: process.env.HARAMAIN_UAE_WHATSAPP || "+971 52 957 3756",
    location: process.env.HARAMAIN_UAE_LOCATION || "Al Qusais Dubai - UAE",
    timezone: "Gulf Standard Time (UTC+4)",
  },
  {
    code: "PAK",
    name: "Pakistan",
    email: process.env.HARAMAIN_PAK_EMAIL || "pk@haramainquraninstitute.com",
    phone: process.env.HARAMAIN_PAK_PHONE || "+923 49 056 6531",
    whatsapp: process.env.HARAMAIN_PAK_WHATSAPP || "+923 49 056 6531",
    location: process.env.HARAMAIN_PAK_LOCATION || "F6 Islamabad - Pakistan",
    timezone: "Pakistan Standard Time (UTC+5)",
  },
];
