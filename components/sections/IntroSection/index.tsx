import type { IntroSectionProps } from "./types";

export default function IntroSection({
  id,
  title,
  description,
  eyebrow,
  compactBottom = false,
}: IntroSectionProps) {
  return (
    <section
      id={id}
      className={`w-full bg-[#FBF6EF] pt-16 md:pt-20 lg:pt-28 ${
        compactBottom
          ? "pb-7 md:pb-8 lg:pb-10"
          : "pb-16 md:pb-20 lg:min-h-[520px] lg:pb-24"
      }`}
    >
      <div className="container mx-auto flex flex-col items-center text-center">
        {eyebrow && (
          <p className="text-caribbean-current font-heading mb-4 text-[17px] leading-tight">
            {eyebrow}
          </p>
        )}

        <h2 className="text-caribbean-current font-heading text-[22px] font-semibold leading-tight">
          {title ? (
            title
          ) : (
            <>
              Special{" "}
              <span className="font-serif font-normal italic">Message</span>{" "}
              For All!
            </>
          )}
        </h2>

        {description && (
          <p className="text-caribbean-current mt-6 max-w-[860px] font-heading text-[20px] font-normal leading-[1.6] sm:text-[22px] min-[1024px]:text-[24px]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
