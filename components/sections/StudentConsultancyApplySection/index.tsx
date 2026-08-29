"use client";

import DiamondIcon from "@/assets/Icons/Diamond";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendAlfursanEmail } from "@/components/sections/FormPopup/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import universitiesCatalogData from "@/data/StudentConsultancy/universitiesCatalogData";
import universitiesSectionData from "@/data/StudentConsultancy/universitiesSectionData";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phoneCode: z.string().min(1, "Code required"),
  phone: z.string().min(6, "Phone required"),
  message: z.string().min(10, "Message is required"),
});

type FormValues = z.infer<typeof schema>;

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function StudentConsultancyApplySection() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const params = useSearchParams();

  const countryId = params.get("country") ?? "";
  const universityId = params.get("university") ?? "";
  const programId = params.get("program") ?? "";

  const selectedCountry = useMemo(
    () =>
      universitiesSectionData.countries.find((item) => item.id === countryId),
    [countryId],
  );
  const selectedUniversity = useMemo(
    () =>
      universitiesCatalogData.universities.find(
        (item) => item.id === universityId,
      ),
    [universityId],
  );
  const selectedProgram = useMemo(
    () =>
      universitiesCatalogData.programs.find((item) => item.id === programId),
    [programId],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phoneCode: "+92",
      phone: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    if (submitState === "submitting") return;

    setSubmitState("submitting");
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("form_type", "student-consultancy-application");
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phoneCode", values.phoneCode);
      formData.append("phone", values.phone);
      formData.append(
        "destination",
        selectedCountry?.name ?? "Student Consultancy",
      );
      formData.append("message", values.message);
      formData.append("student_country", selectedCountry?.name ?? countryId);
      formData.append(
        "student_university",
        selectedUniversity?.name ?? universityId,
      );
      formData.append("student_program", selectedProgram?.title ?? programId);

      if (typeof window !== "undefined") {
        formData.append("metadata_url", window.location.href);
      }

      await sendAlfursanEmail(formData);
      setSubmitState("success");
    } catch (error) {
      console.error("[student-consultancy-apply] submit error", error);
      setSubmitState("error");
      setErrorMessage("Unable to submit right now. Please try again.");
    }
  });

  return (
    <section className="my-32 w-full bg-transparent sm:my-36 md:my-40 lg:my-44">
      <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-4">
          <DiamondIcon
            className="text-caribbean-current h-11 w-11"
            aria-hidden
          />
          <h1 className="text-heading-smd xs:text-heading-md lg:text-heading-lmd xl:text-heading-lg text-smoky-black font-heading leading-tight font-normal tracking-wide text-pretty">
            Apply for University Admission
          </h1>
          <p className="text-smoky-black/70 text-body-sm">
            Your selected details are prefilled below. Submit this form and our
            admissions team will contact you.
          </p>

          <div className="text-body-base space-y-2">
            <p>
              <span className="font-semibold">Country:</span>{" "}
              {selectedCountry?.name ?? "Not selected"}
            </p>
            <p>
              <span className="font-semibold">University:</span>{" "}
              {selectedUniversity?.name ?? "Not selected"}
            </p>
            <p>
              <span className="font-semibold">Program:</span>{" "}
              {selectedProgram?.title ?? "Not selected"}
            </p>
          </div>
        </div>

        <div className="border border-[#1A16120F] bg-white p-6">
          {submitState === "success" ? (
            <div className="space-y-2">
              <h2 className="font-heading text-xl">Application received</h2>
              <p className="text-smoky-black/70 text-sm">
                Thank you. Our student consultancy team will contact you
                shortly.
              </p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="mb-1 block text-xs">
                  Full Name
                </label>
                <Input id="name" {...register("name")} />
                {errors.name ? (
                  <p className="text-destructive text-xs">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-xs">
                  Email
                </label>
                <Input id="email" type="email" {...register("email")} />
                {errors.email ? (
                  <p className="text-destructive text-xs">
                    {errors.email.message}
                  </p>
                ) : null}
              </div>
              <div className="grid gap-3 sm:grid-cols-[120px_1fr]">
                <div>
                  <label htmlFor="phoneCode" className="mb-1 block text-xs">
                    Code
                  </label>
                  <Input id="phoneCode" {...register("phoneCode")} />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-xs">
                    Phone
                  </label>
                  <Input id="phone" {...register("phone")} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-xs">
                  Message
                </label>
                <Textarea id="message" rows={6} {...register("message")} />
                {errors.message ? (
                  <p className="text-destructive text-xs">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>
              {errorMessage ? (
                <p className="text-destructive text-xs">{errorMessage}</p>
              ) : null}
              <Button
                type="submit"
                variant="secondary"
                icon="arrowTopRight"
                className="cursor-pointer"
              >
                {submitState === "submitting"
                  ? "Submitting..."
                  : "Submit Application"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
