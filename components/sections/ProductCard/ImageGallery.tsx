"use client";

import { useContext } from "react";

import Image, { StaticImageData } from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { GalleryPopupContext } from "@/context/GalleryPopupContext";

import { Images } from "lucide-react";

interface GalleryContainerProps {
  images: {
    imgSrc: StaticImageData;
    altText: string;
  }[];
  ratio?: number;
}

function GalleryContainer({ images, ratio }: GalleryContainerProps) {
  const { openGalleryPopup } = useContext(GalleryPopupContext);
  return (
    <AspectRatio ratio={ratio} className="overflow-hidden rounded-sm p-3 pb-4 shadow-md">
      <div className="relative h-full w-full">
        <div className="absolute inset-0 grid grid-cols-1 grid-rows-3 gap-1">
          {/* Top image */}
          <div className="relative row-span-2">
            <div className="absolute inset-0">
              <Image
                src={images[0].imgSrc}
                alt={images[0].altText}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom section */}
          <div className="relative row-start-3">
            <div className="relative h-full grid grid-rows-2 grid-cols-6 gap-1">
              {images.slice(1, 13).map((image, index) => (
                <div key={index} className="relative">
                  <div className="absolute inset-0">
                    <Image
                      src={image.imgSrc}
                      alt={image.altText}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Overlay containers */}
            <div className="absolute inset-0 bg-OnyxBlack-20 pointer-events-none" aria-hidden="true" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-OnyxBlack-100 from-10% to-OnyxBlack-20 pointer-events-none"
              aria-hidden="true"
            />
            {/* Bottom images grid */}
            <div className="absolute flex w-full h-fit py-8 items-center justify-center bottom-0">
              <Button onClick={openGalleryPopup} variant={"primary"} className="gap-2 !text-button_base">
                <Images size={16} /> See All Images
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AspectRatio>
  );
}

export default GalleryContainer;
