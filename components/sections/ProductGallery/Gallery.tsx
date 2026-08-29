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
    loading?: "lazy" | "eager";
  }[];
  ratio?: number;
}

function GalleryContainer({ images, ratio }: GalleryContainerProps) {
  const { openGalleryPopup } = useContext(GalleryPopupContext);

  return (
    <AspectRatio ratio={ratio} className="overflow-hidden rounded-sm">
      <div className="relative h-full w-full">
        <div className="grid h-full w-full grid-cols-6 grid-rows-4 gap-1 absolute inset-0">
          <div className="relative col-span-4 row-span-4">
            <Image
              src={images[0]?.imgSrc as StaticImageData}
              alt={images[0]?.altText as string}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
            />
            <Button onClick={openGalleryPopup} variant={"primary"} className="absolute bottom-4 right-4">
              Show All
            </Button>
          </div>
          <div className="relative col-start-5">
            <Image
              src={images[1]?.imgSrc as StaticImageData}
              alt={images[1]?.altText as string}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
            />
          </div>
          <div className="relative col-start-6">
            <Image
              src={images[2]?.imgSrc as StaticImageData}
              alt={images[2]?.altText as string}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
            />
          </div>
          <div className="relative col-start-5 row-start-2">
            <Image
              src={images[3]?.imgSrc as StaticImageData}
              alt={images[3]?.altText as string}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
            />
          </div>
          <div className="relative col-start-6 row-start-2">
            <Image
              src={images[4]?.imgSrc as StaticImageData}
              alt={images[4]?.altText as string}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
            />
          </div>
          <div className="relative col-start-5 row-start-3">
            <Image
              src={images[5]?.imgSrc as StaticImageData}
              alt={images[5]?.altText as string}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
            />
          </div>
          <div className="relative col-start-6 row-start-3">
            <Image
              src={images[6]?.imgSrc as StaticImageData}
              alt={images[6]?.altText as string}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
            />
          </div>
          <div className="relative col-start-5 row-start-4">
            <Image
              src={images[7]?.imgSrc as StaticImageData}
              alt={images[7]?.altText as string}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
            />
          </div>
          <div className="relative col-start-6 row-start-4">
            <Image
              src={images[8]?.imgSrc as StaticImageData}
              alt={images[8]?.altText as string}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
            />
          </div>
        </div>
      </div>
    </AspectRatio>
  );
}

export default GalleryContainer;
