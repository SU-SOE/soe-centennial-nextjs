import { cnb } from "cnbuilder";

export const button = (isLight: boolean) =>
  cnb(
    "relative group/popoverbutton bg-transparent flex items-center justify-center size-36 sm:size-42 md:size-48 border-2 border-digital-red-light rounded z-[150] hocus-visible:bg-digital-red-dark transition-colors focus:outline-none",
    isLight
      ? "bg-transparent text-stone-dark hocus-visible:text-white"
      : "bg-true-black text-white",
  );

export const menuIcon = (open: boolean, isLight: boolean) =>
  cnb("w-20 sm:w-22 md:w-26 transition-transform", {
    "group-hover/popoverbutton:rotate-90": open,
    "group-hover/popoverbutton:scale-y-125": !open,
    "text-stone-dark group-hover/popoverbutton:text-white group-focus-visible/popoverbutton:text-white":
      isLight,
    "text-white": (isLight && open) || !isLight,
  });

// Inside the popover panel
export const logo = "absolute top-0 left-0 cc rs-pt-2 rs-pb-1 !cc";
export const panel = "absolute inset-0 z-[140]";
export const panelWrapper =
  "bg-cardinal-red-dark text-white pt-61 sm:pt-68 md:pt-[7.4rem] lg:pt-[8.8rem] rs-pb-7";
export const panelOuter =
  "flex-col sm:flex-row items-start justify-between gap-48 sm:gap-95 rs-pt-6 px-20 sm:px-30 md:px-50 lg:px-80 xl:px-100 3xl:px-100 4xl:px-[calc((100%-1800px)/2)]";

// Internal links
export const col1 =
  "flex-col sm:w-1/2 xl:w-fit shrink-0 xl:shrink-1 2xl:shrink-0 gap-36 justify-between list-unstyled *:mb-0";

// Featured links
export const col2 =
  "flex-col xl:flex-row w-full gap-95 justify-between sm:w-1/2 xl:w-fit";
export const featureCol = "w-full xl:max-w-500";

// Hamburger Icon
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const iconMap = {
  close: XMarkIcon,
  menu: Bars3Icon,
};
export type IconType = keyof typeof iconMap;
