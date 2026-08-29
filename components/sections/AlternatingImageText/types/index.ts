import type {
  ImageTextProps,
  ImageTextHeading,
} from "../../ImageTextSection/types";

export interface AlternatingItem extends Omit<ImageTextProps, "noMargin"> {
  id?: string;
}

export interface AlternatingImageTextProps {
  id?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  items: AlternatingItem[];
  startReversed?: boolean;
  defaultHeading?: ImageTextHeading;
  defaultAspectRatio?: number;
}
