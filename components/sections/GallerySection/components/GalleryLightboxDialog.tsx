"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Video from "next-video";
import type { GalleryMedia } from "../types";

export default function GalleryLightboxDialog({
  media,
  open,
  onOpenChange,
  initialIndex,
}: {
  media: GalleryMedia[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialIndex: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const total = media.length;

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const goPrev = () => {
    setCurrentIndex((i) => (i === 0 ? total - 1 : i - 1));
  };

  const goNext = () => {
    setCurrentIndex((i) => (i === total - 1 ? 0 : i + 1));
  };

  const current = media[currentIndex];

  const poster = useMemo(() => {
    if (!current || current.type !== "video") return undefined;

    return (
      current.poster ||
      (current.src as any)?.poster ||
      (current.src as any)?.thumbnail ||
      undefined
    );
  }, [current]);

  if (!open || media.length === 0 || !current) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          fixed
          left-1/2
          top-1/2
          z-[100000]
          !h-[92vh]
          !w-[98vw]
          !max-w-none
          -translate-x-1/2
          -translate-y-1/2
          overflow-visible
          rounded-[16px]
          border
          border-white
          bg-black
          p-0
          shadow-none
          [&>div]:p-0
          [&>div>div]:p-0
        "
      >
        <DialogTitle className="sr-only">
          Gallery Lightbox
        </DialogTitle>

        <style jsx global>{`
          .gallery-dialog-wrapper {
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
          }

          .gallery-dialog-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000;
            border-radius: 12px;
            overflow: hidden;
          }

          .gallery-image-stage {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .gallery-image-stage img {
            display: block;
            width: auto !important;
            height: auto !important;
            max-width: calc(100vw - 180px) !important;
            max-height: calc(92vh - 80px) !important;
            object-fit: contain !important;
          }

          .gallery-dialog-container .next-video-container {
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .gallery-dialog-container media-theme-sutro {
            display: grid !important;
            place-items: center !important;
            width: auto !important;
            height: auto !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }

          .gallery-dialog-container mux-video {
            width: auto !important;
            height: auto !important;
            max-width: 100% !important;
            max-height: 100% !important;
            object-fit: contain !important;
          }

          .gallery-dialog-container mux-video video {
            width: auto !important;
            height: auto !important;
            max-width: 100% !important;
            max-height: 100% !important;
            object-fit: contain !important;
          }

          /* =========================
             CLOSE BUTTON
          ========================= */

          .gallery-lightbox-close {
            position: absolute;
            top: -22px;
            right: 12px;
            z-index: 100002;
            height: 44px;
            min-width: 96px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 0 16px;
            border: 0;
            border-radius: 9999px;
            background: #FBF6EF;
            color: #0D463E;
            font-size: 16px;
            font-weight: 400;
            line-height: 1;
            cursor: pointer;
            transition:
              background-color 200ms ease;
          }

          .gallery-lightbox-close:hover {
            background: #FBF6EF;
          }

          .gallery-lightbox-close:focus-visible {
            outline: none;
          }

          /* =========================
             LEFT / RIGHT ARROWS
          ========================= */

          .gallery-lightbox-arrow {
            position: absolute;
            top: 50%;
            z-index: 100001;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translateY(-50%);
            border: 0;
            border-radius: 9999px;
            background: #ffffff;
            color: #0d6868;
            opacity: 1;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.14);
            padding: 0;
            cursor: pointer;
          }

          .gallery-lightbox-arrow:hover {
            background: #ffffff;
            opacity: 1;
          }

          .gallery-lightbox-arrow:focus-visible {
            outline: 2px solid #0d6868;
            outline-offset: 2px;
          }

          .gallery-lightbox-arrow-left {
            left: 16px;
          }

          .gallery-lightbox-arrow-right {
            right: 16px;
          }

          /* =========================
             BOTTOM SWITCHER
          ========================= */

          .gallery-lightbox-switcher {
            position: absolute;
            left: 50%;
            bottom: 20px;
            z-index: 100010;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            transform: translateX(-50%);

            width: max-content;
            height: 12px;

            pointer-events: auto;
          }

          .gallery-lightbox-dot {
            display: block;
            flex-shrink: 0;

            width: 7px;
            height: 7px;

            padding: 0;
            margin: 0;

            border: 0;
            border-radius: 9999px;

            background: rgba(255, 255, 255, 0.45);

            cursor: pointer;

            opacity: 1;
            visibility: visible;

            transition:
              width 250ms ease,
              background-color 250ms ease,
              opacity 250ms ease;
          }

          .gallery-lightbox-dot.active {
            width: 34px;
            height: 6px;
            background: #0d6868;
          }

          .gallery-lightbox-dot:hover {
            background: rgba(255, 255, 255, 0.8);
          }

          .gallery-lightbox-dot.active:hover {
            background: #0d6868;
          }

          @media (max-width: 640px) {
            .gallery-lightbox-close {
              top: -20px;
              right: 8px;
              height: 40px;
              min-width: 88px;
              font-size: 14px;
              padding: 0 14px;
            }

            .gallery-lightbox-arrow {
              width: 42px;
              height: 42px;
            }

            .gallery-lightbox-arrow-left {
              left: 12px;
            }

            .gallery-lightbox-arrow-right {
              right: 12px;
            }

            .gallery-image-stage img {
              max-width: calc(100vw - 100px) !important;
              max-height: calc(92vh - 80px) !important;
            }

            .gallery-lightbox-switcher {
              bottom: 14px;
              gap: 7px;
            }

            .gallery-lightbox-dot {
              width: 6px;
              height: 6px;
            }

            .gallery-lightbox-dot.active {
              width: 28px;
              height: 5px;
            }
          }
        `}</style>

        <div className="gallery-dialog-wrapper relative overflow-visible">
          {/* Close Button */}
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label="Close gallery"
            className="gallery-lightbox-close"
          >
            <X size={20} strokeWidth={1.8} />
            <span>Close</span>
          </button>

          <div className="gallery-dialog-container relative">
            {/* Current Media */}
            {current.type === "video" ? (
              <Video
                src={current.src}
                controls
                autoPlay
                poster={poster}
                className="max-h-full max-w-full"
              />
            ) : (
              <div className="gallery-image-stage">
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={2400}
                  height={1600}
                  sizes="100vw"
                  priority
                />
              </div>
            )}

            {/* Lightbox Navigation */}
            {total > 1 && (
              <>
                {/* Previous */}
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous image"
                  className="gallery-lightbox-arrow gallery-lightbox-arrow-left"
                >
                  <ChevronLeft
                    size={24}
                    strokeWidth={2}
                  />
                </button>

                {/* Next */}
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next image"
                  className="gallery-lightbox-arrow gallery-lightbox-arrow-right"
                >
                  <ChevronRight
                    size={24}
                    strokeWidth={2}
                  />
                </button>

                {/* Bottom Switcher */}
                <div className="gallery-lightbox-switcher">
                  {media.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Go to image ${i + 1}`}
                      className={`gallery-lightbox-dot ${
                        i === currentIndex
                          ? "active"
                          : ""
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}