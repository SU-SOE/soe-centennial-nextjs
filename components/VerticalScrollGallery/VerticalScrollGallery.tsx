"use client";

import React, { HTMLAttributes, useRef } from "react";
import Image from "next/image";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import MediaCaptionImage from "../MediaCaptionImage/MediaCaptionImage";
import { Container } from "../Container";
import { cnb } from "cnbuilder";

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  children?: React.ReactNode;
};

type VerticalScrollGalleryProps = {
  galleryImages: GalleryImage[];
};

type ImageSlideProps = HTMLAttributes<HTMLDivElement> &
  Omit<GalleryImage, "children">;

export const ImageSlide = ({
  className,
  caption,
  src,
  alt,
  ...props
}: ImageSlideProps) => {
  return (
    <Container
      {...props}
      className={cnb("rs-px-5 h-screen relative", className)}
      bgColor="fog-light"
      width="full"
      pt={7}
      pb={7}
    >
      <div className="size-full absolute top-0 left-0 z-0">
        <Image
          className="ed11y-ignore object-cover z-0"
          src={src}
          alt={alt || ""}
          loading={"lazy"}
          fill
          sizes="100vw"
        />
        <div className="absolute size-full bg-opacity-80 z-10 backdrop-blur-sm bg-fog-light" />
      </div>
      <Container width="full" className="relative z-50 h-screen">
        <MediaCaptionImage
          rounded
          src={src}
          alt={alt}
          caption={caption}
          aspectRatio="4x3"
        />
      </Container>
    </Container>
  );
};

const GalleryImage = ({
  item,
  index,
  totalItems,
  scrollYProgress,
}: {
  item: GalleryImage;
  index: number;
  totalItems: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const firstImageOpacity = useTransform(
    scrollYProgress,
    [0, 0.8 / totalItems, 1 / totalItems],
    [1, 1, 0],
  );

  const lastImageOpacity = useTransform(
    scrollYProgress,
    [(index - 0.2) / totalItems, index / totalItems, 1],
    [0, 1, 1],
  );

  const middleImageOpacity = useTransform(
    scrollYProgress,
    [
      (index - 0.2) / totalItems,
      index / totalItems,
      (index + 0.8) / totalItems,
      (index + 1) / totalItems,
    ],
    [0, 1, 1, 0],
  );

  // Choose which opacity to use based on index
  // First image should not fade in
  // Last image should not fade out
  let opacity;
  if (index === 0) {
    opacity = firstImageOpacity;
  } else if (index === totalItems - 1) {
    opacity = lastImageOpacity;
  } else {
    opacity = middleImageOpacity;
  }

  return (
    <motion.div
      style={{
        opacity,
        zIndex: 10 + index,
      }}
      className="absolute inset-0"
    >
      <ImageSlide
        src={item.src}
        alt={item.alt}
        caption={item.caption}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export const VerticalScrollGallery = ({
  galleryImages,
}: VerticalScrollGalleryProps) => {
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
        {galleryImages.map((item, key) => (
          <div
            key={key}
            className="relative overflow-clip w-full flex flex-col lg:flex-row bg-fog-light"
          >
            <div className="relative rs-pl-6 rs-pr-4 bg-cen-blue-xlight lg:w-1/3 flex flex-col justify-center items-center">
              {item.children}
            </div>
            <ImageSlide
              src={item.src}
              alt={item.alt}
              caption={item.caption}
              className="w-full lg:w-2/3 lg:sticky lg:top-0 lg:h-screen"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full relative">
      {galleryImages.map((item, key) => (
        <div
          key={key}
          className="relative w-full flex flex-row bg-fog-light min-h-screen"
        >
          <div className="relative rs-pl-6 rs-pr-4 bg-cen-blue-xlight lg:w-1/3 flex flex-col justify-center items-center">
            {item.children}
          </div>

          <div className="fixed top-0 right-0 lg:w-2/3 h-screen pointer-events-none">
            {galleryImages.map((item, key) => (
              <GalleryImage
                key={key}
                item={item}
                index={key}
                totalItems={galleryImages.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
