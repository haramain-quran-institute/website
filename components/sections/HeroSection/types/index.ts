import { StaticImageData } from "next/image";
import type { Asset } from "next-video/dist/assets.js";

export interface HeroSectionBaseProps {
  showIcon: boolean;
  icon?: StaticImageData; // ✅ allow different favicon/icon per page
  subtitle?: string;
  title: string | React.ReactNode;
  description?: string;
  buttonLabel: string;
  showCountdown?: boolean;
  countdownTarget?: string;
}

export interface HeroSectionWithImage extends HeroSectionBaseProps {
  backgroundType: "image";
  backgroundMedia: StaticImageData;
  backgroundMediaAlt: string;
}

export interface HeroSectionWithVideo extends HeroSectionBaseProps {
  backgroundType: "video";
  backgroundMedia: Asset;
  backgroundMediaAlt?: string;
  fallbackImage?: StaticImageData;
}

export type HeroSectionProps = HeroSectionWithImage | HeroSectionWithVideo;
