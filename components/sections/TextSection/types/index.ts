export type TextSectionHeading = "h2" | "h3";
export type TextSectionAlign = "left" | "center" | "right";

export interface TextSectionCta {
  label: string;
  href?: string;
  external?: boolean;
}

export interface TextSectionProps {
  id?: string;
  heading?: TextSectionHeading;
  align?: TextSectionAlign;
  showIcon?: boolean;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  noMargin?: boolean;
  whiteBg?: boolean;
  bgClassName?: string;
  className?: string;
  cta?: TextSectionCta;
}
