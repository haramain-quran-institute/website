import Image, { type StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";

import defaultImage from "@/assets/gallery-1.jpg";

export interface AvailabilityFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface AvailabilityOverviewProps {
  title: string;
  description: string;
  features: AvailabilityFeature[];
  imageAlt: string;
  image?: StaticImageData;
  id?: string;
}

export default function AvailabilityOverview({
  title,
  description,
  features,
  imageAlt,
  image = defaultImage,
  id = "global-availability",
}: AvailabilityOverviewProps) {
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
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="scale-[1.45] object-cover object-[100%_37%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#0D463E]/[0.06]" aria-hidden="true" />
          </div>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-10 border-t border-[#0D463E]/10 pt-12 sm:grid-cols-2 min-[1024px]:mt-20 min-[1024px]:grid-cols-3 min-[1024px]:gap-y-12 min-[1024px]:pt-14">
          {features.slice(0, 6).map(({ title: featureTitle, description: featureDescription, icon: Icon }) => (
            <article key={featureTitle} className="border-b border-[#0D463E]/10 pb-8">
              <Icon className="size-8 text-[#0D6B65]" strokeWidth={1.8} />
              <h3 className="mt-5 font-heading text-[23px] font-medium leading-tight text-[#0D463E]">
                {featureTitle}
              </h3>
              <p className="mt-3 max-w-sm font-body text-sm leading-6 text-[#0D463E]/60">
                {featureDescription}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
