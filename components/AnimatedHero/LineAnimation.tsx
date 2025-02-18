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

const paths: { [key: string]: string } = {
 ;

interface LineAnimationProps {
  order: (number | string)[];
  onComplete?: () => void;
}

export const LineAnimation = ({ order, onComplete }: LineAnimationProps) => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(0);
  const ref = useRef<SVGSVGElement | null>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  // Map order array to corresponding paths
  const orderedPaths = order.map((key) => paths[key]);
  const isMask = order[pathIndex] === "mask";
  const is100 = order[pathIndex] === 100;

  // Create interpolated path transformation
  const path = useTransform(
    progress,
    order.map((_, i) => i),
    orderedPaths,
    {
      mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 }),
    },
  );

  useEffect(() => {
    if (isInView && pathIndex < order.length - 1) {
      animate(progress, pathIndex + 1, {
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
    }
  }, [pathIndex, progress, isInView, order.length, onComplete]);

  return (
    <motion.svg
      ref={ref}
      width="700px"
      height="600px"
      viewBox="-70 0 600 700"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      preserveAspectRatio="none"
      className="flex items-center justify-center"
    >
      {isMask && (
        <>
          <mask id="image-mask">
            <rect width="100%" height="100%" fill="black" />
            <motion.path d={path} fill="white" />
          </mask>
          <image
            xlinkHref="https://res.cloudinary.com/dsqi5touf/image/upload/v1739481950/Ryan-High-Voltage-Laboratory_rinsml.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#image-mask)"
          />
        </>
      )}
      <motion.path
        d={path}
        stroke="#F83535"
        strokeWidth={is100 ? "0" : "16"}
        fill="transparent"
      />
    </motion.svg>
  );
};
