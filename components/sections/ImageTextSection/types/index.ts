import type { StaticImageData } from "next/image";

export type ImageTextHeading = "h2" | "h3";

export interface ImageTextProps {
  image: StaticImageData | string;
  imageAlt: string;
  aspectRatio?: number;
  roundedImage?: boolean;
  title: React.ReactNode;
  subtitle?: string;
  description: React.ReactNode[];
  buttonLabel?: string;
  reverse?: boolean;
  heading?: ImageTextHeading;
  noMargin?: boolean;
}
