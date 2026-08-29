"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import type { VideoTestimonialCardProps } from "../types";

export default function VideoTestimonialCard({
  item,
  activeIndex,
  totalVideos,
  onPlayClick,
}: {
  item: VideoTestimonialCardProps;
  activeIndex: number;
  totalVideos: number;
  onPlayClick: () => void;
}) {
  const getIndex = (offset: number) => (activeIndex + offset) % totalVideos;
  const frontThumbnail = item.videoThumbnail[getIndex(0)];
  const middleThumbnail = item.videoThumbnail[getIndex(1)];
  const backThumbnail = item.videoThumbnail[getIndex(2)];
  const responsiveSizes = "(min-width: 1024px) 504px, (min-width: 640px) 470px, calc(100vw - 48px)";

  if (!frontThumbnail) return null;

  return (
    <div className="relative aspect-[4/5] w-full min-w-0">
      {backThumbnail && (
        <div className="absolute top-4 left-4 z-0 h-full w-full overflow-hidden rounded-[0.8rem] bg-[#0D463E]/10 transition-all duration-500 ease-out">
          <Image src={backThumbnail} alt="" fill sizes={responsiveSizes} className="object-cover opacity-25" aria-hidden="true" />
        </div>
      )}

      {middleThumbnail && (
        <div className="absolute top-2 left-2 z-10 h-full w-full overflow-hidden rounded-[0.8rem] bg-[#0D463E] transition-all duration-500 ease-out">
          <Image src={middleThumbnail} alt="" fill sizes={responsiveSizes} className="object-cover opacity-35" aria-hidden="true" />
        </div>
      )}

      <button
        type="button"
        onClick={onPlayClick}
        className="group absolute inset-0 z-20 size-full cursor-pointer overflow-hidden rounded-[0.8rem] bg-[#0D463E] text-left shadow-2xl transition-all duration-500 ease-out"
        aria-label="Play student testimonial"
      >
        <Image
          src={frontThumbnail}
          alt="Student testimonial"
          fill
          sizes={responsiveSizes}
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D463E] via-[#0D463E]/10 to-transparent" />
        <div className="absolute right-0 bottom-0 left-0 p-7">
          <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-[#D0A86C] text-[#0D463E] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FBF6EF]">
            <Play className="size-5 fill-current" />
          </div>
          <h3 className="font-body text-xl font-semibold leading-tight !text-[#FBF6EF]">{item.authorName}</h3>
          <p className="mt-2 font-body text-sm tracking-wide !text-[#FBF6EF]/75">{item.authorTitle}</p>
        </div>
      </button>
    </div>
  );
}
