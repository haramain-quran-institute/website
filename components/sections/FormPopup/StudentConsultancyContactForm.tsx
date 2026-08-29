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

export default function StudentConsultancyContactForm() {
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

        {/* Name + Email */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Full Name" htmlFor="name" error={errors.name?.message}>
            <FormInput
              id="name"
              placeholder="Your Name"
              hasError={!!errors.name}
              {...register("name")}
            />
          </FormField>

          <FormField label="Email Address" htmlFor="email" error={errors.email?.message}>
            <FormInput
              id="email"
              type="email"
              placeholder="you@example.com"
              hasError={!!errors.email}
              {...register("email")}
            />
          </FormField>
        </div>

        {/* Phone */}
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

          <FormField label="Phone Number" htmlFor="phone" error={errors.phone?.message}>
            <FormInput
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
              hasError={!!errors.phone}
              {...register("phone")}
            />
          </FormField>
        </div>

        {/* Study Destination */}
        <FormField
          label="Preferred Study Destination"
          htmlFor="destinationCity"
          error={errors.destinationCity?.message}
        >
          <FormInput
            id="destinationCity"
            placeholder="UK, Australia, Canada, USA, Turkey, UAE..."
            hasError={!!errors.destinationCity}
            {...register("destinationCity")}
          />
        </FormField>

        {/* University Type */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">University Type</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="universityType" value="Public" />
              Public
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" name="universityType" value="Private" />
              Private
            </label>
          </div>
        </div>

        {/* Funding */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Funding Type</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="fundingType" value="Paid" />
              Paid
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" name="fundingType" value="Scholarship" />
              Scholarship
            </label>
          </div>
        </div>

        {/* Service */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Service Type</label>
          <div className="flex gap-6 flex-wrap">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="serviceType" value="Only IELTS" />
              Only IELTS (Institute)
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" name="serviceType" value="Complete Package" />
              Complete Package (Pathway To Migration)
            </label>
          </div>
        </div>

        {/* Message */}
        <FormField
          label="Message"
          htmlFor="message"
          error={errors.message?.message}
        >
          <FormTextarea
            id="message"
            placeholder="Tell us about your study plans, preferred country, program, and any requirements."
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
