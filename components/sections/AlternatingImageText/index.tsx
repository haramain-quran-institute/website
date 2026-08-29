import DiamondIcon from "@/assets/Icons/Diamond";
import ImageText from "../ImageTextSection";
import type { AlternatingImageTextProps } from "./types";

export default function AlternatingImageText({
  id,
  title,
  description,
  items,
  startReversed = false,
  defaultHeading = "h3",
  defaultAspectRatio = 10 / 8,
}: AlternatingImageTextProps) {
  return (
    <section id={id} className="my-32 w-full sm:my-36 md:my-40 lg:my-44">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-9 text-center">
          <DiamondIcon
            className="text-caribbean-current h-11 w-11"
            aria-hidden
          />
          <div className="flex max-w-3xl flex-col items-center justify-center gap-3">
            <h2 className="text-heading-smd xs:text-heading-md lg:text-heading-lmd xl:text-heading-lg text-smoky-black font-heading leading-tight font-normal tracking-wide text-pretty">
              {title}
            </h2>
            {description ? (
              <p className="text-body-xs xs:text-body-sm sm:text-body-base font-body text-smoky-black/70 max-w-prose leading-relaxed font-normal tracking-tight">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-12">
        {items.map((item, index) => (
          <ImageText
            key={item.id ?? index}
            image={item.image}
            imageAlt={item.imageAlt}
            aspectRatio={item.aspectRatio ?? defaultAspectRatio}
            roundedImage={item.roundedImage ?? false}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            buttonLabel={item.buttonLabel}
            reverse={
              item.reverse ??
              (startReversed ? index % 2 === 0 : index % 2 === 1)
            }
            heading={item.heading ?? defaultHeading}
            noMargin
          />
        ))}
      </div>
    </section>
  );
}
