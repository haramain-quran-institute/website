import type { SVGProps } from "react";

export default function FlagUK(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 48 32" aria-label="United Kingdom" {...props}><rect width="48" height="32" rx="3" fill="#21468B"/><path d="m0 0 48 32M48 0 0 32" stroke="#fff" strokeWidth="7"/><path d="m0 0 48 32M48 0 0 32" stroke="#AE1C28" strokeWidth="3"/><path d="M24 0v32M0 16h48" stroke="#fff" strokeWidth="10"/><path d="M24 0v32M0 16h48" stroke="#AE1C28" strokeWidth="5"/></svg>;
}
