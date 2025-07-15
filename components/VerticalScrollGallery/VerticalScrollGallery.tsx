"use client";

import React, { HTMLAttributes, useRef, useEffect, useState } from "react";
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
  children: React.ReactNode;
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
      className={cnb("rs-px-5 h-fit xl:h-screen relative", className)}
      bgColor="fog-light"
      width="full"
      pt={5}
      pb={6}
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
      <Container width="full" className="relative z-50 xl:h-screen">
        <MediaCaptionImage
          rounded
          src={src}
          alt={alt}
          caption={caption}
          aspectRatio="4x3"
          className="max-w-1300 mx-auto"
        />
      </Container>
    </Container>
  );
};

const GalleryImage = ({
  item,
  index,
  contentLengths,
  scrollYProgress,
}: {
  item: GalleryImage;
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
            <div className="relative rs-pl-6 rs-pr-4 bg-cen-blue-xlight xl:w-1/3 flex flex-col justify-center items-center">
              {item.children}
            </div>
            <ImageSlide
              src={item.src}
              alt={item.alt}
              caption={item.caption}
              className="w-full order-first xl:order-last xl:w-2/3 xl:sticky xl:top-0 xl:h-screen"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col xl:flex-row bg-fog-light"
      style={{ minHeight: "100vh" }}
    >
      <div className="flex flex-col w-full xl:w-1/3">
        {galleryImages.map((item, key) => (
          <React.Fragment key={key}>
            <div
              className="relative rs-pl-6 rs-pr-4 bg-cen-blue-xlight flex flex-col rs-pt-5 rs-pb-5"
              data-content-section
            >
              {item.children}
            </div>
            <ImageSlide
              src={item.src}
              alt={item.alt}
              caption={item.caption}
              className="block w-full h-fit xl:hidden"
            />
          </React.Fragment>
        ))}
      </div>

      <div className="sticky top-0 right-0 w-full h-screen pointer-events-none hidden xl:block">
        {contentLengths.length > 0 &&
          galleryImages.map((item, key) => (
            <GalleryImage
              key={key}
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
