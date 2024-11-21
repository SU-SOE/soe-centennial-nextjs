/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const path = require("path");
const decanter = require("decanter");

// Path to custom Tailwind plugins for Directory
const dir = path.resolve(__dirname, "tailwind/plugins");

type AddVariantFunction = (variant: string, selector: string) => void;

export default {
  presets: [decanter],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./utilities/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Centennial Override
      "soe-centennial": require(`${dir}/theme/soe-centennial.js`)(),
      colors: require(`${dir}/theme/soe-colors.js`)(),
      backgroundImage: require(`${dir}/theme/soe-gradients.js`)(),
      fontFamily: require(`${dir}/theme/soe-fontFamily.js`)(),
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@xpd/tailwind-3dtransforms"),
    require(`${dir}/base/soe-base.js`)(),
    require(`${dir}/components/soe-typography.js`)(),
    plugin(function ({ addVariant }: { addVariant: AddVariantFunction }) {
      const nthVariants = [2, 3, 4];
      nthVariants.forEach((n) => {
        addVariant(`nth-${n}n`, `&:nth-child(${n}n)`);
      });
    }),
  ],
} satisfies Config;
