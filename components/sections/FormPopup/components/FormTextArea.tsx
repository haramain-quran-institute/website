"use client";

import * as React from "react";
import { Textarea, type TextareaProps } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface FormTextareaProps extends TextareaProps {
  hasError?: boolean;
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <Textarea
        ref={ref}
        className={cn(
          "text-body-sm text-smoky-black placeholder:text-smoky-black/40 min-h-[120px] resize-y rounded-md border bg-white/65 px-4 py-3 shadow-sm backdrop-blur-[6px] focus-visible:ring-2",
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

FormTextarea.displayName = "FormTextarea";

export { FormTextarea };
