import FeatureGrid from "./components/FeatureGrid";
import type { FeaturesGridSectionProps } from "./types";

export default function FeaturesGridSection({
  id,
  title,
  description,
  features,
  noMargin = false,
  noBg = false,
  compactTop = false,
}: FeaturesGridSectionProps) {
  const marginClasses = noMargin ? "my-0" : "my-28 sm:my-32 md:my-36 lg:my-40";

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${
        noBg ? "bg-transparent" : "bg-[#FBF6EF]"
      } ${
        !noBg
          ? compactTop
            ? "pb-24 pt-10 sm:pb-28 sm:pt-10 md:pb-32 md:pt-12 lg:pb-36 lg:pt-14"
            : "py-24 sm:py-28 md:py-32 lg:py-36"
          : marginClasses
      }`}
    >
      <div className="container relative z-10 flex flex-col items-center">
        {/* Heading */}
        <div className="flex w-full flex-col items-center justify-center text-center">
          <h2 className="font-heading text-[42px] font-medium leading-[1.05] tracking-tight text-[#0D463E] sm:text-[52px]">
            {title === "How to Start" ? (
              <>
                How to{" "}
                <span className="font-['Libre_Baskerville'] italic font-normal">
                  Start?
                </span>
              </>
            ) : (
              title
            )}
          </h2>

          <p className="font-body mt-5 max-w-4xl text-[16px] font-normal leading-7 tracking-tight text-[#0D463E]">
            {description}
          </p>
        </div>

        {/* 3 Steps */}
        <FeatureGrid features={features.slice(0, 3)} />
      </div>
    </section>
  );
}
