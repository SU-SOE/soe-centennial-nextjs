"use client";

import React from "react";
import { GalleryImage } from "./Gallery.types";
import { ImageSlide } from "./ImageSlide";

export const GalleryItem = ({
  item,
  index,
}: {
  item: GalleryImage;
  index: number;
}) => {
  return (
    <div key={index} className="relative overflow-clip w-full bg-fog-light">
      {/* Content section */}
      <div
        className="relative rs-pl-6 rs-pr-4 bg-cen-blue-xlight flex flex-col justify-center rs-pt-5 rs-pb-5"
        data-content-section
      >
        {item.children}
      </div>

      {/* Image section - mobile only, desktop uses sticky container */}
      <div className="w-full xl:hidden">
        <ImageSlide
          src={item.src}
          alt={item.alt}
          caption={item.caption}
          className="w-full h-fit"
        />
      </div>
    </div>
  );
};
