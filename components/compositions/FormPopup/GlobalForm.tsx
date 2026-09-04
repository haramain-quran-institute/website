"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Video,
} from "lucide-react";

import { sendEmail } from "./actions/sendEmail";

import { useConversionTracking } from "../CookieConsent";
import { ConversionSource } from "../CookieConsent/config/conversionConfig";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { cn } from "../../lib/utils";

const formSchema = z.object({
  organizerName: z
    .string()
    .min(1, "Please enter the organizer's name.")
    .trim(),

  studentName: z
    .string()
    .min(1, "Please enter the student's name.")
    .trim(),

  gender: z.enum(["male", "female"], {
    message: "Please select the student's gender.",
  }),

  age: z
    .string()
    .min(1, "Please enter the student's age.")
    .trim(),

  relationship: z
    .string()
    .min(1, "Please select your relationship to the student.")
    .trim(),

  email: z
    .string()
    .email("Please enter a valid email address.")
    .trim()
    .toLowerCase(),

  whatsapp: z
    .string()
    .optional()
    .transform((value) => value?.trim() || undefined),

  course: z
    .string()
    .min(1, "Please select a course.")
    .trim(),

  specialNeeds: z
    .string()
    .min(1, "Please select an option.")
    .trim(),

  specialNeedsDetails: z
    .string()
    .optional()
    .transform((value) => value?.trim() || undefined),

  previousExperience: z
    .string()
    .min(1, "Please select the student's previous experience.")
    .trim(),

  additionalNotes: z
    .string()
    .optional()
    .transform((value) => value?.trim() || undefined),
});

type FormValues = z.infer<typeof formSchema>;

type GlobalFormProps = {
  source: ConversionSource;
};

interface FormMetadata {
  city: string;
  country: string;
  url: string;
}

const courses = [
  "Quran Reading",
  "Noorani Qaida",
  "Tajweed",
  "Quran Memorization",
  "Islamic Studies",
  "Arabic",
];

const relationships = [
  "Self",
  "Father",
  "Mother",
  "Brother / Sister",
  "Guardian",
  "Other",
];

const experienceOptions = [
  "No previous experience",
  "Beginner",
  "Some experience",
  "Intermediate",
  "Advanced",
];

function getAvailableDates() {
  const dates: Date[] = [];
  const today = new Date();

  for (let i = 0; i < 90; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }

  return dates;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Karachi",
  }).format(date);
}

function getTimeSlots() {
  const slots: string[] = [];

  // 24-hour availability.
  // 30-minute class + 15-minute gap.
  for (let minutes = 0; minutes < 24 * 60; minutes += 45) {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;

    const start = new Date();
    start.setHours(hour, minute, 0, 0);

    slots.push(
      start.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    );
  }

  return slots;
}

export default function GlobalForm({ source }: GlobalFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormSubmitSuccess, setIsFormSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [calendarMonth, setCalendarMonth] = useState(() => {
    const today = new Date();

    return new Date(
      today.getFullYear(),
      today.getMonth(),
      1,
    );
  });

  const [metadata, setMetadata] = useState<FormMetadata>({
    city: "",
    country: "",
    url: "",
  });

  const conversionTracking = useConversionTracking();

  const availableDates = useMemo(() => getAvailableDates(), []);
  const timeSlots = useMemo(() => getTimeSlots(), []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      organizerName: "",
      studentName: "",
      gender: undefined,
      age: "",
      relationship: "",
      email: "",
      whatsapp: "",
      course: "",
      specialNeeds: "",
      specialNeedsDetails: "",
      previousExperience: "",
      additionalNotes: "",
    },
  });

  const specialNeeds = form.watch("specialNeeds");

  useEffect(() => {
    const collectMetadata = async () => {
      try {
        setMetadata((prev) => ({
          ...prev,
          url: window.location.href,
        }));

        const controller = new AbortController();

        const timeoutId = setTimeout(
          () => controller.abort(),
          5000,
        );

        const geoResponse = await fetch(
          "https://freeipapi.com/api/json/",
          {
            signal: controller.signal,
          },
        );

        clearTimeout(timeoutId);

        if (!geoResponse.ok) {
          throw new Error("Failed to fetch location data");
        }

        const geoData = await geoResponse.json();

        setMetadata((prev) => ({
          ...prev,
          city: geoData.cityName || "Unknown",
          country: geoData.countryName || "Unknown",
        }));
      } catch {
        setMetadata((prev) => ({
          ...prev,
          city: "Unknown",
          country: "Unknown",
        }));
      }
    };

    collectMetadata();
  }, []);

  const isDateSelected = (date: Date) => {
    if (!selectedDate) return false;

    return (
      selectedDate.getFullYear() === date.getFullYear() &&
      selectedDate.getMonth() === date.getMonth() &&
      selectedDate.getDate() === date.getDate()
    );
  };

  const isDateAvailable = (date: Date) => {
    return availableDates.some(
      (availableDate) =>
        availableDate.getFullYear() === date.getFullYear() &&
        availableDate.getMonth() === date.getMonth() &&
        availableDate.getDate() === date.getDate(),
    );
  };

  const getCalendarDays = () => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();

    const firstDay = new Date(
      year,
      month,
      1,
    ).getDay();

    const daysInMonth = new Date(
      year,
      month + 1,
      0,
    ).getDate();

    const days: (Date | null)[] = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        new Date(year, month, day),
      );
    }

    return days;
  };

  const nextMonth = () => {
    setCalendarMonth(
      new Date(
        calendarMonth.getFullYear(),
        calendarMonth.getMonth() + 1,
        1,
      ),
    );
  };

  const previousMonth = () => {
    const currentMonth = new Date();

    currentMonth.setDate(1);

    const previous = new Date(
      calendarMonth.getFullYear(),
      calendarMonth.getMonth() - 1,
      1,
    );

    if (previous >= currentMonth) {
      setCalendarMonth(previous);
    }
  };

  const handleContinueFromDate = () => {
    if (!selectedDate) {
      setError("Please select a date.");
      return;
    }

    setError(null);
    setStep(2);
  };

  const handleContinueFromTime = () => {
    if (!selectedTime) {
      setError("Please select a time slot.");
      return;
    }

    setError(null);
    setStep(3);
  };

  const handleContinueFromDetails = async () => {
    const valid = await form.trigger();

    if (!valid) return;

    setError(null);
    setStep(4);
  };

  const onSubmit = async (values: FormValues) => {
    if (
      isSubmitting ||
      !selectedDate ||
      !selectedTime
    ) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();

      Object.entries(values).forEach(
        ([key, value]) => {
          if (value) {
            formData.append(
              key,
              value.toString(),
            );
          }
        },
      );

      formData.append(
        "bookingDate",
        selectedDate.toISOString(),
      );

      formData.append(
        "bookingDateFormatted",
        formatDate(selectedDate),
      );

      formData.append(
        "bookingTime",
        selectedTime,
      );

      formData.append(
        "duration",
        "30 minutes",
      );

      formData.append(
        "timezone",
        "Asia/Karachi",
      );

      formData.append(
        "meetingType",
        "Google Meet",
      );

      Object.entries(metadata).forEach(
        ([key, value]) => {
          formData.append(
            `metadata_${key}`,
            value,
          );
        },
      );

      await sendEmail(formData);

      await conversionTracking.trackConversion({
        name: values.studentName,
        email: values.email,
        phone:
          values.whatsapp ||
          "Not Provided",
        company:
          "Haramain Quran Institute",
        message:
          values.additionalNotes ||
          `Free Trial Class booked for ${formatDate(
            selectedDate,
          )} at ${selectedTime}.`,
        communicationPreference:
          "email",
        source,
      });

      setIsFormSubmitSuccess(true);
    } catch {
      setError(
        "Failed to confirm your booking. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isFormSubmitSuccess) {
    return (
      <div className="flex size-full items-center justify-center bg-[#FBF6EF] py-24">
        <div className="flex max-w-lg flex-col items-center gap-4 text-center">
          <div className="flex size-14 items-center justify-center rounded-full border border-[#D0A86C]/40 bg-[#D0A86C]/10">
            <CalendarDays className="size-6 text-[#D0A86C]" />
          </div>

          <h3 className="font-bricolage text-heading_xs font-medium leading-none tracking-wider text-[#161513] sm:text-heading_sm">
            Trial Class Booked
          </h3>

          <p className="font-bricolage text-body_xxs leading-relaxed tracking-wider text-[#777571]">
            Thank you! Your free trial class request has been received.
            We&apos;ll contact you with the class details shortly.
          </p>

          {selectedDate && selectedTime && (
            <div className="mt-3 rounded-xl border border-[#0D463E]/15 bg-[#0D463E]/5 px-6 py-4 text-left">
              <p className="font-bricolage text-body_xxs text-[#0D463E]">
                {formatDate(selectedDate)}
              </p>

              <p className="mt-1 font-bricolage text-body_xxs text-[#161513]">
                {selectedTime} · 30 minutes
              </p>

              <p className="mt-1 font-bricolage text-body_xxxs text-[#777571]">
                Asia/Karachi · Google Meet
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 bg-[#FBF6EF] pb-16"
      >
        {/* Progress */}
        <div className="flex items-center gap-3 pt-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className={cn(
                "h-1 flex-1 rounded-full transition-all",
                item <= step
                  ? "bg-[#0D463E]"
                  : "bg-[#0D463E]/15",
              )}
            />
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="flex flex-col gap-7">
            <div>
              <p className="font-bricolage text-body_xxs uppercase tracking-[0.2em] text-[#D0A86C]">
                Step 1
              </p>

              <h3 className="mt-2 font-bricolage text-heading_xs font-medium text-[#161513]">
                Choose a Date
              </h3>

              <p className="mt-2 font-bricolage text-body_xxxs leading-relaxed text-[#777571]">
                Select a convenient date for your free Quran trial class.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0D463E]/15 bg-[#FBF6EF] p-5">
              <div className="mb-5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={previousMonth}
                  className="rounded-lg p-2 text-[#0D463E] transition hover:bg-[#0D463E]/10 hover:text-[#0A3E37]"
                >
                  <ChevronLeft className="size-5" />
                </button>

                <h4 className="font-bricolage text-body_sm tracking-wider text-[#0D463E]">
                  {calendarMonth.toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      year: "numeric",
                    },
                  )}
                </h4>

                <button
                  type="button"
                  onClick={nextMonth}
                  className="rounded-lg p-2 text-[#0D463E] transition hover:bg-[#0D463E]/10 hover:text-[#0A3E37]"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>

              <div className="mb-3 grid grid-cols-7 gap-1 text-center">
                {[
                  "Sun",
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                ].map((day) => (
                  <div
                    key={day}
                    className="py-2 font-bricolage text-[10px] uppercase tracking-wider text-[#777571]"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {getCalendarDays().map(
                  (date, index) => {
                    if (!date) {
                      return (
                        <div
                          key={`empty-${index}`}
                        />
                      );
                    }

                    const available =
                      isDateAvailable(date);

                    const selected =
                      isDateSelected(date);

                    return (
                      <button
                        key={date.toISOString()}
                        type="button"
                        disabled={!available}
                        onClick={() => {
                          setSelectedDate(
                            date,
                          );

                          setSelectedTime(
                            null,
                          );

                          setError(null);
                        }}
                        className={cn(
                          "aspect-square rounded-xl font-bricolage text-sm transition-all",
                          available
                            ? "text-[#161513] hover:bg-[#D0A86C]/15"
                            : "cursor-not-allowed text-[#777571]/30",
                          selected &&
                            "!bg-[#0D463E] !font-semibold !text-[#FBF6EF] hover:!bg-[#0A3E37]",
                        )}
                      >
                        {date.getDate()}
                      </button>
                    );
                  },
                )}
              </div>
            </div>

            {selectedDate && (
              <div className="flex items-center gap-3 rounded-xl border border-[#D0A86C]/30 bg-[#D0A86C]/10 p-4">
                <CalendarDays className="size-5 text-[#D0A86C]" />

                <div>
                  <p className="font-bricolage text-body_xxxs text-[#777571]">
                    Selected date
                  </p>

                  <p className="mt-1 font-bricolage text-body_xxs text-[#0D463E]">
                    {formatDate(
                      selectedDate,
                    )}
                  </p>
                </div>
              </div>
            )}

            {error && (
              <p className="font-bricolage text-body_xxxs text-[#0D463E]">
                {error}
              </p>
            )}

            <div className="flex justify-end">
              <Button
                type="button"
                onClick={
                  handleContinueFromDate
                }
                className="!bg-[#0D463E] !font-bricolage !text-[#FBF6EF] hover:!bg-[#0A3E37]"
              >
                Continue
                <ChevronRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="flex flex-col gap-7">
            <div>
              <p className="font-bricolage text-body_xxs uppercase tracking-[0.2em] text-[#D0A86C]">
                Step 2
              </p>

              <h3 className="mt-2 font-bricolage text-heading_xs font-medium text-[#161513]">
                Choose a Time
              </h3>

              <p className="mt-2 font-bricolage text-body_xxxs leading-relaxed text-[#777571]">
                {selectedDate &&
                  formatDate(selectedDate)}
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-[#0D463E]/15 bg-[#FBF6EF] p-4">
              <Clock3 className="size-5 text-[#D0A86C]" />

              <div>
                <p className="font-bricolage text-body_xxxs text-[#777571]">
                  Class duration
                </p>

                <p className="font-bricolage text-body_xxs text-[#0D463E]">
                  30 minutes · Asia/Karachi
                </p>
              </div>
            </div>

            <div className="grid max-h-[420px] grid-cols-2 gap-3 overflow-y-auto pr-1 scrollbar-thin scrollbar-track-[#0D463E]/5 scrollbar-thumb-[#0D463E]/40 hover:scrollbar-thumb-[#0D463E]/60 sm:grid-cols-3">
              {timeSlots.map((time) => {
                const selected =
                  selectedTime === time;

                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => {
                      setSelectedTime(
                        time,
                      );

                      setError(null);
                    }}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-center font-bricolage text-body_xxxs transition-all",
                      selected
                        ? "!border-[#0D463E] !bg-[#0D463E] !text-[#FBF6EF]"
                        : "border-[#0D463E]/15 bg-[#FBF6EF] text-[#161513] hover:border-[#D0A86C]/60 hover:bg-[#D0A86C]/10",
                    )}
                  >
                    {time}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between gap-3">
              <Button
                type="button"
                onClick={() => setStep(1)}
                className="!border-[#0D463E]/20 !bg-transparent !font-bricolage !text-[#0D463E] hover:!bg-[#0D463E]/10"
              >
                <ChevronLeft className="mr-2 size-4" />
                Back
              </Button>

              <Button
                type="button"
                onClick={
                  handleContinueFromTime
                }
                className="!bg-[#0D463E] !font-bricolage !text-[#FBF6EF] hover:!bg-[#0A3E37]"
              >
                Continue
                <ChevronRight className="ml-2 size-4" />
              </Button>
            </div>

            {error && (
              <p className="font-bricolage text-body_xxxs text-[#0D463E]">
                {error}
              </p>
            )}
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="flex flex-col gap-7">
            <div>
              <p className="font-bricolage text-body_xxs uppercase tracking-[0.2em] text-[#D0A86C]">
                Step 3
              </p>

              <h3 className="mt-2 font-bricolage text-heading_xs font-medium text-[#161513]">
                Student Details
              </h3>

              <p className="mt-2 font-bricolage text-body_xxxs leading-relaxed text-[#777571]">
                Tell us a little about the student
                so we can prepare for the trial
                class.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="organizerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="!font-bricolage !text-[#0D463E]">
                      Trial Class Organizer Name*
                    </FormLabel>

                    <FormControl>
                      <Input
                        className="!font-bricolage !text-[#161513] placeholder:!text-[#777571]"
                        placeholder="Parent / Guardian Name"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="studentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="!font-bricolage !text-[#0D463E]">
                      Student Name*
                    </FormLabel>

                    <FormControl>
                      <Input
                        className="!font-bricolage !text-[#161513] placeholder:!text-[#777571]"
                        placeholder="Student's Full Name"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="!font-bricolage !text-[#0D463E]">
                      Student Gender*
                    </FormLabel>

                    <FormControl>
                      <Select
                        onValueChange={
                          field.onChange
                        }
                        value={field.value}
                      >
                        <SelectTrigger className="!font-bricolage !text-[#161513]">
                          {field.value
                            ? field.value ===
                              "male"
                              ? "Male"
                              : "Female"
                            : "Select Gender"}
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="male">
                            Male
                          </SelectItem>

                          <SelectItem value="female">
                            Female
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="!font-bricolage !text-[#0D463E]">
                      Student Age*
                    </FormLabel>

                    <FormControl>
                      <Input
                        className="!font-bricolage !text-[#161513] placeholder:!text-[#777571]"
                        type="number"
                        min="1"
                        max="100"
                        placeholder="Age"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="relationship"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="!font-bricolage !text-[#0D463E]">
                      Your Relationship to Student*
                    </FormLabel>

                    <FormControl>
                      <Select
                        onValueChange={
                          field.onChange
                        }
                        value={field.value}
                      >
                        <SelectTrigger className="!font-bricolage !text-[#161513]">
                          {field.value ||
                            "Select Relationship"}
                        </SelectTrigger>

                        <SelectContent>
                          {relationships.map(
                            (
                              relationship,
                            ) => (
                              <SelectItem
                                key={
                                  relationship
                                }
                                value={
                                  relationship
                                }
                              >
                                {relationship}
                              </SelectItem>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="!font-bricolage !text-[#0D463E]">
                      Email Address*
                    </FormLabel>

                    <FormControl>
                      <Input
                        className="!font-bricolage !text-[#161513] placeholder:!text-[#777571]"
                        type="email"
                        placeholder="Your Email Address"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="!font-bricolage !text-[#0D463E]">
                      WhatsApp (Optional)
                    </FormLabel>

                    <FormControl>
                      <Input
                        className="!font-bricolage !text-[#161513] placeholder:!text-[#777571]"
                        type="tel"
                        placeholder="+966 59 617 7943"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel className="!font-bricolage !text-[#0D463E]">
                      Choose Course for Trial Class*
                    </FormLabel>

                    <FormControl>
                      <Select
                        onValueChange={
                          field.onChange
                        }
                        value={field.value}
                      >
                        <SelectTrigger className="!font-bricolage !text-[#161513]">
                          {field.value ||
                            "Select Course"}
                        </SelectTrigger>

                        <SelectContent>
                          {courses.map(
                            (course) => (
                              <SelectItem
                                key={course}
                                value={course}
                              >
                                {course}
                              </SelectItem>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specialNeeds"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel className="!font-bricolage !text-[#0D463E]">
                      Does the student have any disability or special need?*
                    </FormLabel>

                    <FormControl>
                      <Select
                        onValueChange={
                          field.onChange
                        }
                        value={field.value}
                      >
                        <SelectTrigger className="!font-bricolage !text-[#161513]">
                          {field.value ||
                            "Select an option"}
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="No">
                            No
                          </SelectItem>

                          <SelectItem value="Yes">
                            Yes
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {specialNeeds === "Yes" && (
                <FormField
                  control={form.control}
                  name="specialNeedsDetails"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel className="!font-bricolage !text-[#0D463E]">
                        Special Need Details
                      </FormLabel>

                      <FormControl>
                        <Textarea
                          className="!font-bricolage !text-[#161513] placeholder:!text-[#777571]"
                          rows={3}
                          placeholder="Please tell us how we can support the student."
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="previousExperience"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel className="!font-bricolage !text-[#0D463E]">
                      Previous Quran Education Experience?*
                    </FormLabel>

                    <FormControl>
                      <Select
                        onValueChange={
                          field.onChange
                        }
                        value={field.value}
                      >
                        <SelectTrigger className="!font-bricolage !text-[#161513]">
                          {field.value ||
                            "Select Experience"}
                        </SelectTrigger>

                        <SelectContent>
                          {experienceOptions.map(
                            (
                              experience,
                            ) => (
                              <SelectItem
                                key={
                                  experience
                                }
                                value={
                                  experience
                                }
                              >
                                {experience}
                              </SelectItem>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalNotes"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel className="!font-bricolage !text-[#0D463E]">
                      Additional Notes
                    </FormLabel>

                    <FormControl>
                      <Textarea
                        className="!font-bricolage !text-[#161513] placeholder:!text-[#777571]"
                        rows={4}
                        placeholder="Anything else you'd like us to know?"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <Button
                type="button"
                onClick={() => setStep(2)}
                className="!border-[#0D463E]/20 !bg-transparent !font-bricolage !text-[#0D463E] hover:!bg-[#0D463E]/10"
              >
                <ChevronLeft className="mr-2 size-4" />
                Back
              </Button>

              <Button
                type="button"
                onClick={
                  handleContinueFromDetails
                }
                className="!bg-[#0D463E] !font-bricolage !text-[#FBF6EF] hover:!bg-[#0A3E37]"
              >
                Review Booking
                <ChevronRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="flex flex-col gap-7">
            <div>
              <p className="font-bricolage text-body_xxs uppercase tracking-[0.2em] text-[#D0A86C]">
                Step 4
              </p>

              <h3 className="mt-2 font-bricolage text-heading_xs font-medium text-[#161513]">
                Confirm Your Trial Class
              </h3>

              <p className="mt-2 font-bricolage text-body_xxxs leading-relaxed text-[#777571]">
                Review your booking details before confirming.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#0D463E]/15 bg-[#FBF6EF]">
              <div className="border-b border-[#0D463E]/10 p-5">
                <div className="flex items-start gap-4">
                  <CalendarDays className="mt-1 size-5 shrink-0 text-[#D0A86C]" />

                  <div>
                    <p className="font-bricolage text-body_xxxs text-[#777571]">
                      Date
                    </p>

                    <p className="mt-1 font-bricolage text-body_xxs text-[#0D463E]">
                      {selectedDate
                        ? formatDate(
                            selectedDate,
                          )
                        : "Not selected"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-[#0D463E]/10 p-5">
                <div className="flex items-start gap-4">
                  <Clock3 className="mt-1 size-5 shrink-0 text-[#D0A86C]" />

                  <div>
                    <p className="font-bricolage text-body_xxxs text-[#777571]">
                      Time
                    </p>

                    <p className="mt-1 font-bricolage text-body_xxs text-[#0D463E]">
                      {selectedTime}
                    </p>

                    <p className="mt-1 font-bricolage text-body_xxxs text-[#777571]">
                      30 minutes · Asia/Karachi
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-[#0D463E]/10 p-5">
                <div className="flex items-start gap-4">
                  <Video className="mt-1 size-5 shrink-0 text-[#D0A86C]" />

                  <div>
                    <p className="font-bricolage text-body_xxxs text-[#777571]">
                      Meeting
                    </p>

                    <p className="mt-1 font-bricolage text-body_xxs text-[#0D463E]">
                      Google Meet
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
                <div>
                  <p className="font-bricolage text-body_xxxs text-[#777571]">
                    Organizer
                  </p>

                  <p className="mt-1 font-bricolage text-body_xxxs text-[#161513]">
                    {form.getValues(
                      "organizerName",
                    )}
                  </p>
                </div>

                <div>
                  <p className="font-bricolage text-body_xxxs text-[#777571]">
                    Student
                  </p>

                  <p className="mt-1 font-bricolage text-body_xxxs text-[#161513]">
                    {form.getValues(
                      "studentName",
                    )}
                  </p>
                </div>

                <div>
                  <p className="font-bricolage text-body_xxxs text-[#777571]">
                    Course
                  </p>

                  <p className="mt-1 font-bricolage text-body_xxxs text-[#161513]">
                    {form.getValues("course")}
                  </p>
                </div>

                <div>
                  <p className="font-bricolage text-body_xxxs text-[#777571]">
                    Email
                  </p>

                  <p className="mt-1 break-all font-bricolage text-body_xxxs text-[#161513]">
                    {form.getValues("email")}
                  </p>
                </div>
              </div>
            </div>

            {error && (
              <p className="font-bricolage text-body_xxxs text-[#0D463E]">
                {error}
              </p>
            )}

            <div className="flex items-center justify-between gap-3">
              <Button
                type="button"
                onClick={() => setStep(3)}
                disabled={isSubmitting}
                className="!border-[#0D463E]/20 !bg-transparent !font-bricolage !text-[#0D463E] hover:!bg-[#0D463E]/10"
              >
                <ChevronLeft className="mr-2 size-4" />
                Back
              </Button>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "!bg-[#0D463E] !font-bricolage !text-[#FBF6EF] hover:!bg-[#0A3E37]",
                  isSubmitting &&
                    "pointer-events-none cursor-not-allowed opacity-50",
                )}
              >
                {isSubmitting
                  ? "Confirming..."
                  : "Confirm Booking"}
              </Button>
            </div>

            <p className="text-center font-bricolage text-[10px] leading-relaxed text-[#777571]/70">
              By proceeding, you agree to Haramain Quran
              Institute&apos;s terms and privacy policy.
            </p>
          </div>
        )}
      </form>
    </Form>
  );
}
