import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import HeroBackground from "./components/HeroBackground";
import { Countdown } from "./components/CountdownTimer";
import type { HeroSectionProps } from "./types";

export default function HeroSection({
  showIcon,
  icon,
  subtitle,
  title,
  description,
  buttonLabel,
  showCountdown,
  countdownTarget,
  ...backgroundProps
}: HeroSectionProps & { icon?: StaticImageData }) {

 const HeroIcon = icon;

  return (
    <section
      id="hero-section"
      className="relative z-0 grid min-h-[110lvh] w-full place-content-stretch place-items-stretch py-32"
    >
      <HeroBackground {...backgroundProps} />

      <div
        className="from-alabaster/40 to-mint-green absolute inset-0 size-full bg-linear-to-br"
        aria-hidden="true"
      />

      <div className="z-10 container flex size-full flex-col items-center justify-center gap-10">
        <div className="flex w-full max-w-[1116px] flex-col items-center justify-center gap-7 text-center">

          {showIcon && HeroIcon && (
            <div className="flex justify-center">
              <Image
                src={HeroIcon}
                alt="Hero Icon"
                className="h-9 w-fit sm:h-11"
              />
            </div>
          )}

          <div className="flex w-full flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5">

            {subtitle && (
              <h6 className="text-body-sm md:text-body-base text-caribbean-current font-heading mb-1 leading-none font-medium">
                {subtitle}
              </h6>
            )}

            <h1 className="text-heading-smd xs:text-heading-md md:text-heading-lmd lg:text-heading-lg xl:text-heading-xl text-caribbean-current font-heading leading-tight font-medium tracking-wide text-pretty">
              {title}
            </h1>

            {description && (
              <p className="text-body-base md:text-body-lg text-smoky-black/90 max-w-3xl">
                {description}
              </p>
            )}

            {showCountdown && countdownTarget && (
              <Countdown target={countdownTarget} />
            )}

          </div>
        </div>

        <div className="bg-bistre min-h-12 min-w-px sm:min-h-14 md:min-h-16"></div>

        <Button variant="primary" className="cursor-pointer">
          <span className="z-10">{buttonLabel}</span>
        </Button>

      </div>
    </section>
  );
}
