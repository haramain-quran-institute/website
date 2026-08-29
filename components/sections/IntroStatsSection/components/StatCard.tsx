"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  children: React.ReactNode;
}

export default function StatCard({ title, value, children }: StatCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const numericValue =
    typeof value === "number"
      ? value
      : parseInt(String(value).replace(/[^0-9]/g, ""), 10);

  const suffix =
    typeof value === "string" && String(value).includes("+") ? "+" : "";

  const count = useMotionValue(0);

  const rounded = useTransform(
    count,
    (latest) => Math.floor(latest).toLocaleString() + suffix,
  );

  useEffect(() => {
    if (!isInView) return;

    animate(count, numericValue, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    });
  }, [isInView, count, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex w-full flex-col items-start justify-start gap-5 rounded-[4px] border border-[#E3E0D9] bg-white p-6 transition-shadow duration-200 hover:shadow-lg min-[1024px]:p-8"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        className="flex h-16 w-fit items-start justify-start p-2"
      >
        {children}
      </motion.div>

      <div className="flex flex-col items-start justify-start gap-3">
        <motion.h3 className="font-heading text-4xl font-medium leading-tight tracking-tight text-[#0D463E]">
          {rounded}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-body text-[15px] font-normal leading-relaxed tracking-tight text-[#0D463E]/70"
        >
          {title}
        </motion.p>
      </div>
    </motion.div>
  );
}
