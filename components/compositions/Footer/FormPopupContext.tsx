"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";

export type PopupFormKey =
  | "umrah-class"
  | "umrah"
  | "ziaraat"
  | "hajj"
  | "contact"
  | "student-consultancy"
  | "hotelBooking"
  | "flightBooking"
  | "corporateTravel"
  | "international";
  
export type PopupPayload = Record<string, unknown>;

interface FormPopupContextValue {
  isOpen: boolean;
  activeForm: PopupFormKey;
  defaultForm: PopupFormKey;
  payload: PopupPayload;
  open: (form?: PopupFormKey, payload?: PopupPayload) => void;
  close: () => void;
  toggle: (form?: PopupFormKey, payload?: PopupPayload) => void;
  setDefaultForm: (form: PopupFormKey) => void;
  setActiveForm: (form: PopupFormKey, payload?: PopupPayload) => void;
}

const FormPopupContext = createContext<FormPopupContextValue | undefined>(
  undefined,
);

interface FormPopupProviderProps {
  children: ReactNode;
  defaultOpen?: boolean;
  initialDefaultForm?: PopupFormKey;
}

export function FormPopupProvider({
  children,
  defaultOpen = false,
  initialDefaultForm = "umrah",
}: FormPopupProviderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [defaultForm, setDefaultFormState] =
    useState<PopupFormKey>(initialDefaultForm);
  const [activeForm, setActiveFormState] =
    useState<PopupFormKey>(initialDefaultForm);
  const [payload, setPayload] = useState<PopupPayload>({});

  const setDefaultForm = useCallback((form: PopupFormKey) => {
    setDefaultFormState(form);
  }, []);

  const setActiveForm = useCallback(
    (form: PopupFormKey, nextPayload?: PopupPayload) => {
      setActiveFormState(form);
      setPayload(nextPayload ?? {});
    },
    [],
  );

  const open = useCallback(
    (form?: PopupFormKey, nextPayload?: PopupPayload) => {
      const resolvedForm = form ?? defaultForm;
      setActiveFormState(resolvedForm);
      setPayload(nextPayload ?? {});
      setIsOpen(true);
    },
    [defaultForm],
  );

  const close = useCallback(() => setIsOpen(false), []);

  const toggle = useCallback(
    (form?: PopupFormKey, nextPayload?: PopupPayload) => {
      setIsOpen((prev) => {
        const nextOpen = !prev;
        if (nextOpen) {
          const resolvedForm = form ?? defaultForm;
          setActiveFormState(resolvedForm);
          setPayload(nextPayload ?? {});
        }
        return nextOpen;
      });
    },
    [defaultForm],
  );

  const value = useMemo(
    () => ({
      isOpen,
      activeForm,
      defaultForm,
      payload,
      open,
      close,
      toggle,
      setDefaultForm,
      setActiveForm,
    }),
    [
      isOpen,
      activeForm,
      defaultForm,
      payload,
      open,
      close,
      toggle,
      setDefaultForm,
      setActiveForm,
    ],
  );

  return (
    <FormPopupContext.Provider value={value}>
      {children}
    </FormPopupContext.Provider>
  );
}

export function useFormPopup(): FormPopupContextValue {
  const context = useContext(FormPopupContext);

  if (context === undefined) {
    throw new Error("useFormPopup must be used within a FormPopupProvider");
  }

  return context;
}

export { FormPopupContext };
