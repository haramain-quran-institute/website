"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  umrahClassFormSchema,
  defaultUmrahClassFormValues,
  type UmrahClassFormValues,
} from "../schemas/umrahClass-form";
import { sendAlfursanEmail } from "../actions/sendEmail";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function useUmrahClassForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<UmrahClassFormValues>({
    resolver: zodResolver(umrahClassFormSchema) as any,
    defaultValues: defaultUmrahClassFormValues,
  });

  const onSubmit = useCallback(
    async (values: UmrahClassFormValues) => {
      if (status === "submitting") return;

      setStatus("submitting");
      setErrorMessage(null);

      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, String(value));
        });

        formData.append("form_type", "umrah-class");

        if (typeof window !== "undefined") {
          formData.append("metadata_url", window.location.href);
        }

        await sendAlfursanEmail(formData);
        setStatus("success");
      } catch (err) {
        console.error("[useUmrahClassForm] submission error:", err);
        setErrorMessage("Something went wrong. Please try again in a moment.");
        setStatus("error");
      }
    },
    [status],
  );

  const reset = useCallback(() => {
    form.reset(defaultUmrahClassFormValues);
    setStatus("idle");
    setErrorMessage(null);
  }, [form]);

  return { form, status, errorMessage, onSubmit, reset };
}
