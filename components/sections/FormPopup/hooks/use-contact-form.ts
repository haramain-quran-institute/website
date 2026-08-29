"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  defaultContactFormValues,
  type ContactFormValues,
} from "../schemas/contact-form";
import { sendAlfursanEmail } from "../actions/sendEmail";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultContactFormValues,
  });

  const onSubmit = useCallback(
    async (values: ContactFormValues) => {
      if (status === "submitting") return;

      setStatus("submitting");
      setErrorMessage(null);

      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value);
        });

        if (typeof window !== "undefined") {
          formData.append("metadata_url", window.location.href);
        }

        await sendAlfursanEmail(formData);
        setStatus("success");
      } catch (err) {
        console.error("[useContactForm] submission error:", err);
        setErrorMessage("Something went wrong. Please try again in a moment.");
        setStatus("error");
      }
    },
    [status],
  );

  const reset = useCallback(() => {
    form.reset(defaultContactFormValues);
    setStatus("idle");
    setErrorMessage(null);
  }, [form]);

  return {
    form,
    status,
    errorMessage,
    onSubmit,
    reset,
  };
}
