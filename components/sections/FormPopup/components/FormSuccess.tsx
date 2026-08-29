export function FormSuccess() {
  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <div className="bg-caribbean-current/10 flex h-12 w-12 items-center justify-center rounded-full">
        <svg
          className="text-caribbean-current h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="font-heading text-heading-sm text-smoky-black">
        Message Sent
      </h3>
      <p className="text-body-sm text-smoky-black/70">
        Thank you for reaching out. Our team will contact you shortly.
      </p>
    </div>
  );
}
