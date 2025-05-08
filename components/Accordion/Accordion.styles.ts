import { cnb } from "cnbuilder";

export const root = "relative mx-auto w-fit";
export const heading = "text-pretty";
export const intro = "*:max-w-prose *:*:leading-snug *:*:md:leading-cozy";
export const controls = "rs-mb-3";
export const controlButton =
  "group flex flex-row justify-between items-center gap-10 text-stone-dark hocus:underline hocus:decoration-2 hocus:text-stone-dark";
export const expandAllIcon = "-mt-01em";
export const collapseAllIcon = "-mt-02em";
export const list = "list-unstyled max-w-1000";
export const listItem = "relative mb-0";
export const itemHeading =
  "relative w-full mb-0 type-0 md:big-paragraph md:leading-display";
export const button =
  "group flex flex-row justify-between items-center relative w-full text-left rs-px-3 rs-pt-1 rs-pb-2 border-t-3 border-fog-dark hocus:border-digital-red-light";
export const circleIcon = (isControl = false) =>
  cnb(
    "shrink-0 grow-0 rounded-full border-fog-dark text-stone-dark group-hocus-visible:border-digital-red-light",
    isControl
      ? "w-20 h-20 border-2 p-2"
      : "w-28 h-28 md:w-36 md:h-36 border-3 p-2 md:p-3",
  );
export const contentWrapper = "overflow-clip";
export const richtextWrapper = "rs-pb-2 rs-px-3";
export const richtext = "*:max-w-prose-wide";
