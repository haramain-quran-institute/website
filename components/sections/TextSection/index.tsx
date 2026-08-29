import DiamondIcon from "@/assets/Icons/Diamond";
import { Button } from "@/components/ui/button";
import type { TextSectionProps } from "./types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FadeInSection } from "../shared/FadeInSection";

export default function TextSection({
  id,
  heading = "h2",
  align = "center",
  showIcon = true,
  eyebrow,
  title,
  description,
  noMargin = false,
  whiteBg = false,
  bgClassName,
  className,
  cta,
}: TextSectionProps) {
  const Title = heading;

  const titleScale =
    heading === "h3"
      ? "text-heading-sm xs:text-heading-smd lg:text-heading-md xl:text-heading-lmd"
      : "text-heading-smd xs:text-heading-md lg:text-heading-lmd xl:text-heading-lg";

  const wrapAlign =
    align === "left"
      ? "items-start text-left"
      : align === "right"
        ? "items-end text-right"
        : "items-center text-center";

  const innerAlign =
    align === "left" ? "" : align === "right" ? "ml-auto" : "mx-auto";

  const marginClasses = noMargin ? "my-0" : "my-32 sm:my-36 md:my-40 lg:my-44";

  const paddingClasses = "py-32 sm:py-36 md:py-40 lg:py-44";

  const hasHref = Boolean(cta?.href);
  const showGlass = whiteBg && Boolean(cta);

  return (
    <section
      id={id}
      className={cn(
        "w-full",
        whiteBg ? "bg-white" : "bg-transparent",
        whiteBg ? paddingClasses : marginClasses,
        bgClassName,
        className,
      )}
    >
      <div className="container">
        <FadeInSection>
          <div
            className={cn(
              "flex flex-col gap-9",
              wrapAlign,
              showGlass &&
                "rounded-3xl bg-white/60 px-6 py-12 ring-1 ring-black/5 backdrop-blur-md sm:px-10",
            )}
          >
            {showIcon && (
              <DiamondIcon
                className="text-caribbean-current h-11 w-11"
                aria-hidden
              />
            )}

            <div
              className={cn(
                "flex w-full max-w-prose flex-col gap-3",
                innerAlign,
              )}
            >
              {eyebrow && (
                <h6 className="text-body-sm md:text-body-base text-caribbean-current font-heading leading-none font-medium">
                  {eyebrow}
                </h6>
              )}

              <Title
                className={cn(
                  titleScale,
                  "text-smoky-black font-heading leading-tight font-normal tracking-wide text-pretty",
                )}
              >
                {title}
              </Title>

              {description && (
                <div className="text-body-xs xs:text-body-sm sm:text-body-base font-body text-smoky-black/70 leading-relaxed font-normal tracking-tight">
                  {description}
                </div>
              )}
            </div>

            {cta && (
              <Button
                variant="primary"
                asChild={hasHref}
                external={cta.external}
                className="border-caribbean-current/10 cursor-pointer border bg-white"
              >
                {hasHref ? (
                  <Link href={cta.href!} prefetch={false}>
                    <span className="z-10">{cta.label}</span>
                  </Link>
                ) : (
                  <span className="z-10">{cta.label}</span>
                )}
              </Button>
            )}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
