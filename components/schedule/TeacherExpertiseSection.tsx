import type { LucideIcon } from "lucide-react";
import { BookOpenCheck } from "lucide-react";

import { cn } from "@/lib/utils";

export interface TeacherExpertiseFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface TeacherExpertiseSectionProps {
  title: string;
  description: string;
  features: TeacherExpertiseFeature[];
  id?: string;
}

export default function TeacherExpertiseSection({ title, description, features, id = "teacher-expertise" }: TeacherExpertiseSectionProps) {
  return (
    <section id={id} className="w-full bg-white py-20 sm:py-24 min-[1024px]:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-medium leading-[1.06] tracking-tight text-[#0D463E] sm:text-5xl min-[1024px]:text-[58px]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-body text-base leading-7 text-[#0D463E]/62">
            {description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 min-[640px]:grid-cols-2 min-[1024px]:mt-20 min-[1024px]:grid-cols-6 min-[1024px]:gap-y-16">
          {features.slice(0, 5).map(({ title: featureTitle, description: featureDescription, icon: Icon }, index) => (
            <article
              key={featureTitle}
              className={cn(
                "relative flex min-h-[215px] flex-col items-center justify-start px-4 text-center min-[1024px]:col-span-2",
                index === 3 && "min-[1024px]:col-start-2",
              )}
            >
              {index === 0 && <BookOpenCheck className="pointer-events-none absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 text-[#0D463E]/[0.035]" strokeWidth={1} aria-hidden="true" />}
              <Icon className="relative size-12 text-[#0D6B65]" strokeWidth={1.8} />
              <h3 className="relative mt-7 max-w-sm font-heading text-[25px] font-medium leading-[1.12] text-[#0D463E]">{featureTitle}</h3>
              <p className="relative mt-4 max-w-sm font-body text-[15px] leading-6 text-[#0D463E]/62">{featureDescription}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
