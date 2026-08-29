import type { SVGProps } from "react";

export default function FlagUSA(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 48 32" aria-label="United States" {...props}><rect width="48" height="32" rx="3" fill="#fff"/><path d="M0 0h48v3H0zm0 6h48v3H0zm0 6h48v3H0zm0 6h48v3H0zm0 6h48v3H0zm0 6h48v2H0z" fill="#B22234"/><path d="M0 0h21v17H0z" fill="#3C3B6E"/><g fill="#fff"><circle cx="4" cy="4" r="1"/><circle cx="10" cy="4" r="1"/><circle cx="16" cy="4" r="1"/><circle cx="7" cy="9" r="1"/><circle cx="13" cy="9" r="1"/><circle cx="4" cy="14" r="1"/><circle cx="10" cy="14" r="1"/><circle cx="16" cy="14" r="1"/></g></svg>;
}
