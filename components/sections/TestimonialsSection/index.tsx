import VideoTestimonials from "./components/VideoTestimonials";
import TextTestimonials from "./components/TextTestimonials";
import type { TestimonialsSectionProps } from "./types";

export default function TestimonialsSection({ id = "testimonials", data }: TestimonialsSectionProps) {
  return (
    <section id={id} className="my-24 flex w-full flex-col gap-0 min-[576px]:my-28 min-[1024px]:my-40 min-[1440px]:my-44">
      <div className="container flex flex-col items-center justify-center">
        <VideoTestimonials item={data.video} />
      </div>
      <TextTestimonials testimonials={data.text.testimonials} autoScrollInterval={data.text.autoScrollInterval} />
    </section>
  );
}
