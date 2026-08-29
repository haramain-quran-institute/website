import Link from "next/link";
import type { ServiceItem } from "../types";

interface ServiceCardProps {
  item: ServiceItem;
  index: number;
}

/* ---------------------------------------------
   Course Icons
--------------------------------------------- */

function CourseIcon({ index }: { index: number }) {
  const commonProps = {
    width: 44,
    height: 44,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  const stroke = "#0D706D";

  switch (index) {
    case 0:
      return (
        <svg {...commonProps}>
          <path
            d="M8 13.5L24 8L40 13.5L24 19L8 13.5Z"
            stroke={stroke}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M11 17V32L24 38L37 32V17"
            stroke={stroke}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M17 20V30M31 20V30"
            stroke={stroke}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );

    case 1:
      return (
        <svg {...commonProps}>
          <path
            d="M31.5 7.5C24 9.5 18.5 16.2 18.5 24C18.5 32.5 25.5 39.5 34 39.5C36.5 39.5 39 39 41 38C37.2 43 30.8 45 24.5 43.5C14.5 41.2 8.2 32.2 9.8 22.2C11.4 12.8 20.2 6.2 29.8 7.2C30.4 7.2 31 7.3 31.5 7.5Z"
            fill={stroke}
          />
        </svg>
      );

    case 2:
      return (
        <svg {...commonProps}>
          <path
            d="M7 38V23L14 16L21 23V38M21 38V19L30 11L41 19V38"
            stroke={stroke}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M13 38V29H17V38M27 38V28H34V38"
            stroke={stroke}
            strokeWidth="3"
          />
        </svg>
      );

    case 3:
      return (
        <svg {...commonProps}>
          <rect
            x="7"
            y="8"
            width="34"
            height="32"
            rx="2"
            stroke={stroke}
            strokeWidth="3"
          />
          <circle
            cx="17"
            cy="18"
            r="4"
            stroke={stroke}
            strokeWidth="3"
          />
          <path
            d="M11 32C12.5 27 16 25 20 25C24 25 27.5 27 29 32"
            stroke={stroke}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M32 18L35 21L40 15"
            stroke={stroke}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 4:
      return (
        <svg {...commonProps}>
          <path
            d="M8 7H31L40 16V41H8V7Z"
            stroke={stroke}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M31 7V17H40"
            stroke={stroke}
            strokeWidth="3"
          />
          <path
            d="M15 24H33M15 31H33M15 38H27"
            stroke={stroke}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );

    case 5:
      return (
        <svg {...commonProps}>
          <path
            d="M8 10H40V39H8V10Z"
            stroke={stroke}
            strokeWidth="3"
          />
          <path
            d="M15 18H33M15 25H33M15 32H27"
            stroke={stroke}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );

    case 6:
      return (
        <svg {...commonProps}>
          <rect
            x="9"
            y="7"
            width="30"
            height="34"
            rx="2"
            stroke={stroke}
            strokeWidth="3"
          />
          <path
            d="M16 16H32M16 23H32M16 30H32"
            stroke={stroke}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="20" cy="36" r="1.5" fill={stroke} />
          <circle cx="27" cy="36" r="1.5" fill={stroke} />
        </svg>
      );

    case 7:
      return (
        <svg {...commonProps}>
          <circle
            cx="24"
            cy="14"
            r="6"
            stroke={stroke}
            strokeWidth="3"
          />
          <path
            d="M13 40C14.5 31 18 26 24 26C30 26 33.5 31 35 40"
            stroke={stroke}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );

    case 8:
      return (
        <svg {...commonProps}>
          <path
            d="M17 36V12L37 8V32"
            stroke={stroke}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="13"
            cy="36"
            r="5"
            stroke={stroke}
            strokeWidth="3"
          />
          <circle
            cx="33"
            cy="32"
            r="5"
            stroke={stroke}
            strokeWidth="3"
          />
        </svg>
      );

      case 9:
  return (
    <svg {...commonProps}>
      <path
        d="M10 9H38V39H10V9Z"
        stroke={stroke}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M15 15H33"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M15 22H33"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M15 29H28"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M24 34V39"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );

    default:
      return null;
  }
}

export default function ServiceCard({
  item,
  index,
}: ServiceCardProps) {
  return (
    <article
      className={[
        "group relative flex min-h-[255px] flex-col",
        "rounded-[0.4rem]",
        "border border-[#E3E0D9]",
        "bg-white",
        "px-7 py-7",
        "shadow-[0_1px_6px_rgba(22,21,19,0.02)]",
        "transition-all duration-300",
        "hover:-translate-y-[2px]",
        "hover:shadow-[0_8px_22px_rgba(22,21,19,0.06)]",
        "sm:min-h-[265px] sm:px-8 sm:py-8",
      ].join(" ")}
    >
      {/* Icon + Arrow */}
      <div className="mb-7 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center">
          <CourseIcon index={index} />
        </div>

        {/* Arrow */}
        <Link
          href={item.href || "/courses"}
          aria-label={`Learn more about ${item.title}`}
          className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#DDE1DE] text-[#0D463E] transition-all duration-300 group-hover:border-[#0D463E] group-hover:bg-[#0D463E] group-hover:text-[#D0A66A]"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5 15L15 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M7 5H15V13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="font-heading text-[21px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#161513] sm:text-[22px]">
          {item.title}
        </h3>

        <p className="mt-3 max-w-[500px] font-body text-[13px] font-normal leading-[1.65] tracking-[0.005em] text-[#777571] sm:text-[14px]">
          {item.description}
        </p>

        {/* Learn More */}
        <Link
          href={item.href || "/courses"}
          className="mt-auto flex w-fit items-center gap-2 pt-6 font-body text-[13px] font-medium text-[#0D706D] transition-all duration-200 hover:gap-3"
        >
          <span>Learn More</span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 10H15"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M11 6L15 10L11 14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 rounded-b-[0.4rem] bg-[#D0A66A] transition-all duration-300 group-hover:w-full" />
    </article>
  );
}