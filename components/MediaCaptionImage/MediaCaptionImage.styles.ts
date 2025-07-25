import { cnb } from "cnbuilder";

// 2XL and up >= 1500px
export const imageCropsDesktop = {
  "1x1": "1400x1400", // We rarely have square or portrait images edge to edge so they can be smaller than the viewport size
  "1x2": "1000x2000",
  "2x1": "2000x1000",
  "2x3": "1200x1800",
  "3x2": "2100x1400",
  "3x4": "1500x2000",
  "4x3": "2000x1500",
  "5x8": "1000x1600",
  "8x5": "2000x1250",
  "9x16": "900x1600",
  "16x9": "2000x1125",
  free: "2000x0",
};
export type ImageCropType = keyof typeof imageCropsDesktop;

// LG-XL - 992px - 1499px
export const imageCropsSmallDesktop = {
  "1x1": "1000x1000",
  "1x2": "1000x2000",
  "2x1": "1500x750",
  "2x3": "1200x1800",
  "3x2": "1500x1000",
  "3x4": "1200x1600",
  "4x3": "1600x1200",
  "5x8": "1000x1600",
  "8x5": "1600x1000",
  "9x16": "900x1600",
  "16x9": "1600x900",
  free: "1500x0",
};

// SM-MD - 576px - 991px
export const imageCropsTablet = {
  "1x1": "1000x1000",
  "1x2": "1000x2000",
  "2x1": "1000x500",
  "2x3": "1000x1500",
  "3x2": "1000x667",
  "3x4": "1000x1333",
  "4x3": "1000x750",
  "5x8": "1000x1600",
  "8x5": "1000x625",
  "9x16": "900x1600",
  "16x9": "1000x563",
  free: "1000x0",
};

// XS - up to 575px
export const imageCropsMobile = {
  "1x1": "600x600",
  "1x2": "600x1200",
  "2x1": "600x300",
  "2x3": "600x900",
  "3x2": "600x400",
  "3x4": "600x800",
  "4x3": "600x450",
  "5x8": "600x960",
  "8x5": "640x400",
  "9x16": "630x1120",
  "16x9": "640x360",
  free: "600x0",
};

export const captionTextColors = {
  black: "text-black",
  "black-60": "text-black-true/60",
  "stone-dark": "text-stone-dark",
  "fog-light": "text-fog-light",
  white: "text-white",
};
export type CaptionTextColorType = keyof typeof captionTextColors;

export const root = (isFullHeight?: boolean) =>
  cnb(isFullHeight ? "h-full" : "");

export const figure = (isPortrait: boolean) =>
  cnb("flex flex-col", {
    "gap-20 sm:flex-row lg:flex-col": isPortrait,
  });

export const imageWrapper = (isPortrait: boolean, rounded: boolean) =>
  cnb("relative overflow-hidden", {
    "w-100 md:w-180 lg:w-full h-100 md:h-180 lg:h-full shrink-0": isPortrait,
    "size-full": !isPortrait,
    "rounded-2xl": rounded,
  });

export const image = (isParallax: boolean) =>
  cnb(
    "relative w-full object-cover object-center",
    isParallax ? "h-[calc(100%_+_12rem)] -mt-30" : "h-full",
  );

export const captionWrapper = "mt-0";

export const caption = "*:*:leading-display first:*:*:mt-0 pt-06em";
