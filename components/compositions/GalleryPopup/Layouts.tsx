import Image from "next/image";
import { StaticImageData } from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface LayoutProps {
  images: StaticImageData[];
  altText: string;
  ratio?: number;
  startIndex: number;
}

export const TallSplitLayout: React.FC<LayoutProps> = ({ images, altText, ratio, startIndex }) => {
  if (images.length < 4) return null;

  return (
    <AspectRatio ratio={ratio} className="overflow-hidden rounded-sm">
      <div className="relative h-full w-full">
        <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-4 absolute inset-0">
          <div className="relative col-span-2 row-span-4">
            <Image
              src={images[0] as StaticImageData}
              alt={`${altText} ${startIndex + 1}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative col-span-2 row-span-2">
            <Image
              src={images[1] as StaticImageData}
              alt={`${altText} ${startIndex + 2}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative col-span-1 row-span-2">
            <Image
              src={images[2] as StaticImageData}
              alt={`${altText} ${startIndex + 3}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative col-span-1 row-span-2">
            <Image
              src={images[3] as StaticImageData}
              alt={`${altText} ${startIndex + 4}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
        </div>
      </div>
    </AspectRatio>
  );
};
export const ReverseTallSplitLayout: React.FC<LayoutProps> = ({ images, altText, ratio, startIndex }) => {
  if (images.length < 4) return null;

  return (
    <AspectRatio ratio={ratio} className="overflow-hidden rounded-sm">
      <div className="relative h-full w-full">
        <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-4 absolute inset-0">
          <div className="relative col-span-2 row-span-4 col-start-3 row-start-1">
            <Image
              src={images[0] as StaticImageData}
              alt={`${altText} ${startIndex + 1}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative col-span-2 row-span-2 col-start-1 row-start-1">
            <Image
              src={images[1] as StaticImageData}
              alt={`${altText} ${startIndex + 2}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative row-span-2 row-start-3">
            <Image
              src={images[2] as StaticImageData}
              alt={`${altText} ${startIndex + 3}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative row-span-2 row-start-3">
            <Image
              src={images[3] as StaticImageData}
              alt={`${altText} ${startIndex + 4}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
        </div>
      </div>
    </AspectRatio>
  );
};
export const CascadeLayout: React.FC<LayoutProps> = ({ images, altText, ratio, startIndex }) => {
  if (images.length < 3) return null;

  return (
    <AspectRatio ratio={ratio} className="overflow-hidden rounded-sm">
      <div className="relative h-full w-full">
        <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-4 absolute inset-0">
          <div className="relative row-span-2">
            <Image
              src={images[0] as StaticImageData}
              alt={`${altText} ${startIndex + 1}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative">
            <Image
              src={images[1] as StaticImageData}
              alt={`${altText} ${startIndex + 2}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative col-start-2">
            <Image
              src={images[2] as StaticImageData}
              alt={`${altText} ${startIndex + 3}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
        </div>
      </div>
    </AspectRatio>
  );
};
export const ReverseCascadeLayout: React.FC<LayoutProps> = ({ images, altText, ratio, startIndex }) => {
  if (images.length < 3) return null;

  return (
    <AspectRatio ratio={ratio} className="overflow-hidden rounded-sm">
      <div className="relative h-full w-full">
        <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-4 absolute inset-0">
          <div className="relative row-span-2 col-start-2 row-start-1">
            <Image
              src={images[0] as StaticImageData}
              alt={`${altText} ${startIndex + 1}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative col-start-1 row-start-1">
            <Image
              src={images[1] as StaticImageData}
              alt={`${altText} ${startIndex + 2}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative">
            <Image
              src={images[2] as StaticImageData}
              alt={`${altText} ${startIndex + 3}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
        </div>
      </div>
    </AspectRatio>
  );
};
export const SpotlightLayout: React.FC<LayoutProps> = ({ images, altText, ratio, startIndex }) => {
  if (images.length < 3) return null;

  return (
    <AspectRatio ratio={ratio} className="overflow-hidden rounded-sm">
      <div className="relative h-full w-full">
        <div className="grid h-full w-full grid-cols-4 grid-rows-1 gap-4 absolute inset-0">
          <div className="relative col-span-2 col-start-2 row-start-1">
            <Image
              src={images[0] as StaticImageData}
              alt={`${altText} ${startIndex + 1}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative col-start-1 row-start-1">
            <Image
              src={images[1] as StaticImageData}
              alt={`${altText} ${startIndex + 2}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative col-start-4">
            <Image
              src={images[2] as StaticImageData}
              alt={`${altText} ${startIndex + 3}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
        </div>
      </div>
    </AspectRatio>
  );
};
export const UnoLayout: React.FC<LayoutProps> = ({ images, altText, ratio, startIndex }) => {
  if (images.length < 1) return null;

  return (
    <AspectRatio ratio={ratio} className="overflow-hidden rounded-sm">
      <div className="relative h-full w-full">
        <div className="grid h-full w-full grid-cols-1 grid-rows-1  gap-4 absolute inset-0">
          <div className="relative">
            <Image
              src={images[0] as StaticImageData}
              alt={`${altText} ${startIndex + 1}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
        </div>
      </div>
    </AspectRatio>
  );
};
export const DuoLayout: React.FC<LayoutProps> = ({ images, altText, ratio, startIndex }) => {
  if (images.length < 2) return null;

  return (
    <AspectRatio ratio={ratio} className="overflow-hidden rounded-sm">
      <div className="relative h-full w-full">
        <div className="grid h-full w-full grid-cols-2 grid-rows-1  gap-4 absolute inset-0">
          <div className="relative">
            <Image
              src={images[0] as StaticImageData}
              alt={`${altText} ${startIndex + 1}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative">
            <Image
              src={images[1] as StaticImageData}
              alt={`${altText} ${startIndex + 2}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
        </div>
      </div>
    </AspectRatio>
  );
};
export const TrioLayout: React.FC<LayoutProps> = ({ images, altText, ratio, startIndex }) => {
  if (images.length < 3) return null;

  return (
    <AspectRatio ratio={ratio} className="overflow-hidden rounded-sm">
      <div className="relative h-full w-full">
        <div className="grid h-full w-full grid-cols-3 grid-rows-1  gap-4 absolute inset-0">
          <div className="relative">
            <Image
              src={images[0] as StaticImageData}
              alt={`${altText} ${startIndex + 1}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative">
            <Image
              src={images[1] as StaticImageData}
              alt={`${altText} ${startIndex + 2}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative">
            <Image
              src={images[2] as StaticImageData}
              alt={`${altText} ${startIndex + 2}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
        </div>
      </div>
    </AspectRatio>
  );
};

export const QuadLayout: React.FC<LayoutProps> = ({ images, altText, ratio, startIndex }) => {
  if (images.length < 4) return null;

  return (
    <AspectRatio ratio={ratio} className="overflow-hidden rounded-sm">
      <div className="relative h-full w-full">
        <div className="grid h-full w-full grid-cols-4 grid-rows-1  gap-4 absolute inset-0">
          <div className="relative">
            <Image
              src={images[0] as StaticImageData}
              alt={`${altText} ${startIndex + 1}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 50vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative">
            <Image
              src={images[1] as StaticImageData}
              alt={`${altText} ${startIndex + 2}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative">
            <Image
              src={images[2] as StaticImageData}
              alt={`${altText} ${startIndex + 2}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
          <div className="relative">
            <Image
              src={images[3] as StaticImageData}
              alt={`${altText} ${startIndex + 2}`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 25vw"
              loading={startIndex < 4 ? "eager" : "lazy"}
              priority={startIndex < 2}
            />
          </div>
        </div>
      </div>
    </AspectRatio>
  );
};
