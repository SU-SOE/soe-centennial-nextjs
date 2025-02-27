"use client";

import { MotionConfig, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export const ReduceMotionWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const prefersReduceMotion = useReducedMotion();

  const [reducedMotion, setReducedMotion] = useState<"always" | "never">(
    "never",
  );

  useEffect(() => {
    setReducedMotion(prefersReduceMotion ? "always" : "never");
  }, [prefersReduceMotion]);

  return <MotionConfig reducedMotion={reducedMotion}>{children}</MotionConfig>;
};
