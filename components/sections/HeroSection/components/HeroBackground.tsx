"use client";

import { useState } from "react";
import Image from "next/image";
import Video from "next-video";
import type { HeroSectionWithImage, HeroSectionWithVideo } from "../types";

type HeroBackgroundProps =
  | Pick<
      HeroSectionWithImage,
      "backgroundType" | "backgroundMedia" | "backgroundMediaAlt"
    >
  | Pick<
      HeroSectionWithVideo,
      | "backgroundType"
      | "backgroundMedia"
      | "backgroundMediaAlt"
      | "fallbackImage"
    >;

export default function HeroBackground(props: HeroBackgroundProps) {
  const [videoReady, setVideoReady] = useState(false);

  if (props.backgroundType === "image") {
    return (
      <Image
        src={props.backgroundMedia}
        alt={props.backgroundMediaAlt}
        priority
        fetchPriority="high"
        loading="eager"
        fill
        className="object-cover"
        sizes="100vw"
        quality={95}
      />
    );
  }

  return (
    <div className="absolute inset-0 size-full overflow-hidden">
      {props.fallbackImage && (
        <Image
          src={props.fallbackImage}
          alt={props.backgroundMediaAlt ?? "Background"}
          fill
          priority
          placeholder="blur"
          quality={85}
          sizes="100vw"
          className={`object-cover transition-opacity duration-500 ${
            videoReady ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        />
      )}

      <Video
        src={props.backgroundMedia}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className="absolute inset-0 size-full object-cover [--media-object-fit:cover] [--media-object-position:center]"
        style={{ aspectRatio: "none" }}
        preload="auto"
        onCanPlay={() => setVideoReady(true)}
        onLoadedData={() => setVideoReady(true)}
        onPlay={() => setVideoReady(true)}
      />
    </div>
  );
}
