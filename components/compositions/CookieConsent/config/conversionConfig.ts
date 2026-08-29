export type ConversionSource =
  | "limo_service"
  | "private_transfer_oslo"
  | "bergen_airport_transfer"
  | "vacation_rentals"
  | "business_class"
  | "standard_class"
  | "mercedes_v_class"
  | "mercedes_sprinter"
  | "nordic_escape"
  | "exclusive_oslo_tours"
  | "dk_limo_service"
  | "dk_airport_transfer"
  | "dk_mercedes_s_class"
  | "dk_mercedes_e_class"
  | "dk_mercedes_v_class"
  | "dk_mercedes_sprinter"
  | "dk_exclusive_copenhagen_tours"
  | "dk_default"
  | "default";

export const CONVERSION_CONFIG = {
  GOOGLE_ADS_ID: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-586955161",
  LABELS: {
    limo_service: "dI_uCM3S5v0ZEJnz8JcC",
    private_transfer_oslo: "12TtCLKU_IEaEJnz8JcC",
    bergen_airport_transfer: "fq_cCLDo7_0ZEJnz8JcC",
    vacation_rentals: "SC-eCPDi1f0ZEJnz8JcC",
    business_class: "ZPHICM3q7_0ZEJnz8JcC",
    standard_class: "HM8HCL7w7_0ZEJnz8JcC",
    mercedes_v_class: "atYICOWB3_0ZEJnz8JcC",
    mercedes_sprinter: "yutFCLHy7_0ZEJnz8JcC",
    nordic_escape: "esaTCJqE3_0ZEJnz8JcC",
    exclusive_oslo_tours: "l1kUCJrb9aAaEJnz8JcC",

    dk_limo_service: "Y7Y9CNXT18YZEJnz8JcC",
    dk_airport_transfer: "jpcgCI_B4sYZEJnz8JcC",
    dk_mercedes_s_class: "fbqQCN6h-IEaEJnz8JcC",
    dk_mercedes_e_class: "pQK3CLOU-4EaEJnz8JcC",
    dk_mercedes_v_class: "6F5hCLL2g4IaEJnz8JcC",
    dk_mercedes_sprinter: "ovSiCNjAiYIaEJnz8JcC",
    dk_exclusive_copenhagen_tours: "hxEdCIbZ9aAaEJnz8JcC",
    dk_default: "ThYvCLDujf8ZEJnz8JcC",
    default: "NA",
  } as const,
} as const;
