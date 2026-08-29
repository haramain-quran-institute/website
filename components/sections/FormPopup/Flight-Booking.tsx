"use client";

import { useContactForm } from "./hooks/use-contact-form";
import { Button } from "@/components/ui/button";
import {
  FormInput,
  FormTextarea,
  FormField,
  FormHeader,
  FormSuccess,
} from "./components";
import { useWatch } from "react-hook-form";

export default function FlightBookingForm() {
  const { form, status, errorMessage, onSubmit } = useContactForm();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const travelType = useWatch({
    control,
    name: "travelType",
  });

  if (status === "success") {
    return <FormSuccess />;
  }

  const isSubmitting = status === "submitting";

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 py-6">

      <FormHeader
        title="Get In Touch"
        subtitle="Find best flight deals — we’ll call you with options"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

        {/* Row 1 */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Full Name" htmlFor="name" error={errors.name?.message}>
            <FormInput
              id="name"
              placeholder="Your Name"
              hasError={!!errors.name}
              {...register("name")}
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

        {/* Row 2 */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="From (Departure City)" htmlFor="departureCity" error={errors.departureCity?.message}>
            <FormInput
              id="departureCity"
              placeholder="Lahore, Karachi..."
              hasError={!!errors.departureCity}
              {...register("departureCity")}
            />
          </FormField>

          <FormField label="To (Destination City)" htmlFor="destinationCity" error={errors.destinationCity?.message}>
            <FormInput
              id="destinationCity"
              placeholder="Dubai, Jeddah..."
              hasError={!!errors.destinationCity}
              {...register("destinationCity")}
            />
          </FormField>
        </div>

        {/* Row 3 */}
        <div className="grid gap-4 md:grid-cols-2">

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Travel Type</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" value="One Way" {...register("travelType")} />
                One Way
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" value="Return" {...register("travelType")} />
                Return
              </label>
            </div>
          </div>

          <FormField
            label="Passengers"
            htmlFor="travelers"
            error={errors.travelers?.message}
          >
            <FormInput
              id="travelers"
              type="number"
              placeholder="e.g. 1"
              hasError={!!errors.travelers}
              {...register("travelers")}
            />
          </FormField>
        </div>

        {/* Row 4 */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            label="Departure Date"
            htmlFor="departureDate"
            error={errors.departureDate?.message}
          >
            <FormInput
              id="departureDate"
              type="date"
              hasError={!!errors.departureDate}
              {...register("departureDate")}
            />
          </FormField>

          {travelType === "Return" && (
            <FormField
              label="Return Date"
              htmlFor="returnDate"
              error={errors.returnDate?.message}
            >
              <FormInput
                id="returnDate"
                type="date"
                hasError={!!errors.returnDate}
                {...register("returnDate")}
              />
            </FormField>
          )}
        </div>

        {/* Row 5 */}
        <FormField
          label="Message (Optional)"
          htmlFor="message"
          error={errors.message?.message}
        >
          <FormTextarea
            id="message"
            placeholder="Flexible dates, airline preference, budget"
            rows={6}
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
            {isSubmitting ? "Sending..." : "Send Flight Inquiry"}
          </span>
        </Button>

      </form>
    </div>
  );
}
