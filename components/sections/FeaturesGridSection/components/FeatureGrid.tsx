"use client";

import { useEffect, useRef } from "react";
import FeatureCard from "./FeatureCard";
import type { FeatureItem } from "../types";

interface FeatureGridProps {
  features: FeatureItem[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  const middleRef = useRef<HTMLDivElement>(null);

  const targetY = useRef(0);
  const currentY = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateTarget = () => {
      const element = middleRef.current;

      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const rawProgress =
        (viewportHeight - rect.top) /
        (viewportHeight + rect.height);

      const progress = Math.max(0, Math.min(1, rawProgress));

      targetY.current = progress * 100;
    };

    const animate = () => {
      currentY.current +=
        (targetY.current - currentY.current) * 0.08;

      if (middleRef.current) {
        middleRef.current.style.transform =
          `translate3d(0, ${currentY.current}px, 0)`;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    updateTarget();

    window.addEventListener("scroll", updateTarget, {
      passive: true,
    });

    window.addEventListener("resize", updateTarget);

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-20 grid w-full grid-cols-1 gap-14 sm:mt-24 md:grid-cols-3 md:gap-10 lg:mt-28 lg:gap-16">
      {features.slice(0, 3).map((feature, index) => {
        const isMiddle = index === 1;

        return (
          <div
            key={index}
            ref={isMiddle ? middleRef : undefined}
            className="will-change-transform"
          >
            <FeatureCard
              {...feature}
              isFirst={index === 0}
            />
          </div>
        );
      })}
    </div>
  );
}