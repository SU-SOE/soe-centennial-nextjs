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
      colors: require(`${dir}/theme/cen-colors.js`)(),
      backgroundImage: require(`${dir}/theme/cen-gradients.js`)(),
      fontFamily: require(`${dir}/theme/cen-fontFamily.js`)(),
      screens: {
        "3xl": "2400px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@xpd/tailwind-3dtransforms"),
    require(`${dir}/base/cen-base.js`)(),
    require(`${dir}/components/cen-typography.js`)(),
    plugin(function ({ addVariant }: { addVariant: AddVariantFunction }) {
      const nthVariants = [2, 3, 4];
      nthVariants.forEach((n) => {
        addVariant(`nth-${n}n`, `&:nth-child(${n}n)`);
      });
      const customNthVariants = [
        { name: "nth-4n-2", formula: "4n+2" },
        { name: "nth-4n-3", formula: "4n+3" },
      ];
      customNthVariants.forEach(({ name, formula }) => {
        addVariant(name, `&:nth-child(${formula})`);
      });
    }),
  ],
} satisfies Config;
