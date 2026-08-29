import type { SVGProps } from "react";

export default function FlagAustralia(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 48 32" aria-label="Australia" {...props}><rect width="48" height="32" rx="3" fill="#153B70"/><path d="M8 6h12M14 2v12" stroke="#fff" strokeWidth="3"/><circle cx="34" cy="17" r="3" fill="#fff"/><circle cx="39" cy="25" r="2" fill="#fff"/></svg>;
}
