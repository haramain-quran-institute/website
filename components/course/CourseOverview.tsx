import Image from "next/image";
import {
  BadgePercent,
  CalendarRange,
  CircleDollarSign,
  UserRoundCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import overviewImage from "@/assets/gallery-1.jpg";
import type { CoursePageData } from "@/data/course-pages";

export interface OverviewCounter {
  value: string;
  label: string;
  icon: LucideIcon;
}

const courseCounters: OverviewCounter[] = [
  { value: "1-to-1", label: "Live Online Classes", icon: UserRoundCheck },
  { value: "5", label: "Flexible Weekly Plans", icon: CalendarRange },
  { value: "4", label: "Supported Currencies", icon: CircleDollarSign },
  { value: "20%", label: "Yearly Plan Saving", icon: BadgePercent },
];

interface OverviewCompositionProps {
  title: string;
  description: string;
  imageAlt: string;
  id?: string;
  counters?: OverviewCounter[];
}

export function OverviewComposition({
  title,
  description,
  imageAlt,
  id = "course-overview",
  counters = courseCounters,
}: OverviewCompositionProps) {
  return (
    <section id={id} className="w-full bg-[#FBF6EF] py-20 sm:py-24 min-[1024px]:py-28">
      <div className="container">
        <div className="grid items-center gap-12 min-[1024px]:grid-cols-[1.08fr_0.92fr] min-[1024px]:gap-20">
          <div className="max-w-3xl">
            <span className="block size-5 rotate-45 bg-[#0D6B65]" aria-hidden="true" />
            <h2 className="mt-8 font-heading text-4xl font-medium leading-[1.08] tracking-tight text-[#0D463E] sm:text-5xl min-[1024px]:text-[54px]">
              {title}
            </h2>
            <p className="mt-6 max-w-2xl font-body text-base leading-8 text-[#0D463E]/68 sm:text-[17px]">
              {description}
            </p>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[410px] overflow-hidden">
            <Image
              src={overviewImage}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="scale-[1.45] object-cover object-[100%_37%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#0D463E]/[0.06]" aria-hidden="true" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-[#0D463E]/10 pt-12 min-[768px]:grid-cols-4 min-[1024px]:mt-20 min-[1024px]:gap-10 min-[1024px]:pt-14">
          {counters.map(({ value, label, icon: Icon }) => (
            <article key={label} className="border-b border-[#0D463E]/10 pb-7">
              <Icon className="size-8 text-[#0D6B65]" strokeWidth={1.8} />
              <p className="mt-5 font-heading text-3xl font-medium leading-none text-[#0D463E] min-[1024px]:text-[34px]">
                {value}
              </p>
              <p className="mt-3 font-body text-xs leading-5 text-[#0D463E]/55 sm:text-sm">
                {label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CourseOverview({ course }: { course: CoursePageData }) {
  return (
    <OverviewComposition
      title={course.overviewTitle}
      description={course.overviewDescription}
      imageAlt={`${course.title} course overview`}
    />
  );
}
