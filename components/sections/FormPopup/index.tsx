"use client";

import { useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useFormPopup, type PopupFormKey } from "@/context/FormPopupContext";

import { AlfursanContactForm } from "./AlfursanContactForm";
import StudentConsultancyContactForm from "./StudentConsultancyContactForm";
import { UmrahClassForm } from "./UmrahClassForm";
import { UmrahPageForm } from "./UmrahPageForm";
import { ZiaraatPageForm } from "./ZiaraatPageForm";
import { HajjPageForm } from "./HajjPageForm";
import HotelBookingForm from "./Hotel-Booking";
import FlightBookingForm from "./Flight-Booking";
import CorporateContactForm from "./CorporateContactForm";
import InternationalToursForm from "./InternationalToursForm";

export default function FormPopupSection({
  defaultForm = "contact",
}: {
  defaultForm?: PopupFormKey;
}) {
  const { isOpen, close, activeForm, payload, setDefaultForm } = useFormPopup();

  useEffect(() => {
    setDefaultForm(defaultForm);
  }, [defaultForm, setDefaultForm]);

  const content =
    activeForm === "contact" ? (
      <AlfursanContactForm />
    ) : activeForm === "student-consultancy" ? (
      <StudentConsultancyContactForm />
    ) : activeForm === "umrah-class" ? (
      <UmrahClassForm payload={payload} />
    ) : activeForm === "ziaraat" ? (
      <ZiaraatPageForm payload={payload} />
    ) : activeForm === "hajj" ? (
      <HajjPageForm payload={payload} />
    ) : activeForm === "hotelBooking" ? (
      <HotelBookingForm />
    ) : activeForm === "flightBooking" ? (
      <FlightBookingForm />
    ) : activeForm === "international" ? (
      <InternationalToursForm />
    ) : 
    activeForm === "corporateTravel" ? (
      <CorporateContactForm />
    ) : (
      <UmrahPageForm payload={payload} />
    );

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (!open ? close() : undefined)}
    >
      <DialogContent
        className={`${
          activeForm === "student-consultancy"
            ? "theme-consultancy"
            : activeForm === "ziaraat"
            ? "ziyarat-theme"
            : activeForm === "hotelBooking"
            ? "theme-booking"
            : activeForm === "flightBooking"
            ? "theme-booking"
            : activeForm === "corporateTravel"
            ? "theme-booking"
            : ""
        }`}
      >
        <DialogTitle className="hidden">
          {activeForm === "ziaraat"
            ? "Ziaraat Inquiry Form"
            : activeForm === "hotelBooking"
            ? "Hotel Booking Form"
            : activeForm === "flightBooking"
            ? "Flight Booking Form"
            : activeForm === "corporateTravel"
            ? "Corporate Travel Form"
            : "Form"}
        </DialogTitle>

        {content}
      </DialogContent>
    </Dialog>
  );
}
