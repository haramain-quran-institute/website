"use client";

import * as React from "react";
import { Input, type InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FormInputProps extends InputProps {
  hasError?: boolean;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        className={cn(
          "text-body-sm text-smoky-black placeholder:text-smoky-black/40 h-11 rounded-md border bg-white/65 px-4 shadow-sm backdrop-blur-[6px] focus-visible:ring-2",
          hasError
            ? "border-destructive focus-visible:ring-destructive/35"
            : "border-caribbean-current/20 focus-visible:border-caribbean-current focus-visible:ring-caribbean-current/35",
          className,
        )}
        {...props}
      />
    );
  },
);

FormInput.displayName = "FormInput";

export { FormInput };
