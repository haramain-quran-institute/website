"use client";

const youtubeTestimonials = ["R3JpYbTgJjg", "XEn66FxVgH8", "L67IjYgMK5I"];

export default function VideoTestimonialDialog({
  open,
  onOpenChange,
  videoId,
  currentIndex,
  onPrevious,
  onNext,
  onSelect,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoId: string;
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 p-4 backdrop-blur-2xl"
      onClick={() => onOpenChange(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Student testimonial video"
    >
      <button
        type="button"
        onClick={() => onOpenChange(false)}
        className="absolute top-5 right-5 z-[10000] flex h-10 items-center justify-center gap-2 rounded-full bg-[#FBF6EF] px-4 text-[#0D463E] shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
        aria-label="Close video"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 4L12 12M12 4L4 12" stroke="#0D463E" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <span>Close</span>
      </button>

      <div className="relative aspect-[9/16] w-full max-w-[320px]" onClick={(event) => event.stopPropagation()}>
        <div className="relative z-10 size-full overflow-hidden rounded-[0.8rem] bg-black shadow-2xl">
          <iframe
            key={videoId}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="Student Testimonial"
            className="absolute inset-0 size-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <button type="button" onClick={onPrevious} className="absolute top-1/2 left-[-22px] z-[10001] flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#FBF6EF] text-[#0D463E] shadow-[0_8px_25px_rgba(0,0,0,0.16)]" aria-label="Previous testimonial">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M12.5 4.5L7 10L12.5 15.5" stroke="#0D463E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" onClick={onNext} className="absolute top-1/2 right-[-22px] z-[10001] flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#FBF6EF] text-[#0D463E] shadow-[0_8px_25px_rgba(0,0,0,0.16)]" aria-label="Next testimonial">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M7.5 4.5L13 10L7.5 15.5" stroke="#0D463E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <div className="absolute -bottom-9 left-1/2 z-[10001] flex -translate-x-1/2 items-center gap-2">
          {youtubeTestimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`block rounded-full ${currentIndex === index ? "h-1.5 w-9 bg-[#0D463E]" : "size-1.5 bg-[#CFCFCF]"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
