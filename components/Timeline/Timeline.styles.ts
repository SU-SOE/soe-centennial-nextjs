import { cnb } from "cnbuilder";

// Timeline Card
export const heading =
  "2xl:whitespace-pre-line -mt-01em last:mb-0 xl:max-w-1200";
export const superhead = "order-first";

export const wrapper = (align: string, isHorizontal: boolean) =>
  cnb("relative z-50 flex-col w-fit", {
    "md:flex-row": isHorizontal,
    "ml-auto": isHorizontal && align === "right",
  });
export const contentWrapper = (isHorizontal: boolean) =>
  cnb("rs-px-2 flex flex-col z-50", {
    "w-full max-w-500 lg:w-600": isHorizontal,
    "rs-pt-3 w-full": !isHorizontal,
  });
export const imageWrapper = (align: string, isHorizontal: boolean) =>
  cnb("relative rs-mb-2 lg:mb-0 order-first", {
    "md:order-first": align === "left",
    "md:order-last": align === "right",
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
  medium: "w-250 md:w-300 xl:w-[340px]",
  large: "w-250 md:w-300 lg:w-[340px] xl:w-[420px]",
  xlarge: "w-250 md:w-240 lg:w-[340px] xl:w-[420px] 2xl:w-600",
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

export const trapezoidWrapper = (align: string) =>
  cnb("absolute  z-0 flex items-center top-[-38%] lg:top-[-25%] ", {
    "right-[-50%]": align === "right",
    "left-[-50%] rotate-180": align === "left",
  });

export const trapezoidSvg = (align: string) =>
  cnb(
    "flex items-center overflow-hidden w-350 md:w-[430px] lg:w-[536px] xl:w-[637px] 2xl:w-900 h-350 md:h-[430px] lg:h-[536px] xl:h-[637px] 2xl:h-900",
    {
      "rotate-180": align === "left",
    },
  );
