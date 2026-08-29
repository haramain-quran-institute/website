import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[4px] font-body font-semibold leading-none gap-2 transition duration-300",  
  {
    variants: {
      variant: {
        primary:
          "bg-ChampagneSilk text-[#0D463E] dark:text-[#0D463E] hover:bg-[#D0A86C] hover:text-[#0D463E]",
        secondary:
          "border border-ChampagneSilk/35 bg-transparent !text-ChampagneSilk hover:border-[#D0A86C] hover:bg-[#D0A86C]/10 hover:!text-[#D0A86C]",
        primaryReverse:
          "bg-[#0D463E] border border-[#0D463E] !text-ChampagneSilk hover:bg-ChampagneSilk hover:!text-[#0D463E]",
        iconOnly: "bg-ChampagneSilk border border-[#0D463E]/20",
      },
      size: {
        default: "px-7 py-4 sm:px-9",
        iconOnly: "h-6 w-6 rounded-full p-1",
      },
      textSize: {
        default: "text-button_sm md:text-button_base lg:text-button_lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      textSize: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };