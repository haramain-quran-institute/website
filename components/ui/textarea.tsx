import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full border-b border-PolishedSilver bg-transparent px-3 py-2 !text-body_xxs text-PearlWhite ring-offset-EbonyShadow-60 placeholder:text-PolishedSilver focus-visible:rounded focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-EbonyShadow-60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 smd:!text-body_xs",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
