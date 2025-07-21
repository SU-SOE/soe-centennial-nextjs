"use client";

import React, { useRef, useEffect, useState } from "react";
import { useReducedMotion, useScroll } from "motion/react";
import { VerticalScrollGalleryProps } from "./Gallery.types";
import { GalleryImage } from "./GalleryImage";
import { GalleryItem } from "./GalleryItem";
import { ImageSlide } from "./ImageSlide";

export const VerticalScrollGallery = ({
  galleryImages,
}: VerticalScrollGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [contentLengths, setContentLengths] = useState<number[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Measure content lengths after component mounts
  useEffect(() => {
    if (containerRef.current) {
      const contentDivs = containerRef.current.querySelectorAll(
        "[data-content-section]",
      );
      const lengths = Array.from(contentDivs).map((div) => {
        const element = div as HTMLElement;
        // Use scroll height to account for all content including overflow
        return element.scrollHeight;
      });
      setContentLengths(lengths);
    }
  }, [galleryImages]);

  // Reduced motion fallback
  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className="w-full">
        {galleryImages.map((item, key) => (
          <div
            key={key}
            className="relative overflow-clip w-full flex flex-col xl:flex-row bg-fog-light"
          >
            <div className="relative rs-pl-6 rs-pr-4 bg-cen-blue-xlight xl:w-1/3 flex flex-col justify-center rs-pt-5 rs-pb-5">
              {item.children}
            </div>
            <ImageSlide
              src={item.src}
              alt={item.alt}
              caption={item.caption}
              className="w-full xl:w-2/3 xl:sticky xl:top-0 xl:h-screen"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-fog-light flex xl:flex-row"
      style={{ minHeight: "100vh" }}
    >
      {/* Content sections */}
      <div className="w-full xl:w-1/3">
        {galleryImages.map((item, key) => (
          <GalleryItem key={`content-${key}`} item={item} index={key} />
        ))}
      </div>

      {/* Sticky image container for desktop cross-fade animation */}
      <div className="sticky top-0 w-full xl:w-2/3 h-screen pointer-events-none hidden xl:block z-0">
        {contentLengths.length > 0 &&
          galleryImages.map((item, key) => (
            <GalleryImage
              key={`image-${key}`}
              item={item}
              index={key}
              contentLengths={contentLengths}
              scrollYProgress={scrollYProgress}
            />
          ))}
      </div>
    </div>
  );
};
