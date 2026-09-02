"use client";

import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { FormPopupContext } from "@/context/FormPopupContext";

export function TrialPopup({ triggerLabel = "Book a free trial" }: { triggerLabel?: string }) {
  const { openFormPopup } = useContext(FormPopupContext);
  return <Button type="button" onClick={openFormPopup}>{triggerLabel}</Button>;
}
