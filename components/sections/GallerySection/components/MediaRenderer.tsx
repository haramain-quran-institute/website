"use client";

import Image from "next/image";
import type { GalleryMedia } from "../types";
import { Button } from "@/components/ui/button";

interface MediaRendererProps {
  item: GalleryMedia;
  index: number;
  onOpen: (index: number) => void;
}

export default function MediaRenderer({
  item,
  index,
  onOpen,
}: MediaRendererProps) {
  const isVideo = item.type === "video";
  const isLink = item.type === "link";

  const poster = isVideo
    ? item.poster || (item.src as any).thumbnail || (item.src as any).poster
    : undefined;

  const handleClick = () => {
    if (isLink) return;
    onOpen(index);
  };

  return (
    <div
      className={`group container-type-inline relative size-full overflow-hidden rounded-lg ${
        isLink ? "cursor-default" : "cursor-pointer"
      }`}
      onClick={handleClick}
    >
      {(item.type === "image" || isVideo || isLink) && (
        <Image
          src={isVideo ? poster : item.src}
          alt={item.alt ?? ""}
          fill
          sizes="(min-width: 1024px) 50vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {isVideo && (
        <div className="bg-mint-green text-caribbean-current absolute bottom-4 left-4 z-30 flex size-10 items-center justify-center rounded-full">
          <span className="text-xs font-semibold">▶</span>
        </div>
      )}

      {isLink && (
        <div className="from-eerie-black absolute bottom-0 left-0 z-40 flex w-full flex-col gap-3 bg-linear-to-t to-transparent p-6">
          {(item.title || item.description) && (
            <div className="flex flex-col gap-1">
              {item.title && (
                <h3 className="font-heading text-heading-xs leading-none tracking-tight text-white">
                  {item.title}
                </h3>
              )}

              {item.description && (
                <p className="text-body-sm line-clamp-2 text-white/80">
                  {item.description}
                </p>
              )}
            </div>
          )}

          <Button
            asChild
            variant="secondary"
            size="default"
            className="w-fit cursor-pointer text-white"
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {item.buttonLabel ?? "Learn More"}
            </a>
          </Button>
        </div>
      )}

      {item.type === "image" && (item.title || item.description) && (
        <div className="from-eerie-black absolute bottom-0 left-0 z-40 flex w-full flex-col gap-2 bg-linear-to-t to-transparent p-6">
          {item.title && (
            <h3 className="font-heading text-heading-xs leading-none tracking-tight text-white">
              {item.title}
            </h3>
          )}

          {item.description && (
            <p className="text-body-sm mt-1 line-clamp-2 text-white/80">
              {item.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
