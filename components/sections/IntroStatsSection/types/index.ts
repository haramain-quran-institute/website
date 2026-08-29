import React from "react";
import { StaticImageData } from "next/image";

export interface StatType {
  icon: React.ElementType;
  title: string;
  value: string | number;
}

export interface IntroStatsSectionProps {
  id?: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  stats: StatType[];
  buttonLabel?: string;
}
