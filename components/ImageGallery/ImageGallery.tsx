"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Text } from "../Typography";

type ImageItem = {
  src: string;
  alt: string;
  caption: string;
};

type ImageGalleryProps = {
  images: ImageItem[];
};

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="cc">
      <div className="flex flex-col w-1300 mx-auto">
        {/* Main Image Display */}
        <div
          className="relative aspect-[13/8] h-full w-full max-w-1300 mb-4"
          role="region"
          aria-live="polite"
          aria-label="Image gallery"
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={images[selectedIndex].src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                className="object-cover shadow-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="max-w-800 w-full order-last mt-18">
          <Text font="sans" className="text-black-70 text-21">
            {images[selectedIndex].caption}
          </Text>
        </div>

        {/* Thumbnail Navigation */}
        <div
          className="flex flex-wrap gap-10 overflow-x-auto mt-18"
          role="group"
          aria-label="Thumbnail navigation"
        >
          {images.map((image, index) => (
            <button
              key={index}
              aria-label={`View image ${index + 1}`}
              className={`relative aspect-[9/6] h-full w-100 overflow-hidden border-4 transition-all ${
                index === selectedIndex
                  ? "border-digital-red"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={image.src}
                alt={`Preview of ${image.alt}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
