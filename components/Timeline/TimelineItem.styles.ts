import { cnb } from "cnbuilder";

export const size = {
  small: "w-200 md:w-250",
  medium: "w-250 md:w-[300px] xl:w-[340px]",
  large: "w-250 md:w-[300px] xl:w-[420px]",
  xlarge: "w-250 md:w-[300px] lg:w-[420px] xl:w-600",
  full: "w-full",
};

export const trapezoid = (trapezoidAngle: string, isExpanded: boolean) =>
  cnb({
    "rotate-y-[15deg] hocus:rotate-y-[-15deg]":
      trapezoidAngle === "left" && !isExpanded,
    "rotate-y-[-15deg] hocus:rotate-y-[15deg]":
      trapezoidAngle === "right" && !isExpanded,
    "rotate-y-[-15deg]": trapezoidAngle === "left" && isExpanded,
    "rotate-y-[15deg]": trapezoidAngle === "right" && isExpanded,
  });
