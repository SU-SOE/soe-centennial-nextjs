import { cnb } from "cnbuilder";

export const section =
  "cc lg:w-full lg:rs-px-7 flex items-center justify-center border-b border-digital-red";

export const container = (bgColor: string, hasLineArt: boolean): string =>
  cnb("relative 2xl:max-w-[1700px] flex items-center justify-center w-full", {
    "*:text-white": bgColor === "red",
    "*:text-stone-dark": bgColor !== "red",
    "px-30 px-30 sm:px-50 sm:pb-50 pt-100 md:px-68 md:pb-68 md:pt-130 lg:p-100 lg:pt-150 xl:rs-py-10 xl:rs-px-8":
      hasLineArt,
    "rs-py-5 rs-px-2": !hasLineArt,
  });

export const bannerLineart =
  "absolute top-0 left-0 flex justify-center items-center z-10";

export const contentWrapper =
  "w-full 2xl:max-w-[1050px] flex flex-col xl:flex-row items-center sm:items-start xl:items-center justify-center h-full justify-between xl:gap-50";

export const textWrapper = "z-50 max-w-full lg:max-w-[670px]";

export const underline = (bgColor: string) =>
  cnb("underline font-normal decoration-4 underline-offset-8", {
    "text-digital-red-xlight hocus:text-white": bgColor === "red",
    "text-stone-dark hocus:text-digital-red-light": bgColor !== "red",
  });

export const subText = (hasLineArt: boolean) =>
  cnb("order-first font-dm-mono mb-1", {
    "mt-70": hasLineArt,
  });

export const buttonWrapper = "shrink-0 z-50 my-48 md:mb-0";
