"use client";

import { motion, animate, useMotionValue, useTransform } from "motion/react";
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
  const progress = useMotionValue(pathIndex);
  const ref = useRef<SVGPathElement | null>(null);

  const arrayOfIndex = order.map((_, i) => i);
  const path = useTransform(progress, arrayOfIndex, order, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.5 }),
  });

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.2,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === order.length - 1) {
          progress.set(0);
          setPathIndex(1);
          onComplete?.();
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });
    return () => {
      animation.stop();
    };
  }, [pathIndex, order, onComplete, progress]);

  return (
    <motion.path
      ref={ref}
      d={path}
      fill="#F83535"
      // stroke="#F83535"
      // strokeWidth="16"
      // fill="transparent"
      // strokeLinecap="round"
    />
  );
};
