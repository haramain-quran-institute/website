import IntroSubSection from "./components/Intro";
import StatsSubSection from "./components/StatsList";
import type { IntroStatsSectionProps } from "./types/index";

export default function IntroStatsSection({
  id,
  title,
  description,
  image,
  imageAlt,
  stats,
  buttonLabel,
}: IntroStatsSectionProps) {
  return (
    <section id={id} className="my-32 w-full sm:my-36 md:my-40 lg:my-44">
      <div className="container flex flex-col items-center justify-center gap-14">
        <IntroSubSection
          title={title}
          description={description}
          image={image}
          imageAlt={imageAlt}
          buttonLabel={buttonLabel}
        />
        <StatsSubSection stats={stats} />
      </div>
    </section>
  );
}
