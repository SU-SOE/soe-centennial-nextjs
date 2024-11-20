import { cnb } from "cnbuilder";

export const verticalAlignments = {
  top: "justify-start",
  center: "justify-center",
  bottom: "justify-end",
};
export type QuoteVerticalAlignType = keyof typeof verticalAlignments;

export const root = (quoteOnRight: boolean) =>
  cnb("relative break-words flex flex-col lg:max-w-prose-wide lg:ml-0", {
    "rs-pl-4": !quoteOnRight,
    "rs-pr-4": quoteOnRight,
  });
export const teaserWrapper = "w-fit gap-9";
export const quoteMark = (isLargeTeaser: boolean) =>
  cnb("shrink-0 leading-[0]", {
    "text-[clamp(16rem,7.46vw+13.31rem,26rem)] mt-[clamp(6rem,4.03vw+4.55rem,11.4rem)]":
      !isLargeTeaser,
    "text-[clamp(17rem,11.19vw+12.97rem,32rem)] mt-[clamp(6rem,4.03vw+4.55rem,11.4rem)]":
      isLargeTeaser,
  });
export const teaser = "rs-mb-0 grow-0 w-fit";
export const body = "mt-02em first:mt-0 whitespace-pre-line";
export const source = "rs-mt-1 whitespace-pre-line";
