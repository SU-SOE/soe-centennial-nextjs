import { cnb } from "cnbuilder";

// Events Section
export const eventsWrapper =
  "flex flex-col flex-wrap justify-center items-center lg:flex-nowrap lg:flex-row gap-38 md:gap-[7.8rem]";

// Event Card
export const cardWrapper = (isCard: boolean) =>
  cnb("flex flex-col w-full h-fit", {
    "rs-px-4 rs-py-5 bg-white rounded-[3rem] text-black lg:max-w-500 xl:max-w-700":
      isCard,
    "text-white lg:max-w-450": !isCard,
  });
export const body = (isCard: boolean) =>
  cnb({
    "text-black": isCard,
    "text-white": !isCard,
  });
