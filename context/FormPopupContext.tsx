"use client";

import React, { createContext, useState } from "react";

interface FormContextType {
  isFormPopupOpen: boolean;
  openFormPopup: () => void;
  closeFormPopup: () => void;
}

export const FormPopupContext = createContext<FormContextType>({
  isFormPopupOpen: false,
  openFormPopup: () => {},
  closeFormPopup: () => {},
});

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFormPopupOpen, setIsFormPopupOpen] = useState(false);

  const openFormPopup = () => setIsFormPopupOpen(true);
  const closeFormPopup = () => setIsFormPopupOpen(false);

  return (
    <FormPopupContext.Provider value={{ isFormPopupOpen, openFormPopup, closeFormPopup }}>{children}</FormPopupContext.Provider>
  );
};
