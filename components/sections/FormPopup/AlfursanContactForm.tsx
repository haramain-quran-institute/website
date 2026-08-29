"use client";

import { useContactForm } from "./hooks/use-contact-form";
import { phoneCodeOptions } from "./schemas/contact-form";
import { Button } from "@/components/ui/button";
import {
  FormInput,
  FormTextarea,
  FormSelect,
  FormField,
  FormHeader,
  FormSuccess,
} from "./components";

export function AlfursanContactForm() {
  const { form, status, errorMessage, onSubmit } = useContactForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  if (status === "success") {
    return <FormSuccess />;
  }

  const isSubmitting = status === "submitting";

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 py-6">
      <FormHeader />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            label="Full Name"
            htmlFor="name"
            error={errors.name?.message}
          >
            <FormInput
              id="name"
              placeholder="Your Name"
              hasError={!!errors.name}
              {...register("name")}
            />
          </FormField>

          <FormField
            label="Email Address"
            htmlFor="email"
            error={errors.email?.message}
          >
            <FormInput
              id="email"
              type="email"
              placeholder="you@example.com"
              hasError={!!errors.email}
              {...register("email")}
            />
          </FormField>
        </div>

        <div className="grid gap-4 md:grid-cols-[minmax(0,190px)_1fr]">
          <FormField
            label="Country Code"
            htmlFor="phoneCode"
            error={errors.phoneCode?.message}
          >
            <FormSelect
              id="phoneCode"
              options={phoneCodeOptions}
              hasError={!!errors.phoneCode}
              {...register("phoneCode")}
            />
          </FormField>

          <FormField
            label="Phone Number"
            htmlFor="phone"
            error={errors.phone?.message}
          >
            <FormInput
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
              hasError={!!errors.phone}
              {...register("phone")}
            />
          </FormField>
        </div>

        <FormField
          label="Destination City"
          htmlFor="destinationCity"
          error={errors.destinationCity?.message}
        >
          <FormInput
            id="destinationCity"
            placeholder="Makkah, Madinah, Istanbul, Dubai..."
            hasError={!!errors.destinationCity}
            {...register("destinationCity")}
          />
        </FormField>

        <FormField
          label="Message"
          htmlFor="message"
          error={errors.message?.message}
        >
          <FormTextarea
            id="message"
            placeholder="Tell us about your preferred dates, group size, and any special requirements."
            rows={8}
            hasError={!!errors.message}
            {...register("message")}
          />
        </FormField>

        {errorMessage && (
          <p className="text-body-xs text-destructive" role="alert">
            {errorMessage}
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-fit"
        >
          <span className="z-10">
            {isSubmitting ? "Sending..." : "Send Message"}
          </span>
        </Button>
      </form>
    </div>
  );
}
