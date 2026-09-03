"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import VideoTestimonialCard from "./VideoTestimonialCard";
import VideoTestimonialDialog from "./VideoTestimonialDialog";
import type { VideoTestimonialsData } from "../types";

const youtubeTestimonials = ["R3JpYbTgJjg", "XEn66FxVgH8", "L67IjYgMK5I"];

export default function VideoTestimonials({ item }: { item: VideoTestimonialsData }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  const nextVideo = () => {
    setActiveVideo((current) => current === youtubeTestimonials.length - 1 ? 0 : current + 1);
  };

  const previousVideo = () => {
    setActiveVideo((current) => current === 0 ? youtubeTestimonials.length - 1 : current - 1);
  };

  return (
    <>
      <section id="student-testimonials" className="w-full bg-[#FBF6EF] py-24 sm:py-28 lg:py-[106px]">
        <div className="mx-auto w-full max-w-[1490px] px-6 lg:px-8">
          <div className="grid items-center gap-16 min-[992px]:grid-cols-12 min-[992px]:gap-20 min-[1200px]:gap-28">
            <div className="min-[992px]:col-span-7 min-[992px]:-translate-x-4">
              <div className="flex w-full flex-col items-start gap-10">
                <div className="flex w-full flex-col gap-4">
                  <h2 className="max-w-4xl font-heading text-5xl font-medium leading-[1.05] tracking-tight text-[#0D463E] sm:text-6xl lg:text-[3rem] xl:text-[5rem]">
                    What Our <span className="font-accent font-normal italic">Students</span> Say
                  </h2>
                  <p className="mt-2 max-w-2xl font-body text-base font-normal leading-7 tracking-tight text-[#0D463E] sm:text-lg sm:leading-8">
                    Hear directly from our <strong className="font-semibold">students</strong> and <strong className="font-semibold">families</strong> sharing their <strong className="font-semibold">Quran</strong> learning journey with qualified teachers, flexible timings, and dedicated support.
                  </p>
                </div>
                <Button type="button" variant="primaryReverse" onClick={nextVideo} className="mt-2">
                  {item.buttonLabel}
                </Button>
              </div>
            </div>

            <div className="flex justify-center min-[992px]:col-span-5 min-[992px]:translate-x-6 min-[992px]:justify-end">
              <div className="w-full max-w-[504px]">
                <VideoTestimonialCard
                  item={item.testimonial}
                  activeIndex={activeVideo}
                  totalVideos={youtubeTestimonials.length}
                  onPlayClick={() => setDialogOpen(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoTestimonialDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        videoId={youtubeTestimonials[activeVideo]}
        currentIndex={activeVideo}
        onPrevious={previousVideo}
        onNext={nextVideo}
        onSelect={setActiveVideo}
      />
    </>
  );
}
