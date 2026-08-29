"use client";

import { useCallback, useEffect, useState } from "react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GalleryLightboxDialog from "./GalleryLightboxDialog";
import type { GallerySlide, GalleryMedia } from "../types";
import BalancedElegance from "../layouts/BalancedElegance";
import ClassicAsymmetric from "../layouts/ClassicAsymmetric";
import EditorialGrid from "../layouts/EditorialGrid";
import LuxuryShowcase from "../layouts/LuxuryShowcase";
import ModernMosaic from "../layouts/ModernMosaic";
import QuadHarmony from "../layouts/QuadHarmony";

export default function GalleryCarousel({
  slides,
  ratio,
}: {
  slides: GallerySlide[];
  ratio: number;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxMedia, setLightboxMedia] = useState<GalleryMedia[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const openLightbox = (media: GalleryMedia[], index: number) => {
    const filtered = media
      .map((m, originalIndex) => ({ ...m, originalIndex }))
      .filter((m) => m.type === "image" || m.type === "video");

    const filteredIndex = filtered.findIndex(
      (m) => m.originalIndex === index,
    );

    if (filteredIndex === -1) return;

    setLightboxMedia(filtered);
    setLightboxIndex(filteredIndex);
    setLightboxOpen(true);
  };

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const renderLayout = (slide: GallerySlide) => {
    const props = {
      media: slide.media,
      onOpen: (index: number) => openLightbox(slide.media, index),
    };

    switch (slide.layout) {
      case "BalancedElegance":
        return <BalancedElegance {...props} />;

      case "ClassicAsymmetric":
        return <ClassicAsymmetric {...props} />;

      case "EditorialGrid":
        return <EditorialGrid {...props} />;

      case "LuxuryShowcase":
        return <LuxuryShowcase {...props} />;

      case "ModernMosaic":
        return <ModernMosaic {...props} />;

      case "QuadHarmony":
        return <QuadHarmony {...props} />;

      default:
        return null;
    }
  };

  const mobileRatio = ratio * 1.4;

  if (slides.length === 1) {
    return (
      <>
        <AspectRatio
          ratio={mobileRatio}
          className="md:ratio-[var(--desktop)] w-full"
          style={{ ["--desktop" as any]: ratio }}
        >
          {renderLayout(slides[0])}
        </AspectRatio>

        <GalleryLightboxDialog
          media={lightboxMedia}
          open={lightboxOpen}
          onOpenChange={setLightboxOpen}
          initialIndex={lightboxIndex}
        />
      </>
    );
  }

  return (
    <>
      <div className="relative w-full overflow-visible">
        <div className="relative w-full overflow-visible">
          <div
            ref={emblaRef}
            className="overflow-hidden rounded-lg"
          >
            <div className="flex">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%]"
                >
                  <AspectRatio
                    ratio={mobileRatio}
                    className="md:ratio-[var(--desktop)] w-full"
                    style={{ ["--desktop" as any]: ratio }}
                  >
                    {renderLayout(slide)}
                  </AspectRatio>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 z-10 overflow-visible">
            {/* Left Arrow */}
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous gallery slide"
              style={{
                backgroundColor: "#ffffff",
                opacity: 1,
              }}
              className="
                pointer-events-auto
                absolute
                left-0
                top-[calc(50%+18px)]
                z-[9999]
                flex
                size-[36px]
                -translate-x-[55%]
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                text-caribbean-current
                shadow-[0_4px_14px_rgba(0,0,0,0.14)]
                transition-transform
                duration-200
                hover:scale-105
              "
            >
              <ChevronLeft
                className="size-[18px]"
                strokeWidth={2.5}
                style={{
                  opacity: 1,
                }}
              />
            </button>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next gallery slide"
              style={{
                backgroundColor: "#ffffff",
                opacity: 1,
              }}
              className="
                pointer-events-auto
                absolute
                right-0
                top-[calc(50%+18px)]
                z-[9999]
                flex
                size-[36px]
                translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                text-caribbean-current
                shadow-[0_4px_14px_rgba(0,0,0,0.14)]
                transition-transform
                duration-200
                hover:scale-105
              "
            >
              <ChevronRight
                className="size-[18px]"
                strokeWidth={2.5}
                style={{
                  opacity: 1,
                }}
              />
            </button>
          </div>
        </div>

        {/* Bottom slide switcher */}
        <div
          className="
            relative
            z-[9999]
            mt-9
            flex
            items-center
            justify-center
            gap-[6px]
          "
        >
          {slides.map((_, index) => {
            const active = index === selectedIndex;

            return (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to gallery slide ${index + 1}`}
                style={{
                  width: active ? "27px" : "6px",
                  height: "6px",
                  minWidth: active ? "27px" : "6px",
                  minHeight: "6px",
                  padding: 0,
                  margin: 0,
                  border: "none",
                  borderRadius: "9999px",
                  backgroundColor: active
                    ? "#0D6B65"
                    : "#CFCFCF",
                  opacity: 1,
                  display: "block",
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
      </div>

      <GalleryLightboxDialog
        media={lightboxMedia}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        initialIndex={lightboxIndex}
      />
    </>
  );
}