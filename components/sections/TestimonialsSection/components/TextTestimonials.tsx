"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TextTestimonialsData } from "../types";

export default function TextTestimonials({
  testimonials,
}: TextTestimonialsData) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full bg-[#FBF6EF] py-8 sm:py-10">
      <div className="mx-auto w-full max-w-[1664px] px-6 sm:px-10 lg:px-16">
        {/* TESTIMONIAL AREA */}
        <div className="relative mx-8">
          {/* TESTIMONIAL SLIDER */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-3 flex">
              {testimonials.map((testimonial) => {
                const [country] =
                  testimonial.authorTitle?.split(" · ") ?? [];

                return (
                  <div
                    key={testimonial.id}
                    className="min-w-0 flex-[0_0_100%] pl-3 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  >
                    <div className="flex h-[125px] w-full flex-col justify-center rounded-[0.4rem] bg-[#0D463E] px-6 py-4 shadow-sm">
                      {/* STAR + NAME + COUNTRY */}
                      <div className="flex min-w-0 items-center gap-2">
                        <div className="flex shrink-0 items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="size-3 fill-[#D0A86C] text-[#D0A86C]"
                            />
                          ))}
                        </div>

                        <span className="truncate font-body text-xs font-semibold text-[#FBF6EF]">
                          {testimonial.authorName}
                        </span>

                        {country && (
                          <>
                            <span className="shrink-0 text-xs text-[#FBF6EF]/40">
                              —
                            </span>

                            <span className="truncate font-body text-xs text-[#FBF6EF]/65">
                              {country}
                            </span>
                          </>
                        )}
                      </div>

                      {/* TESTIMONIAL */}
                      <p className="mt-3 line-clamp-3 max-w-full font-body text-[14px] leading-[1.5rem] text-[#FBF6EF]/90">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* LEFT ARROW — ON TESTIMONIAL EDGE */}
          <Button
            type="button"
            variant="iconOnly"
            size="iconOnly"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 !h-9 !w-9 -translate-x-1/2 -translate-y-1/2 rounded-full !border-0 !bg-white !shadow-md hover:!bg-white"
          >
            <ChevronLeft className="size-4 !text-[#0D463E]" />
          </Button>

          {/* RIGHT ARROW — ON TESTIMONIAL EDGE */}
          <Button
            type="button"
            variant="iconOnly"
            size="iconOnly"
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 !h-9 !w-9 translate-x-1/2 -translate-y-1/2 rounded-full !border-0 !bg-white !shadow-md hover:!bg-white"
          >
            <ChevronRight className="size-4 !text-[#0D463E]" />
          </Button>
        </div>
      </div>
    </div>
  );
}
