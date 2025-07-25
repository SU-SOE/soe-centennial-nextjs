"use client";

import React, { useRef } from "react";
import {
  useReducedMotion,
  useScroll,
  motion,
  MotionValue,
  useTransform,
} from "motion/react";
import { ImageSlide } from "./ImageSlide";
import { VerticalImageGalleryProps, SimpleImage } from "./Gallery.types";

export const SimpleGalleryImage = ({
  image,
  index,
  totalImages,
  scrollYProgress,
}: {
  image: SimpleImage;
  index: number;
  totalImages: number;
  scrollYProgress: MotionValue<number>;
}) => {
  // Simple equal division of scroll progress
  const sectionSize = 1 / totalImages;
  const startRatio = index * sectionSize;
  const endRatio = (index + 1) * sectionSize;

  // Add smooth transition areas
  const transitionZone = sectionSize * 0.2;

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

  // Determine opacity based on image index
  let finalOpacity;
  if (index === 0) {
    finalOpacity = firstOpacity;
  } else if (index === totalImages - 1) {
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
      aria-hidden="true"
    >
      <ImageSlide
        src={image.src}
        alt=""
        caption={image.caption}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export const VerticalImageGallery = ({ images }: VerticalImageGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Reduced motion fallback
  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className="w-full">
        {images.map((image, key) => (
          <ImageSlide
            key={key}
            src={image.src}
            alt={image.alt}
            caption={image.caption}
            className="w-full h-screen"
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div
        ref={containerRef}
        style={{ minHeight: `${images.length * 100}vh` }}
        className="hidden xl:block relative w-full bg-fog-light"
      >
        {/* Sticky image container for cross-fade animation */}
        <div className="block sticky top-0 w-full h-screen pointer-events-none z-0">
          {images.map((image, key) => (
            <SimpleGalleryImage
              key={`image-${key}`}
              image={image}
              index={key}
              totalImages={images.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Semantic images for screen readers */}
        {/* {images.map((image, key) => (
        <div key={`semantic-${key}`} className="sr-only">
          <ImageSlide
            src={image.src}
            alt={image.alt}
            caption={image.caption}
            className="w-full h-screen"
          />
        </div>
      ))} */}
      </div>

      {/* Image section - mobile only, desktop uses sticky container */}
      {images.map((image, key) => (
        <div key={key} className="w-full xl:hidden">
          <ImageSlide
            src={image.src}
            alt={image.alt}
            caption={image.caption}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};
