"use client";
import Image, { StaticImageData } from "next/image";
import { useContext } from "react";

import { Images } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { GalleryPopupContext } from "@/context/GalleryPopupContext";

interface GalleryTriggerProps {
  thumbnail: StaticImageData;
  thumbnailAlt: string;
}

const HeroGalleryTrigger: React.FC<GalleryTriggerProps> = ({ thumbnail, thumbnailAlt }) => {
  const { openGalleryPopup } = useContext(GalleryPopupContext);

  return (
    <div
      className="group flex cursor-pointer flex-row items-center overflow-hidden rounded-xl border border-OnyxBlack-100 bg-gradient-to-r from-OnyxBlack-100 to-OnyxBlack-20 transition"
      onClick={openGalleryPopup}
    >
      <div className="flex flex-row items-center gap-2 p-2 text-PearlWhite">
        <div className="flex w-4">
          <Images />
        </div>
        <span className="text-[13px] leading-none sm:text-body_xxxs">See Gallery</span>
      </div>
      <div className="h-full w-14 transition group-hover:scale-105 sm:w-16">
        <AspectRatio ratio={4 / 3}>
          <Image src={thumbnail} alt={thumbnailAlt} sizes="64px" className="h-full object-cover"></Image>
        </AspectRatio>
      </div>
    </div>
  );
};

export default HeroGalleryTrigger;
