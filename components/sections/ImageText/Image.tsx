import Image, { StaticImageData } from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImageContainerProps {
  imgSrc: StaticImageData;
  altText: string;
  caption?: string;
  ratio?: number;
}

function ImageContainer({ imgSrc, altText, caption, ratio }: ImageContainerProps) {
  return (
    <figure className="flex flex-col gap-1 p-3 pb-4 shadow-md">
      <div className="relative h-full w-full">
        <AspectRatio ratio={ratio}>
          <Image
            src={imgSrc}
            alt={altText}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            fill
            className="object-cover"
          />
        </AspectRatio>
      </div>
      {caption && (
        <figcaption className="font-serif text-[11px] leading-relaxed tracking-wider text-EbonyShadow-60 sm:text-body_xxxs md:text-body_xxs">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default ImageContainer;
