// Use a wider centered container (1800px wide at 4XL (2000px) breakpoint)
export const wrapper =
  "cc 3xl:px-100 4xl:px-[calc((100%-1800px)/2)] rs-pt-2 rs-pb-1 transition";

export const bgColors = {
  none: "bg-transparent",
  black: "bg-black text-white",
  white: "bg-white text-stone-dark",
  blue: "cen-blue-xlight",
  "fog-light": "bg-fog-light text-stone-dark",
  "red-gradient": "bg-cen-red-gradient text-white",
  "stone-dark": "bg-stone-dark text-white",
};

export type BgColorType = keyof typeof bgColors | "";
