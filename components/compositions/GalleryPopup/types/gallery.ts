import { StaticImageData } from "next/image";

export type LayoutType =
  | "tall-split"
  | "reverse-tall-split"
  | "cascade"
  | "reverse-cascade"
  | "spotlight"
  | "uno"
  | "duo"
  | "trio"
  | "quad";

export interface GallerySection {
  imgSrc: StaticImageData[];
  altText: string;
  layout: LayoutType;
  ratio?: number;
  title?: string;
}

export interface GalleryData {
  title: string;
  description?: string;
  sections: GallerySection[];
}

export interface GallerySectionProps {
  section: GallerySection;
  imageCounter: number;
  title: string;
}

export interface GalleryPopupProps {
  title: string;
  description?: string;
  galleryData: GallerySection[];
}
