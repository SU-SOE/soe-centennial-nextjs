"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "motion/react";
import { GalleryImage as GalleryImageType } from "./Gallery.types";
import { ImageSlide } from "./ImageSlide";

export const GalleryImage = ({
  item,
  index,
  contentLengths,
  scrollYProgress,
}: {
  item: GalleryImageType;
  index: number;
  contentLengths: number[];
  scrollYProgress: MotionValue<number>;
}) => {
  // Calculate cumulative content positions based on content lengths
  const totalContentLength = contentLengths.reduce(
    (sum, length) => sum + length,
    0,
  );
  const cumulativeLength = contentLengths
    .slice(0, index)
    .reduce((sum, length) => sum + length, 0);
  const currentContentLength = contentLengths[index];

  // Convert content positions to scroll progress ratios
  const startRatio = cumulativeLength / totalContentLength;
  const endRatio =
    (cumulativeLength + currentContentLength) / totalContentLength;

  // Add smooth transition areas
  const transitionZone = Math.min(
    (currentContentLength * 0.2) / totalContentLength,
    0.1,
  );

  const middleOpacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, startRatio - transitionZone),
      startRatio,
      endRatio,
      Math.min(1, endRatio + transitionZone),
    ],
    [0, 1, 1, 0],
  );

  const firstOpacity = useTransform(
    scrollYProgress,
    [0, endRatio, Math.min(1, endRatio + transitionZone)],
    [1, 1, 0],
  );

  const lastOpacity = useTransform(
    scrollYProgress,
    [Math.max(0, startRatio - transitionZone), startRatio, 1],
    [0, 1, 1],
  );

  // Determine opacity based on item index
  let finalOpacity;
  if (index === 0) {
    finalOpacity = firstOpacity;
  } else if (index === contentLengths.length - 1) {
    finalOpacity = lastOpacity;
  } else {
    finalOpacity = middleOpacity;
  }

  return (
    <motion.div
      style={{
        opacity: finalOpacity,
        zIndex: 10 + index,
      }}
      className="absolute inset-0"
    >
      <ImageSlide
        src={item.src}
        alt=""
        caption={item.caption}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};
