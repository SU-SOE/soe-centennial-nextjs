"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface TeaserCarouselProps {
  images: string[];
}

const TeaserCarousel = ({ images }: TeaserCarouselProps) => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAutoplaying, setIsAutoplaying] = useState(true);

  // Detect prefers-reduced-motion
  const prefersReducedMotion = useReducedMotion();

  // Autoplay logic
  useEffect(() => {
    if (!isAutoplaying) return;
    const interval = setInterval(() => {
      setIndex((prev) => {
        setPrevIndex(prev);
        return (prev + 1) % images.length;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoplaying, images.length, index]);

  // Keyboard Navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % images.length);
    } else if (e.key === "ArrowLeft") {
      setPrevIndex(index);
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div
      className="relative w-full max-w-600 mx-auto perspective-1000 "
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
      <div className="mx-auto cursor-pointer aspect-[1/1] relative h-full shadow-xl transform ease-in-out rotate-y-[15deg] flex items-center justify-center w-300 md:w-400 xl:w-600">
        <AnimatePresence mode="sync">
          <motion.div
            key={`previous-${prevIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              ease: "easeInOut",
            }}
            onClick={() => setIsAutoplaying(!isAutoplaying)}
          >
            <Image
              src={images[prevIndex]}
              alt={`Previous slide ${prevIndex + 1}`}
              fill
              className="z-0 object-cover rounded-[20px]"
            />
          </motion.div>
          <motion.div
            key={`current-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 1,
              ease: "easeInOut",
            }}
            onClick={() => setIsAutoplaying(!isAutoplaying)}
          >
            <Image
              src={images[index]}
              alt={`Slide ${index + 1}`}
              fill
              className="z-10 object-cover rounded-[20px]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Play/Pause Button + Dots Navigation */}
      <div className="flex justify-center items-center rs-mt-3 space-x-20">
        <button
          className="border-2 border-stone-dark p-2 text-dark rounded-full transition hocus:text-digital-red-xlight hocus:border-digital-red-xlight"
          onClick={() => setIsAutoplaying(!isAutoplaying)}
          aria-label={isAutoplaying ? "Pause autoplay" : "Play autoplay"}
        >
          {isAutoplaying ? <PauseIcon width={20} /> : <PlayIcon width={20} />}
        </button>
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-20 h-20 rounded-full ${i === index ? "bg-digital-red-xlight" : "bg-stone-dark"}`}
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

export default TeaserCarousel;
