import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { IntroStatsSectionProps } from "../types";

type IntroProps = Pick<
  IntroStatsSectionProps,
  "title" | "description" | "image" | "imageAlt" | "buttonLabel"
>;

export default function Intro({
  title,
  description,
  image,
  imageAlt,
  buttonLabel,
}: IntroProps) {
  return (
    <div className="grid w-full grid-cols-1 place-items-center gap-10 min-[1024px]:grid-cols-12 min-[1024px]:gap-14">
      <div className="flex flex-col items-start justify-center gap-8 min-[1024px]:col-span-7">
        <Sparkles className="h-11 w-11 text-[#0D706D]" aria-hidden />
        <div className="flex w-full flex-col gap-3">
          <h2 className="max-w-3xl font-heading text-4xl font-medium leading-[1.05] tracking-tight text-[#0D463E] text-pretty sm:text-5xl min-[1024px]:text-[58px]">
            {title}
          </h2>
          <p className="max-w-2xl font-body text-[15px] font-normal leading-7 tracking-tight text-[#0D463E]/70 sm:text-base">
            {description}
          </p>
        </div>

        <div className="min-h-14 min-w-px bg-[#B08242]" />

        {buttonLabel && (
          <Button asChild variant="primaryReverse">
            <Link href="/book-free-trial">{buttonLabel}</Link>
          </Button>
        )}
      </div>

      <div className="w-full min-[1024px]:col-span-5">
        <Image
          src={image}
          alt={imageAlt}
          className="aspect-[4/3] w-full rounded-[4px] object-cover min-[1024px]:aspect-[4/5]"
          quality={85}
          priority={false}
        />
      </div>
    </div>
  );
}
