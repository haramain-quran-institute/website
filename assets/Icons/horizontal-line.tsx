import type { SVGProps } from "react";

export default function HorizontalLineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M2 4h28M8 10h22M2 16h28" />
    </svg>
  );
}
