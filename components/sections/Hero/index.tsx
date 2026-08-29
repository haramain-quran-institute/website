"use client";

import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import HeroSubTitle from "./HeroSubTitle";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroCTA from "./HeroCTA";
import HeroStats from "./HeroStats";
import HeroGalleryTrigger from "./HeroGalleryTrigger";

interface HeroSectionProps {
  subtitle?: string;
  title: ReactNode;
  description: string;
  btnPrimaryText: string;
  btnSecondaryText: string;
  btnSecondaryLink: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  backgroundImg: StaticImageData;
  backgroundImgAlt: string;
  galleryImg?: StaticImageData;
  galleryImgAlt?: string;
}

export default function HeroSection({
  subtitle,
  title,
  description,
  btnPrimaryText,
  btnSecondaryText,
  btnSecondaryLink,
  stats,
  galleryImg,
  galleryImgAlt = "See Gallery",
  backgroundImg,
  backgroundImgAlt,
}: HeroSectionProps) {
  return (
    <>
      <section
        id="HeroSection"
        className="relative flex min-h-svh w-full items-center overflow-hidden"
        aria-label="Hero Section"
      >
        <Image
          src={backgroundImg}
          alt={backgroundImgAlt}
          sizes="100vw"
          priority
          fill
          className="z-0 object-cover"
          quality={95}
        />

        <div
          className="absolute inset-0 z-10 bg-gradient-to-b from-[#021C18]/80 via-[#021C18]/55 to-[#021C18]/85"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 z-10 bg-gradient-to-r from-[#000C0A]/90 via-[#000C0A]/55 via-40% to-[#BC9254]/10"
          aria-hidden="true"
        />

        <div className="container relative z-20 flex min-h-svh items-center justify-center pt-44 pb-32 md:pt-52">
          <div className="flex w-full max-w-6xl flex-col items-center text-center">
            {stats && (
              <div className="mb-8">
                <HeroStats stats={stats} />
              </div>
            )}

            <div className="flex flex-col items-center gap-5">
              {subtitle && <HeroSubTitle subtitle={subtitle} />}

              <HeroTitle title={title} />

              <HeroDescription description={description} />
            </div>

            <div className="mt-10">
              <HeroCTA
                btnPrimaryText={btnPrimaryText}
                btnSecondaryText={btnSecondaryText}
                btnSecondaryLink={btnSecondaryLink}
              />
            </div>
          </div>

          {galleryImg && (
            <div className="absolute bottom-8 right-0 hidden lg:flex lg:items-end lg:justify-end">
              <HeroGalleryTrigger
                thumbnail={galleryImg}
                thumbnailAlt={galleryImgAlt}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
