import * as z from "zod";

const yesNo = ["yes", "no"] as const;
const firstExperienceValues = ["first-time", "returning"] as const;
const durationValues = ["15-days", "21-days"] as const;

export const umrahPageFormSchema = z
  .object({
    name: z.string().trim().min(1, "Please enter your full name."),
    email: z
      .string()
      .trim()
      .min(5, "Please enter a valid email.")
      .email("Please enter a valid email."),
    phoneCode: z.string().min(1, "Select your country code."),
    phone: z.string().min(5, "Please enter a valid phone number."),

    persons: z.coerce.number().min(1, "Please enter at least 1 person."),

    performedBefore: z
      .string()
      .min(1, "Please select an option.")
      .pipe(z.enum(yesNo)),

    firstExperience: z
      .string()
      .min(1, "Please select an option.")
      .pipe(z.enum(firstExperienceValues)),

    adults: z.coerce.number().min(0, "Adults cannot be negative."),

    children: z.coerce.number().min(0, "Children cannot be negative."),

    month: z.string().min(1, "Please select a month."),

    duration: z
      .string()
      .min(1, "Please select a duration.")
      .pipe(z.enum(durationValues)),

    message: z.string().trim().min(1, "Please share how we can help."),
  })
  .refine((v) => v.adults + v.children === v.persons, {
    message: "Adults + Children must equal total persons.",
    path: ["persons"],
  });

export type UmrahPageFormValues = z.infer<typeof umrahPageFormSchema>;

export const defaultUmrahPageFormValues: UmrahPageFormValues = {
  name: "",
  email: "",
  phoneCode: "+92 (Pakistan)",
  phone: "",
  persons: 1,
  performedBefore: "no",
  firstExperience: "first-time",
  adults: 1,
  children: 0,
  month: "January",
  duration: "15-days",
  message: "",
};
