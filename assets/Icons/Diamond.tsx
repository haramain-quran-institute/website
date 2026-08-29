import type { SVGProps } from "react";

export default function DiamondIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M24 5 39 19 24 43 9 19 24 5Z" />
      <path d="m9 19 15 8 15-8M24 5v38" />
    </svg>
  );
}
