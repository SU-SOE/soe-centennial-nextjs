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
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";

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

  const prevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <aside className="cc" aria-label="Image Gallery">
      <div className="flex flex-col w-full max-w-1300 mx-auto">
        {/* Main Image Display */}
        <div
          className="relative aspect-[13/8] h-full w-full max-w-1300 mb-4"
          role="region"
          aria-live="assertive"
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
              aria-hidden={
                selectedIndex !==
                images.findIndex((img) => img.src === images[selectedIndex].src)
              }
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain shadow-lg bg-stone-dark"
              />
              <p>{images[selectedIndex].alt}</p>
            </motion.div>
          </AnimatePresence>

          <ul className="list-none*:m-0">
            <li>
              <button
                className="rs-ml-0 absolute left-2 top-1/2 transform -translate-y-1/2 transition p-6 rounded-full bg-stone-dark text-white border-white border-2 hocus:border-digital-red-xlight hocus:text-digital-red-xlight"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ArrowLeftIcon width={24} />
              </button>
            </li>
            <li>
              <button
                className="rs-mr-0 absolute right-2 top-1/2 transform -translate-y-1/2 transition p-6 rounded-full bg-stone-dark text-white border-white border-2 hocus:border-digital-red-xlight hocus:text-digital-red-xlight"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ArrowRightIcon width={24} />
              </button>
            </li>
          </ul>
        </div>

        <div
          id={`image-caption-${selectedIndex}`}
          className="max-w-800 w-full order-last mt-18"
        >
          <Text font="sans" className="text-black-70 text-21" mb="0">
            {images[selectedIndex].caption}
          </Text>
        </div>

        {/* Thumbnail Navigation */}
        <ul
          className="flex flex-wrap gap-10 mt-18 list-none"
          aria-label="Thumbnail navigation"
        >
          {images.map((image, index) => (
            <li key={index} className="m-0 p-0">
              <button
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
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ImageGallery;
