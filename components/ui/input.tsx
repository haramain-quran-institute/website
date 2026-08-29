import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full border-b border-PolishedSilver bg-transparent px-3 py-2 !text-body_xxs text-PolishedSilver ring-offset-EbonyShadow-60 placeholder:text-PolishedSilver focus-visible:rounded focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-EbonyShadow-60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 smd:!text-body_xs",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
