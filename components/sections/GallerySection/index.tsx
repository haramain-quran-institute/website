import GalleryCarousel from "./components/GalleryCarousel";
import type { GallerySectionProps } from "./types";

export default function GallerySection({
  id,
  title,
  description,
  slides,
  ratio = 16 / 9,
}: GallerySectionProps) {
  return (
    <section id={id} className="my-24 w-full sm:my-28 min-[1024px]:my-36">
      <div className="container flex flex-col items-center justify-center gap-14 overflow-hidden">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex w-full flex-col gap-3">
            <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight text-[#0D463E] sm:text-5xl min-[1024px]:text-[58px]">
  <span>Our </span>

  <span
    className="font-normal italic"
    style={{
      fontFamily: "'Libre Baskerville', serif",
    }}
  >
    Students
  </span>

  <span> Gallery</span>
</h2>

            <p className="mx-auto max-w-2xl font-body text-[15px] leading-7 tracking-tight text-[#0D463E]/70 sm:text-base">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-2 w-full">
          <GalleryCarousel slides={slides} ratio={ratio} />
        </div>
      </div>
    </section>
  );
}
