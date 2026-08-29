"use client";

import { useContactForm } from "./hooks/use-contact-form";
import { Button } from "@/components/ui/button";
import {
  FormInput,
  FormTextarea,
  FormSelect,
  FormField,
  FormHeader,
  FormSuccess,
} from "./components";

export default function HotelBookingForm() {
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
      
      <FormHeader
        title="Get In Touch"
        subtitle="Book your hotel بسهولة — our team will call you shortly"
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
          <FormField label="Check-in Date" htmlFor="departureDate" error={errors.departureDate?.message}>
            <FormInput
              id="departureDate"
              type="date"
              hasError={!!errors.departureDate}
              {...register("departureDate")}
            />
          </FormField>

          <FormField label="Check-out Date" htmlFor="returnDate" error={errors.returnDate?.message}>
            <FormInput
              id="returnDate"
              type="date"
              hasError={!!errors.returnDate}
              {...register("returnDate")}
            />
          </FormField>
        </div>

        {/* Row 3 */}
        <FormField
          label="Destination / City"
          htmlFor="destinationCity"
          error={errors.destinationCity?.message}
        >
          <FormInput
            id="destinationCity"
            placeholder="Dubai, Istanbul, Makkah..."
            hasError={!!errors.destinationCity}
            {...register("destinationCity")}
          />
        </FormField>

        {/* Row 4 */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            label="Number of Guests"
            htmlFor="travelers"
            error={errors.travelers?.message}
          >
            <FormInput
              id="travelers"
              type="number"
              placeholder="e.g. 2"
              hasError={!!errors.travelers}
              {...register("travelers")}
            />
          </FormField>

          <FormField
            label="Room Type (Optional)"
            htmlFor="roomType"
            error={errors.roomType?.message}
          >
            <FormSelect
              id="roomType"
              options={[
                { label: "Single", value: "Single" },
                { label: "Double", value: "Double" },
                { label: "Family", value: "Family" },
              ]}
              hasError={!!errors.roomType}
              {...register("roomType")}
            />
          </FormField>
        </div>

        {/* Row 5 */}
        <FormField
          label="Message (Optional)"
          htmlFor="message"
          error={errors.message?.message}
        >
          <FormTextarea
            id="message"
            placeholder="Preferred hotel, budget, location, special requirements"
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
            {isSubmitting ? "Sending..." : "Send Hotel Inquiry"}
          </span>
        </Button>

      </form>
    </div>
  );
}