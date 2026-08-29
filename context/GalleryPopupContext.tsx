"use client";

import React, { createContext, useState } from "react";

interface GalleryContextType {
  isGalleryPopupOpen: boolean;
  openGalleryPopup: () => void;
  closeGalleryPopup: () => void;
}

export const GalleryPopupContext = createContext<GalleryContextType>({
  isGalleryPopupOpen: false,
  openGalleryPopup: () => {},
  closeGalleryPopup: () => {},
});

export const GalleryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isGalleryPopupOpen, setIsGalleryPopupOpen] = useState(false);

  const openGalleryPopup = () => setIsGalleryPopupOpen(true);
  const closeGalleryPopup = () => setIsGalleryPopupOpen(false);

  return (
    <GalleryPopupContext.Provider value={{ isGalleryPopupOpen, openGalleryPopup, closeGalleryPopup }}>
      {children}
    </GalleryPopupContext.Provider>
  );
};
