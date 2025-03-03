"use client";

import { useRef } from "react";
import { useInView, motion, useReducedMotion } from "motion/react";
import { AnimationMap, type AnimationType } from "./AnimationMap";

export type AnimateInViewProps = {
  animation?: AnimationType;
  once?: boolean;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
  className?: string;
};

export const AnimateInView = ({
  animation = "zoomIn",
  once = true,
  duration = 0.6,
  delay,
  children,
  className,
  ...props
}: AnimateInViewProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref as React.RefObject<Element>, { once });

  // Don't animate if the user has "reduced motion" enabled
  if (animation === "none") {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={AnimationMap[animation]}
      transition={{
        delay: prefersReducedMotion ? 0 : delay,
        duration: prefersReducedMotion ? 0 : duration,
        ease: "easeOut",
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
