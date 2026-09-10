interface HaramainAIIconProps {
  className?: string;
}

export default function HaramainAIIcon({ className }: HaramainAIIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 36C15 18 25 12 35 20L49 34C54 39 58 37 61 31"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <path
        d="M56 28C49 46 39 52 29 44L15 30C10 25 6 27 3 33"
        opacity="0.84"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <path
        d="M27 25.5L38.5 37"
        opacity="0.45"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.25"
      />
    </svg>
  );
}
