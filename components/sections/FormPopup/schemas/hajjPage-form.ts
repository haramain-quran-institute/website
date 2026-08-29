import * as z from "zod";

const performedBeforeValues = ["yes", "no"] as const;
const firstExperienceValues = ["first-time", "returning"] as const;
const durationValues = ["9-days", "11-days", "19-days"] as const;

export const hajjPageFormSchema = z
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
      .preprocess((v) => (v == null ? "" : String(v)), z.string())
      .refine((v) => v.length > 0, { message: "Please select an option." })
      .pipe(z.enum(performedBeforeValues)),

    firstExperience: z
      .preprocess((v) => (v == null ? "" : String(v)), z.string())
      .refine((v) => v.length > 0, { message: "Please select an option." })
      .pipe(z.enum(firstExperienceValues)),

    adults: z.coerce.number().min(0, "Adults cannot be negative."),

    children: z.coerce.number().min(0, "Children cannot be negative."),

    year: z.coerce.number().min(2024, "Please enter a valid year."),

    duration: z
      .preprocess((v) => (v == null ? "" : String(v)), z.string())
      .refine((v) => v.length > 0, { message: "Please select a duration." })
      .pipe(z.enum(durationValues)),

    message: z.string().trim().min(1, "Please share how we can help."),
  })
  .refine((v) => v.adults + v.children === v.persons, {
    message: "Adults + Children must equal total persons.",
    path: ["persons"],
  });

export type HajjPageFormValues = z.infer<typeof hajjPageFormSchema>;

export const defaultHajjPageFormValues: HajjPageFormValues = {
  name: "",
  email: "",
  phoneCode: "+92 (Pakistan)",
  phone: "",
  persons: 1,
  performedBefore: "no",
  firstExperience: "first-time",
  adults: 1,
  children: 0,
  year: new Date().getFullYear(),
  duration: "9-days",
  message: "",
};
