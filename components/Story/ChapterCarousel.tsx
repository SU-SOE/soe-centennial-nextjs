"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

interface ChapterCarouselProps {
  images: string[];
}

const ChapterCarousel: React.FC<ChapterCarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [isAutoplaying, setIsAutoplaying] = useState(true);

  // Detect prefers-reduced-motion
  const prefersReducedMotion = useReducedMotion();

  // Autoplay logic
  useEffect(() => {
    if (!isAutoplaying) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoplaying, images.length]);

  // Keyboard Navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setIndex((prev) => (prev + 1) % images.length);
    } else if (e.key === "ArrowLeft") {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div
      className="relative w-full max-w-500 overflow-hidden mx-auto"
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Screen reader live region */}
      <div className="sr-only" aria-live="polite">
        Showing slide {index + 1} of {images.length}
      </div>

      {/* Animated Image Transition */}
      <div className="overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="aspect-[4/3] w-full h-auto max-w-500 cursor-pointer rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 1,
              ease: "easeInOut",
            }}
            onClick={() => setIsAutoplaying(!isAutoplaying)}
          />
        </AnimatePresence>
      </div>

      {/* Play/Pause Button + Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-5 pt-10">
        <button
          className="bg-black-70 p-2 text-white rounded-full hocus:bg-black"
          onClick={() => setIsAutoplaying(!isAutoplaying)}
          aria-label={isAutoplaying ? "Pause autoplay" : "Play autoplay"}
        >
          {isAutoplaying ? <PauseIcon width={20} /> : <PlayIcon width={20} />}
        </button>
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-25 h-25 rounded-full ${i === index ? "bg-black" : "bg-black-70"}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === "Enter" || e.key === " " ? setIndex(i) : null
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ChapterCarousel;
