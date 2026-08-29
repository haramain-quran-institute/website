"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  target: string;
}

export function Countdown({ target }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date(target).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="flex w-fit flex-wrap items-center justify-center gap-12 sm:gap-24 md:gap-32">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className="border-caribbean-current flex flex-col items-center gap-4 border-b p-4"
        >
          <span className="text-caribbean-current font-heading text-heading-sm md:text-heading-lg leading-none tracking-wider">
            {value}
          </span>
          <span className="text-smoky-black/70 text-xs tracking-wide uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
