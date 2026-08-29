import * as z from "zod";
import callingCodes from "country-calling-code";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Please enter your full name.").trim(),

  email: z
    .string()
    .email("Please enter a valid email.")
    .optional()
    .or(z.literal("")),

  phoneCode: z.string().min(1, "Select your country code."),

  phone: z.string().min(5, "Please enter a valid phone number."),

  // ✅ make everything else optional to avoid crashes
  company: z.string().optional(),
  travelType: z.string().optional(),
  travelers: z.string().optional(),

  departureCity: z.string().optional(),
  destinationCity: z.string().optional(),

  departureDate: z.string().optional(),
  returnDate: z.string().optional(),

  frequency: z.string().optional(),

  roomType: z.string().optional(), // ✅ FIX (your current error)

  message: z.string().optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const phoneCodeOptions = callingCodes.map((country) => ({
  value: `+${country.countryCodes[0]} (${country.country})`,
  label: `+${country.countryCodes[0]} (${country.country})`,
}));

export const defaultContactFormValues: ContactFormValues = {
  name: "",
  email: "",
  phoneCode: "+92 (Pakistan)",
  phone: "",

  company: "",
  travelType: "",
  travelers: "",

  departureCity: "",
  destinationCity: "",

  departureDate: "",
  returnDate: "",

  frequency: "",
  roomType: "", // ✅ FIX

  message: "",
};