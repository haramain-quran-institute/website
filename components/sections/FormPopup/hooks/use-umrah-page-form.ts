"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  umrahPageFormSchema,
  defaultUmrahPageFormValues,
  type UmrahPageFormValues,
} from "../schemas/umrahPage-form";
import { sendAlfursanEmail } from "../actions/sendEmail";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function useUmrahPageForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<UmrahPageFormValues>({
    resolver: zodResolver(umrahPageFormSchema) as any,
    defaultValues: defaultUmrahPageFormValues,
  });

  const onSubmit = useCallback(
    async (values: UmrahPageFormValues) => {
      if (status === "submitting") return;

      setStatus("submitting");
      setErrorMessage(null);

      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, String(value));
        });

        formData.append("form_type", "umrah");

        if (typeof window !== "undefined") {
          formData.append("metadata_url", window.location.href);
        }

        await sendAlfursanEmail(formData);
        setStatus("success");
      } catch (err) {
        console.error("[useUmrahPageForm] submission error:", err);
        setErrorMessage("Something went wrong. Please try again in a moment.");
        setStatus("error");
      }
    },
    [status],
  );

  const reset = useCallback(() => {
    form.reset(defaultUmrahPageFormValues);
    setStatus("idle");
    setErrorMessage(null);
  }, [form]);

  return { form, status, errorMessage, onSubmit, reset };
}
