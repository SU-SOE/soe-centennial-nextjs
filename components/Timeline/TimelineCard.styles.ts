import { cnb } from "cnbuilder";

export const root = "overflow-hidden";
export const wrapper = (align: string, isHorizontal: boolean) =>
  cnb("flex-col w-fit", {
    "lg:flex-row": isHorizontal,
    "lg:ml-auto": align === "right",
  });
export const contentWrapper =
  "rs-px-2 w-[420px] lg:w-600 lg:rs-pr-9 ml-0 flex flex-col";
export const heading =
  "2xl:whitespace-pre-line -mt-01em rs-mb-0 last:mb-0 xl:max-w-1200";
export const superhead = "order-first rs-mb-2";
export const dek = "max-w-[50ch] type-3 rs-mb-3 *:*:leading-snug";
export const body = "max-w-[50ch] rs-mb-3 *:*:leading-snug";
export const imageWrapper = (align: string, isHorizontal: boolean) =>
  cnb("rs-mb-2 lg:mb-0 w-[420px] lg:w-600 order-first", {
    "lg:order-first": align === "left",
    "lg:order-last": align === "right",
    "lg:rs-mr-4": align === "left" && isHorizontal,
    "lg:rs-ml-4": align === "right" && isHorizontal,
  });
export const image =
  "inset-0 w-full h-full object-cover rounded-lg transform ease-in-out duration-500";
