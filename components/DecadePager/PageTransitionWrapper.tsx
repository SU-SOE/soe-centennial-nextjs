"use client";

import { HTMLAttributes } from "react";
import { motion, useReducedMotion } from "motion/react";

type PageTransitionWrapper = HTMLAttributes<HTMLDivElement>;

export const PageTransitionWrapper = ({ children }: PageTransitionWrapper) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
