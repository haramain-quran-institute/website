"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  y?: number;
}

export function FadeInSection({
  children,
  delay = 0,
  y = 24,
}: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // matches your stat easing
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
