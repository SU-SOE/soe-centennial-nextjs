"use client";

import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useInView,
} from "motion/react";
import React, { useState, useEffect, useRef } from "react";
import { interpolate } from "flubber";

interface LinePathAnimationProps {
  order: string[];
  onComplete?: () => void;
}

export const LinePathAnimation = ({
  order,
  onComplete,
}: LinePathAnimationProps) => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(0);
  const ref = useRef<SVGPathElement | null>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  // Create interpolated path transformation
  const path = useTransform(
    progress,
    order.map((_, i) => i),
    order,
    {
      mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 }),
    },
  );

  useEffect(() => {
    if (isInView && pathIndex < order.length - 1) {
      const animation = animate(progress, pathIndex + 1, {
        duration: 0.5,
        delay: 0.4,
        ease: "easeInOut",
        onComplete: () => {
          setPathIndex((prev) => prev + 1);
          if (pathIndex + 1 === order.length - 1) {
            onComplete?.();
          }
        },
      });
      return () => {
        animation.stop();
      };
    }
  }, [pathIndex, progress, isInView, order.length, onComplete]);

  return (
    <motion.path
      ref={ref}
      d={path}
      stroke="#F83535"
      strokeWidth="16"
      fill="transparent"
      strokeLinecap="round"
      animate={isInView ? "visible" : "hidden"}
    />
  );
};
