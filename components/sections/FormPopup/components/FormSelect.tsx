"use client";

import * as React from "react";
import { Select, type SelectProps } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  hasError?: boolean;
}

const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, options, hasError, ...props }, ref) => {
    return (
      <Select
        ref={ref}
        className={cn(
          "text-body-sm text-smoky-black h-11 rounded-md border bg-white/65 px-3 shadow-sm backdrop-blur-[6px] focus-visible:ring-2",
          hasError
            ? "border-destructive focus-visible:ring-destructive/35"
            : "border-caribbean-current/20 focus-visible:border-caribbean-current focus-visible:ring-caribbean-current/35",
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    );
  },
);

FormSelect.displayName = "FormSelect";

export { FormSelect };
