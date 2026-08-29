import type { StaticImageData } from "next/image";
import type { Asset } from "next-video/dist/assets.js";

export type GalleryLayout =
  | "BalancedElegance"
  | "ClassicAsymmetric"
  | "EditorialGrid"
  | "LuxuryShowcase"
  | "ModernMosaic"
  | "QuadHarmony";

export interface GalleryImageMedia {
  type: "image";
  src: StaticImageData;
  alt: string;
  title?: string;
  description?: string;
  isLink?: false;
}

export interface GalleryVideoMedia {
  type: "video";
  src: Asset;
  alt?: string;
  poster?: string;
}

export interface GalleryLinkMedia {
  type: "link";
  src: StaticImageData;
  alt: string;
  title: string;
  description?: string;
  href: string;
  isLink: true;
  buttonLabel?: string;
}

export type GalleryMedia =
  | GalleryImageMedia
  | GalleryVideoMedia
  | GalleryLinkMedia;

export interface GallerySlide {
  layout: GalleryLayout;
  media: GalleryMedia[];
}

export interface GallerySectionProps {
  id?: string;
  title: string;
  description: string;
  slides: GallerySlide[];
  ratio?: number;
}
