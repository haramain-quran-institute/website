"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useContext, useEffect, useRef, useState } from "react";
import { FormPopupContext } from "@/context/FormPopupContext";

import BackgroundImage from "@/assets/FAQ.jpg";

export default function FooterCTA() {
  const { openFormPopup } = useContext(FormPopupContext);

  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - rect.top) /
            (windowHeight + rect.height),
        ),
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = 1.02 - scrollProgress * 0.12;

  return (
    <section
      id="inquiries"
      className="w-full bg-[#FBF6EF] py-16 sm:py-20 min-[1024px]:py-24"
    >
      <div
        ref={containerRef}
        className="relative z-0 flex w-full justify-center overflow-hidden"
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.3s ease-out",
          }}
          className="relative grid min-h-[420px] w-full place-content-stretch place-items-stretch overflow-hidden rounded-md"
        >
          {/* BACKGROUND IMAGE */}
          <Image
            src={BackgroundImage}
            alt="Haramain Quran Institute"
            priority
            fetchPriority="high"
            loading="eager"
            fill
            className="object-cover"
            sizes="100vw"
            quality={95}
          />

{/* SOFT WARM BASE */}
<div
  className="absolute inset-0 bg-[#FBF6EF]/45"
  aria-hidden="true"
/>

{/* GREEN ATMOSPHERIC GLOW */}
<div
  className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,225,215,0.55)_0%,rgba(13,70,62,0.10)_42%,rgba(13,70,62,0.38)_100%)]"
  aria-hidden="true"
/>

{/* CINEMATIC EDGE VIGNETTE */}
<div
  className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(4,31,27,0.18)_68%,rgba(4,31,27,0.48)_100%)]"
  aria-hidden="true"
/>

          {/* CONTENT */}
          <div className="relative z-10 flex w-full flex-col items-center justify-center gap-9 px-6 py-14 text-center sm:px-8 sm:py-24 min-[1024px]:py-32">
            <div className="flex flex-col gap-3">
              <h2 className="font-heading text-[40px] font-semibold leading-[1.02] tracking-tight text-[#0D463E] text-pretty sm:text-[48px]">
  Begin Your{" "}
  <span className="font-['Libre_Baskerville'] font-medium italic">
    Sacred
  </span>{" "}
  Journey
</h2>

<p className="mx-auto max-w-3xl font-body text-[16px] font-normal leading-7 tracking-tight text-[#0D463E]/75">
  Start your{" "}
  <strong className="font-semibold text-[#0D463E]">
    Quran learning journey
  </strong>{" "}
  with qualified teachers and flexible classes designed around you.
</p>
            </div>

            <Button
  type="button"
  variant="primaryReverse"
  onClick={openFormPopup}
  className="mt-10 hover:bg-transparent"
>
  Book Free Trial
</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
