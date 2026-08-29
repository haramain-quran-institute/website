"use client";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

export function FormField({
  label,
  htmlFor,
  error,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <Label
        htmlFor={htmlFor}
        className="text-body-xs text-smoky-black/80 font-medium"
      >
        {label}
      </Label>
      {children}
      {error && (
        <p className="text-body-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
