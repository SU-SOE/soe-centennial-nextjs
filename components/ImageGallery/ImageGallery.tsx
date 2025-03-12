/**
 * ImageGallery component displays a gallery of images with a main image display and thumbnail navigation.
 *
 * @component
 *
 * @param {ImageGalleryProps} props - The props for the ImageGallery component.
 * @param {ImageItem[]} props.images - An array of image objects to be displayed in the gallery.
 *
 * @typedef {Object} ImageItem
 * @property {string} src - The source URL of the image.
 * @property {string} alt - The alt text for the image.
 * @property {string} caption - The caption text for the image.
 *
 * @typedef {Object} ImageGalleryProps
 * @property {ImageItem[]} images - An array of image objects to be displayed in the gallery.
 *
 * @returns {JSX.Element} The rendered ImageGallery component.
 *
 * @example
 * const exampleImages:
 * ImageItem[] = [
 *  {
 *    src: "/images/image1.jpg",
 *    alt: "Image 1",
 *    caption: "This is the first image caption",
 *  },
 *  {
 *    src: "/images/image2.jpg",
 *    alt: "Image 2",
 *    caption: "This is the second image caption",
 *  },
 *  {
 *    src: "/images/image3.jpg",
 *    alt: "Image 3",
 *    caption: "This is the third image caption",
 *  },
 *  {
 *    src: "",
 *    alt: "",
 *    caption: "",
 *  },
 * ];
 *
 * const ExampleComponent = () => (
 *   <ImageGallery images={exampleImages} />
 * );
 */

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
      <div className="flex flex-col w-full max-w-1300 mx-auto">
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
                className="object-contain shadow-lg bg-stone-dark"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="max-w-800 w-full order-last mt-18">
          <Text font="sans" className="text-black-70 text-21" mb="0">
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
