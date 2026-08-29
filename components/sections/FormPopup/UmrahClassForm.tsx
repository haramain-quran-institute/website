"use client";

import { Button } from "@/components/ui/button";
import { phoneCodeOptions } from "./schemas/contact-form";
import { yesNoOptions } from "./schemas/common";
import { useUmrahClassForm } from "./hooks/use-umrah-class-form";
import {
  FormInput,
  FormTextarea,
  FormSelect,
  FormField,
  FormHeader,
  FormSuccess,
} from "./components";

export function UmrahClassForm({
  payload,
}: {
  payload?: Record<string, unknown>;
}) {
  const { form, status, errorMessage, onSubmit } = useUmrahClassForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  if (status === "success") return <FormSuccess />;

  const isSubmitting = status === "submitting";

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
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

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            label="Did you have performed Umrah before?"
            htmlFor="performedBefore"
            error={errors.performedBefore?.message}
          >
            <FormSelect
              id="performedBefore"
              options={yesNoOptions}
              hasError={!!errors.performedBefore}
              {...register("performedBefore")}
            />
          </FormField>

          <FormField
            label="How many persons are travelling for Umrah?"
            htmlFor="persons"
            error={errors.persons?.message}
          >
            <FormInput
              id="persons"
              type="number"
              min={1}
              placeholder="e.g. 2"
              hasError={!!errors.persons}
              {...register("persons", { valueAsNumber: true })}
            />
          </FormField>
        </div>

        <FormField
          label="Did you book Umrah with Alfursan?"
          htmlFor="bookedWithAlfursan"
          error={errors.bookedWithAlfursan?.message}
        >
          <FormSelect
            id="bookedWithAlfursan"
            options={yesNoOptions}
            hasError={!!errors.bookedWithAlfursan}
            {...register("bookedWithAlfursan")}
          />
        </FormField>

        <FormField
          label="Message"
          htmlFor="message"
          error={errors.message?.message}
        >
          <FormTextarea
            id="message"
            placeholder="Tell us what you need help with."
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
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </span>
        </Button>
      </form>
    </div>
  );
}
