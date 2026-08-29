import DiamondIcon from "@/assets/Icons/Diamond";
import PositionRow from "./components/PositionRow";
import type { OpenPositionsSectionProps } from "./types";

export default function OpenPositionsSection({
  id,
  eyebrow,
  title,
  description,
  positions,
}: OpenPositionsSectionProps) {
  return (
    <section id={id} className="my-32 w-full sm:my-36 md:my-40 lg:my-44">
      <div className="container flex flex-col gap-14">
        <div className="flex flex-col items-center justify-center gap-9 text-center">
          <DiamondIcon
            className="text-caribbean-current h-11 w-11"
            aria-hidden
          />
          <div className="flex max-w-3xl flex-col gap-3">
            {eyebrow && (
              <h6 className="text-body-sm md:text-body-base text-caribbean-current font-heading leading-none font-medium">
                {eyebrow}
              </h6>
            )}
            <h2 className="text-heading-smd xs:text-heading-md lg:text-heading-lmd xl:text-heading-lg font-heading text-smoky-black leading-tight font-normal tracking-wide text-pretty">
              {title}
            </h2>
            {description && (
              <p className="text-body-xs xs:text-body-sm sm:text-body-base font-body text-smoky-black/70 leading-relaxed font-normal tracking-tight">
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          {positions.map((position) => (
            <PositionRow
              key={position.id}
              title={position.title}
              description={position.description}
              meta={position.meta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
