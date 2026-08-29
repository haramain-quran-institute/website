import * as z from "zod";

const yesNo = ["yes", "no"] as const;

export const umrahClassFormSchema = z.object({
  name: z.string().trim().min(1, "Please enter your full name."),
  email: z
    .string()
    .trim()
    .min(5, "Please enter a valid email.")
    .email("Please enter a valid email."),
  phoneCode: z.string().min(1, "Select your country code."),
  phone: z.string().min(5, "Please enter a valid phone number."),
  performedBefore: z
    .string()
    .min(1, "Please select an option.")
    .pipe(z.enum(yesNo)),
  persons: z.coerce.number().min(1, "Please enter at least 1 person."),
  bookedWithAlfursan: z
    .string()
    .min(1, "Please select an option.")
    .pipe(z.enum(yesNo)),
  message: z.string().trim().min(1, "Please share how we can help."),
});

export type UmrahClassFormValues = z.infer<typeof umrahClassFormSchema>;

export const defaultUmrahClassFormValues: UmrahClassFormValues = {
  name: "",
  email: "",
  phoneCode: "+92 (Pakistan)",
  phone: "",
  performedBefore: "no",
  persons: 1,
  bookedWithAlfursan: "no",
  message: "",
};
