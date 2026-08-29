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

export default function CorporateContactForm() {
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
    <div className="mx-auto flex max-w-4xl flex-col gap-6 py-6 theme-corporate"> {/* ✅ ONLY CHANGE */}

      <FormHeader
        title="Get In Touch"
        subtitle="Manage your company travel efficiently — our team will contact you shortly"
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
          <FormField label="Company Name" htmlFor="company" error={errors.company?.message}>
            <FormInput
              id="company"
              placeholder="Your Company Name"
              hasError={!!errors.company}
              {...register("company")}
            />
          </FormField>

          <FormField label="Email Address (Optional)" htmlFor="email" error={errors.email?.message}>
            <FormInput
              id="email"
              type="email"
              placeholder="you@company.com"
              hasError={!!errors.email}
              {...register("email")}
            />
          </FormField>
        </div>

        {/* Row 3 */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Travel Type" htmlFor="travelType" error={errors.travelType?.message}>
            <FormSelect
              id="travelType"
              options={[
                { label: "Flights", value: "Flights" },
                { label: "Hotels", value: "Hotels" },
                { label: "Both", value: "Both" },
              ]}
              hasError={!!errors.travelType}
              {...register("travelType")}
            />
          </FormField>

          <FormField
            label="Number of Travelers"
            htmlFor="travelers"
            error={errors.travelers?.message}
          >
            <FormInput
              id="travelers"
              type="number"
              placeholder="e.g. 5"
              hasError={!!errors.travelers}
              {...register("travelers")}
            />
          </FormField>
        </div>

        {/* Row 4 */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            label="Departure City"
            htmlFor="departureCity"
            error={errors.departureCity?.message}
          >
            <FormInput
              id="departureCity"
              placeholder="Lahore, Karachi..."
              hasError={!!errors.departureCity}
              {...register("departureCity")}
            />
          </FormField>

          <FormField
            label="Destination City"
            htmlFor="destinationCity"
            error={errors.destinationCity?.message}
          >
            <FormInput
              id="destinationCity"
              placeholder="Dubai, Riyadh..."
              hasError={!!errors.destinationCity}
              {...register("destinationCity")}
            />
          </FormField>
        </div>

        {/* Row 5 */}
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

          <FormField
            label="Return Date (Optional)"
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
        </div>

        {/* Row 6 */}
        <FormField
          label="Travel Frequency"
          htmlFor="frequency"
          error={errors.frequency?.message}
        >
          <FormSelect
            id="frequency"
            options={[
              { label: "One-time", value: "One-time" },
              { label: "Monthly", value: "Monthly" },
              { label: "Frequent", value: "Frequent" },
            ]}
            hasError={!!errors.frequency}
            {...register("frequency")}
          />
        </FormField>

        {/* Row 7 */}
        <FormField
          label="Requirements / Message (Optional)"
          htmlFor="message"
          error={errors.message?.message}
        >
          <FormTextarea
            id="message"
            placeholder="Travel policy, preferred airlines, hotel category, budget, special arrangements"
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
            {isSubmitting ? "Sending..." : "Request Travel Plan"}
          </span>
        </Button>

      </form>
    </div>
  );
}
