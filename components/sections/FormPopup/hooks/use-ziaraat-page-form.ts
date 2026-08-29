"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ziaraatPageFormSchema,
  defaultZiaraatPageFormValues,
  type ZiaraatPageFormValues,
} from "../schemas/ziaraatPage-form";
import { sendAlfursanEmail } from "../actions/sendEmail";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function useZiaraatPageForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<ZiaraatPageFormValues>({
    resolver: zodResolver(ziaraatPageFormSchema) as any,
    defaultValues: defaultZiaraatPageFormValues,
  });

  const onSubmit = useCallback(
    async (values: ZiaraatPageFormValues) => {
      if (status === "submitting") return;

      setStatus("submitting");
      setErrorMessage(null);

      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, String(value));
        });

        formData.append("form_type", "ziaraat");

        if (typeof window !== "undefined") {
          formData.append("metadata_url", window.location.href);
        }

        await sendAlfursanEmail(formData);
        setStatus("success");
      } catch (err) {
        console.error("[useZiaraatPageForm] submission error:", err);
        setErrorMessage("Something went wrong. Please try again in a moment.");
        setStatus("error");
      }
    },
    [status],
  );

  const reset = useCallback(() => {
    form.reset(defaultZiaraatPageFormValues);
    setStatus("idle");
    setErrorMessage(null);
  }, [form]);

  return { form, status, errorMessage, onSubmit, reset };
}
