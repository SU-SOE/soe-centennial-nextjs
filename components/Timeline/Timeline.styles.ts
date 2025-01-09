import { cnb } from "cnbuilder";

// Timeline Card
export const wrapper = (align: string, isHorizontal: boolean) =>
  cnb("relative z-50 flex-col w-fit", {
    "lg:flex-row": isHorizontal,
    "ml-auto": isHorizontal && align === "right",
  });
export const contentWrapper = (isHorizontal: boolean) =>
  cnb("rs-px-2 flex flex-col", {
    "w-[420px] lg:w-600": isHorizontal,
    "rs-pt-2 w-full": !isHorizontal,
  });
export const heading =
  "2xl:whitespace-pre-line -mt-01em last:mb-0 xl:max-w-1200";
export const superhead = "order-first rs-mb-2";
export const imageWrapper = (align: string, isHorizontal: boolean) =>
  cnb("relative rs-mb-2 lg:mb-0 w-[420px] order-first", {
    "lg:order-first": align === "left",
    "lg:order-last": align === "right",
    "lg:rs-mr-4": align === "left" && isHorizontal,
    "lg:rs-ml-4": align === "right" && isHorizontal,
  });

export const widths = {
  fit: "w-fit",
  full: "w-full", // width: 100%; default
  site: "cc", // Use Decanter custom screen margins and sets max content width of 1500px
  screen: "w-screen", // width: 100vw
};

export const bgColors = {
  black: "bg-black text-white",
  white: "bg-white text-black",
  "fog-light": "bg-fog-light text-black",
  "red-gradient": "bg-cen-red-gradient text-white",
};

// Timeline Image
export const size = {
  small: "w-200 md:w-250",
  medium: "w-250 md:w-[300px] xl:w-[340px]",
  large: "w-250 md:w-[300px] lg:w-[340px] xl:w-[420px]",
  xlarge: "w-250 md:w-[300px] lg:w-[340px] xl:w-[420px] 2xl:w-600",
  full: "w-full",
};

export const trapezoid = (
  trapezoidAngle: "left" | "right",
  isExpanded: boolean,
) =>
  cnb({
    "rotate-y-[15deg]": trapezoidAngle === "left",
    "rotate-y-[-15deg]": trapezoidAngle === "right",
    "rotate-y-0 perspective-0": isExpanded,
  });
