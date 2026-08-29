"use client";

import { useContext } from "react";
import { X } from "lucide-react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { GalleryPopupContext } from "@/context/GalleryPopupContext";
import type { GalleryPopupProps } from "./types/gallery";
import GallerySection from "./GallerySection";

const GalleryPopup: React.FC<GalleryPopupProps> = ({ galleryData, title, description }) => {
  const { isGalleryPopupOpen, closeGalleryPopup } = useContext(GalleryPopupContext);

  if (!isGalleryPopupOpen) return null;

  let imageCounter = 0;

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent className="flex size-full max-h-svh flex-col bg-ChampagneSilk">
        <AlertDialogTitle className="sr-only">{title}</AlertDialogTitle>
        <AlertDialogCancel onClick={closeGalleryPopup} className="fixed top-0 right-0 z-10">
          <div className="flex items-center justify-end p-4 gap-2 text-OnyxBlack/90 hover:text-OnyxBlack">
            <span className="font-cinzel text-sm">Close</span>
            <X className="h-5 w-5" />
          </div>
        </AlertDialogCancel>
        <div className="custom-scrollbar flex flex-grow flex-col overflow-y-auto">
          <div className="flex min-h-full flex-col gap-4 items-center">
            <div className="flex max-w-screen-md flex-col items-center gap-1">
              <h2 className="font-cinzel text-heading_base text-EbonyShadow opacity-0 animate-fade-slide-down mt-4">{title}</h2>
              {description && <p className="text-sm text-EbonyShadow/80 opacity-0 animate-fade-slide-down">{description}</p>}
            </div>
            <div className="size-full max-w-screen-md">
              {galleryData.map((section) => {
                const currentImageCounter = imageCounter;
                imageCounter += section.imgSrc.length;
                return (
                  <GallerySection key={currentImageCounter} section={section} imageCounter={currentImageCounter} title="" />
                );
              })}
            </div>
            <div className="min-h-16"></div>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default GalleryPopup;
