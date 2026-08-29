export type FeatureIcon =
  | "bookOpen"
  | "calendarCheck"
  | "graduationCap";

export interface FeatureItem {
  title: string;
  description: string;
  icon: FeatureIcon;
}

export interface FeatureCardProps extends FeatureItem {
  isFirst?: boolean;
}

export interface FeaturesGridSectionProps {
  id?: string;
  title: string;
  description: string;
  features: FeatureItem[];
  noBg?: boolean;
  noMargin?: boolean;
}