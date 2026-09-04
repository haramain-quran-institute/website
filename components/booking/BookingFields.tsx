"use client";

import { useEffect, useState } from "react";
import countryCallingCodes from "country-calling-code";
import { Globe2 } from "lucide-react";

const fallbackTimeZones = [
  "Asia/Riyadh",
  "Asia/Dubai",
  "Asia/Karachi",
  "Europe/London",
  "America/New_York",
  "America/Chicago",
  "America/Los_Angeles",
  "America/Toronto",
  "Australia/Sydney",
];

function timeZoneLabel(timeZone: string) {
  const [region, ...locationParts] = timeZone.split("/");
  const location = (locationParts.join(" / ") || region).replaceAll("_", " ");
  const area = locationParts.length ? region.replaceAll("_", " ") : "Worldwide";

  return `${location} — ${area}`;
}

export function TimeZoneSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [timeZones, setTimeZones] = useState(fallbackTimeZones);

  useEffect(() => {
    const getSupportedValues = (
      Intl as typeof Intl & {
        supportedValuesOf?: (key: "timeZone") => string[];
      }
    ).supportedValuesOf;

    if (getSupportedValues) {
      setTimeZones(getSupportedValues("timeZone").sort((a, b) => a.localeCompare(b)));
    }
  }, []);

  const options = timeZones.includes(value) ? timeZones : [value, ...timeZones];

  return (
    <label className="mt-6 flex max-w-xl items-center gap-3 rounded-[8px] border border-[#0D463E]/12 bg-white px-4 py-3">
      <Globe2 className="size-4 shrink-0 text-[#0D706D]" />
      <span className="sr-only">Select your country or city time zone</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full min-w-0 bg-transparent font-body text-sm text-[#0D463E] outline-none"
        aria-label="Country or city time zone"
      >
        {options.map((timeZone) => (
          <option key={timeZone} value={timeZone}>
            {timeZoneLabel(timeZone)}
          </option>
        ))}
      </select>
    </label>
  );
}

const callingCodeOptions = countryCallingCodes.flatMap((country) =>
  country.countryCodes.map((callingCode) => ({
    key: `${country.isoCode2}-${callingCode}`,
    country: country.country,
    value: `+${callingCode}`,
  })),
);

export function PhoneNumberField({ required = false }: { required?: boolean }) {
  return (
    <div className="mt-2 flex h-12 w-full overflow-hidden rounded-[6px] border border-[#0D463E]/15 bg-white focus-within:border-[#0D706D]">
      <select
        name="phoneCode"
        defaultValue="+966"
        aria-label="Country calling code"
        className="w-[132px] shrink-0 border-r border-[#0D463E]/10 bg-[#F7F2EA] px-3 font-body text-sm font-normal text-[#0D463E] outline-none sm:w-[155px]"
      >
        {callingCodeOptions.map((option) => (
          <option key={option.key} value={option.value}>
            {option.country} ({option.value})
          </option>
        ))}
      </select>
      <input
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        required={required}
        placeholder="Phone number"
        className="min-w-0 flex-1 bg-white px-3 font-body font-normal text-[#0D463E] outline-none sm:px-4"
      />
    </div>
  );
}

export function readCompletePhoneNumber(data: FormData) {
  const number = String(data.get("phone") || "").trim();
  const callingCode = String(data.get("phoneCode") || "").trim();

  return number ? `${callingCode} ${number}`.trim() : "";
}
