import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CarouselGalleryProps {
  imgSrc: StaticImageData[];
  altText: string[];
  title?: string;
  description?: string;
  addLink?: boolean;
  url?: string;
  navArrows?: boolean;
  ratio?: number;
}

interface CarouselGalleryChildrenProps extends Required<Pick<CarouselGalleryProps, "imgSrc" | "altText" | "ratio">> {}

const CarouselGalleryChildren = ({ imgSrc, altText, ratio }: CarouselGalleryChildrenProps) => {
  return (
    <CarouselContent>
      {imgSrc.map((img, index) => (
        <CarouselItem key={index}>
          <AspectRatio ratio={ratio} className="bg-AntiqueGold/10">
            <Image
              src={img}
              alt={altText[index]}
              sizes="(max-width: 768px) 100vw, 30vw"
              loading="lazy"
              fill
              className="object-cover"
            />
          </AspectRatio>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};

function CarouselGallery({
  navArrows = true,
  addLink = true,
  url,
  imgSrc,
  altText,
  ratio = 10 / 8,
  title,
  description,
}: CarouselGalleryProps) {
  return (
    <Carousel className="group flex w-full flex-col gap-2" opts={{ loop: true }}>
      <div className="relative overflow-hidden rounded-lg">
        {addLink && url ? (
          <Link href={url}>
            <CarouselGalleryChildren imgSrc={imgSrc} altText={altText} ratio={ratio} />
          </Link>
        ) : (
          <CarouselGalleryChildren imgSrc={imgSrc} altText={altText} ratio={ratio} />
        )}
        {navArrows && (
          <>
            <CarouselPrevious className="opacity-0 transition hover:scale-105 active:scale-95 disabled:hidden group-hover:opacity-100" />
            <CarouselNext className="opacity-0 transition hover:scale-105 active:scale-95 disabled:hidden group-hover:opacity-100" />
          </>
        )}
      </div>
      {title || description ? (
        <div className="flex w-full flex-col gap-2">
          {title && (
            <h3 className="text-heading_xxs font-medium leading-none tracking-wider text-OnyxBlack-100 sm:text-balance smd:text-heading_xs lmd:text-heading_sm">
              {title}
            </h3>
          )}
          {description && (
            <p className="line-clamp-2 font-serif text-body_xxxs leading-relaxed tracking-wider text-EbonyShadow-60 lmd:text-body_xxs">
              {description}
            </p>
          )}
        </div>
      ) : null}
    </Carousel>
  );
}

export default CarouselGallery;
