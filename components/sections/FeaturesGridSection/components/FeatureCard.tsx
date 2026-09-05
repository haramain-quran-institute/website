import Image from "next/image";
import type { FeatureCardProps } from "../types";
import SectionWatermark from "@/assets/IconForSectionsLowTransparency.png";

import {
  BookOpen,
  CalendarCheck,
  GraduationCap,
} from "lucide-react";

const icons = {
  bookOpen: BookOpen,
  calendarCheck: CalendarCheck,
  graduationCap: GraduationCap,
};

export default function FeatureCard({
  icon,
  title,
  description,
  isFirst = false,
}: FeatureCardProps) {
  const IconComponent = icons[icon];

  return (
    <div className="relative flex min-h-[280px] w-full flex-col items-center text-center">
      {/* Large subtle background icon */}
      {isFirst && (
        <Image
          src={SectionWatermark}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 z-0 h-[380px] w-[380px] -translate-x-1/2 object-contain opacity-[0.045]"
          sizes="380px"
        />
      )}

      {/* Main Icon */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center">
        <IconComponent
          className="h-14 w-14 text-[#0D463E]"
          strokeWidth={1.8}
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-7 flex max-w-md flex-col items-center">
        <h3 className="font-heading text-lg font-medium leading-tight tracking-wide text-[#0D463E] sm:text-xl md:text-[24px]">
          {title}
        </h3>

        <p className="font-body mt-4 max-w-[34ch] text-[16px] font-normal leading-7 tracking-tight text-smoky-black/65">
          {description}
        </p>
      </div>
    </div>
  );
}
