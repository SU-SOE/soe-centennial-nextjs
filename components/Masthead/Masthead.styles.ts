import { cnb } from "cnbuilder";
// placeholder
export const root = (isOverlap: boolean) => {
  return cnb("group w-full transition-colors", {
    "absolute top-0 right-0 z-50": isOverlap,
    relative: !isOverlap,
  });
};

// Use a wider centered container (1800px wide at 4XL (2000px) breakpoint)
export const wrapper =
  "relative cc 3xl:px-100 4xl:px-[calc((100%-1800px)/2)] rs-pt-2 rs-pb-1 transition relative min-h-[14rem]";

export const logo =
  "relative lg:absolute lg:rs-pt-2 md:rs-pb-1 top-0 w-fit max-w-[325px]";

// Pass in a root style for the lock up to scale everything within proportionally
// We use the group-has- TW selector to make the lockup white when the main nav is open
export const lockup =
  'relative top-2 sm:top-0 z-[300] sm:-mt-02em shrink-0 sm:text-17 md:text-22 lg:text-28 group-has-[nav[data-headlessui-state="open"]]:*:*:text-white group-has-[nav[data-headlessui-state="open"]]:even:*:*:bg-white';

export const flexbox = "gap-x-12 sm:gap-x-20 md:gap-x-30";

// We use the group-has- TW selector to make the Giving link white when the main nav is open
export const cta =
  'relative z-[300] group-has-[nav[data-headlessui-state="open"]]:text-white group-has-[nav[data-headlessui-state="open"]]:decoration-white';

export const bgColors = {
  none: "bg-transparent",
  black: "bg-black text-white",
  white: "bg-white text-stone-dark",
  blue: "cen-blue-xlight",
  "fog-light": "bg-fog-light text-stone-dark",
  "red-gradient": "bg-cen-red-gradient text-white",
  red: "bg-cardinal-red-x-dark text-white",
  homepage: "bg-cardinal-red-dark text-white",
  "stone-dark": "bg-stone-dark text-white",
};

export type BgColorType = keyof typeof bgColors | "";
