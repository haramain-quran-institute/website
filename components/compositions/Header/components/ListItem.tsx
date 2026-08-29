import * as React from "react";
import { cn } from "../../../lib/utils";

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => (
  <li>
    <a
      ref={ref}
      className={cn(
        "group block select-none rounded-[4px] p-3 no-underline outline-none transition-colors duration-200 hover:!bg-[#0A3E37] focus:!bg-[#0A3E37]",
        className
      )}
      {...props}
    >
      <div className="space-y-1.5">
        <div className="text-body_sm font-semibold leading-none tracking-[-0.01em] text-white">
          {title}
        </div>

        <p
  style={{ color: "#dbdbdb" }}
  className="mt-1 line-clamp-2 text-[12px] font-normal leading-[1.45]"
>
  {children}
</p>
      </div>
    </a>
  </li>
));

ListItem.displayName = "ListItem";