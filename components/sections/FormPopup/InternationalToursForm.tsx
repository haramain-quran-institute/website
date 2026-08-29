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

export default function InternationalToursForm() {
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
    <div className="theme-international mx-auto flex max-w-4xl flex-col gap-6 py-6">
      
      <FormHeader
        title="Get In Touch"
        subtitle="Plan your international trip with ease — our team will guide you"
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
          <FormField
            label="Destination Country / City"
            htmlFor="destinationCity"
            error={errors.destinationCity?.message}
          >
            <FormInput
              id="destinationCity"
              placeholder="Turkey, Dubai, Malaysia..."
              hasError={!!errors.destinationCity}
              {...register("destinationCity")}
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
              placeholder="e.g. 2"
              hasError={!!errors.travelers}
              {...register("travelers")}
            />
          </FormField>
        </div>

        {/* Row 3 */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            label="Travel Month"
            htmlFor="departureDate"
            error={errors.departureDate?.message}
          >
            <FormSelect
              id="departureDate"
              options={[
                { label: "January", value: "January" },
                { label: "February", value: "February" },
                { label: "March", value: "March" },
                { label: "April", value: "April" },
                { label: "May", value: "May" },
                { label: "June", value: "June" },
                { label: "July", value: "July" },
                { label: "August", value: "August" },
                { label: "September", value: "September" },
                { label: "October", value: "October" },
                { label: "November", value: "November" },
                { label: "December", value: "December" },
              ]}
              hasError={!!errors.departureDate}
              {...register("departureDate")}
            />
          </FormField>

          <FormField
            label="Trip Duration"
            htmlFor="frequency"
            error={errors.frequency?.message}
          >
            <FormSelect
              id="frequency"
              options={[
                { label: "3–5 Days", value: "3-5 Days" },
                { label: "6–7 Days", value: "6-7 Days" },
                { label: "8–10 Days", value: "8-10 Days" },
                { label: "10+ Days", value: "10+ Days" },
              ]}
              hasError={!!errors.frequency}
              {...register("frequency")}
            />
          </FormField>
        </div>

        {/* Row 4 */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            label="Travel Type"
            htmlFor="travelType"
            error={errors.travelType?.message}
          >
            <FormSelect
              id="travelType"
              options={[
                { label: "Solo", value: "Solo" },
                { label: "Couple", value: "Couple" },
                { label: "Family", value: "Family" },
                { label: "Group", value: "Group" },
              ]}
              hasError={!!errors.travelType}
              {...register("travelType")}
            />
          </FormField>

          <FormField
            label="Budget Range (Optional)"
            htmlFor="roomType"
            error={errors.roomType?.message}
          >
            <FormSelect
              id="roomType"
              options={[
                { label: "Economy", value: "Economy" },
                { label: "Standard", value: "Standard" },
                { label: "Luxury", value: "Luxury" },
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
            placeholder="Preferred cities, activities, hotel category, visa help, special requests"
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
            {isSubmitting ? "Sending..." : "Get Tour Plan"}
          </span>
        </Button>

      </form>
    </div>
  );
}