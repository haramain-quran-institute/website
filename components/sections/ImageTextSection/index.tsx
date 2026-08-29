import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import type { ImageTextProps } from "./types";
import { FadeInSection } from "../shared/FadeInSection";
import { cn } from "@/lib/utils";

export default function ImageText({
  image,
  imageAlt,
  aspectRatio = 10 / 8,
  roundedImage = false,
  title,
  subtitle,
  description,
  buttonLabel,
  reverse = false,
  heading = "h2",
  noMargin = false,
}: ImageTextProps) {
  const TitleTag = heading;

  const titleClass =
    heading === "h3"
      ? "text-heading-sm xs:text-heading-smd lg:text-heading-md xl:text-heading-lmd"
      : "text-heading-smd xs:text-heading-md lg:text-heading-lmd xl:text-heading-lg";

  return (
    <section
      className={cn(!noMargin && "my-32 sm:my-36 md:my-40 lg:my-44", "w-full")}
    >
      <div className="container grid grid-cols-1 items-center gap-9 lg:grid-cols-12">
        <div
          className={cn("lg:col-span-6", reverse ? "lg:order-2" : "lg:order-1")}
        >
          <FadeInSection delay={reverse ? 0.1 : 0}>
            <div
              className={cn(
                "relative",
                roundedImage &&
                  "rounded-full bg-white/20 p-1 ring-1 ring-white/30 backdrop-blur-sm",
              )}
            >
              <AspectRatio
                ratio={aspectRatio}
                className={roundedImage ? "overflow-hidden rounded-full" : ""}
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </AspectRatio>
            </div>
          </FadeInSection>
        </div>

        <div
          className={cn("lg:col-span-6", reverse ? "lg:order-1" : "lg:order-2")}
        >
          <FadeInSection delay={reverse ? 0 : 0.1}>
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-3">
                {subtitle && (
                  <h6 className="text-body-sm md:text-body-base text-caribbean-current font-heading">
                    {subtitle}
                  </h6>
                )}

                <TitleTag
                  className={cn(
                    titleClass,
                    "font-heading text-smoky-black tracking-wide",
                  )}
                >
                  {title}
                </TitleTag>

                {description.map((desc, i) => (
                  <p
                    key={i}
                    className="text-body-sm text-smoky-black/70 leading-relaxed"
                  >
                    {desc}
                  </p>
                ))}
              </div>

              {buttonLabel && (
                <Button
                  variant="primary"
                  className="border-caribbean-current/10 border bg-white"
                >
                  {buttonLabel}
                </Button>
              )}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
