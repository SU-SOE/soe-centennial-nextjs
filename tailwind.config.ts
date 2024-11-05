/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// const path = require('path');
const decanter = require("decanter");

// Path to custom Tailwind plugins for Directory
// const dir = path.resolve(__dirname, 'tailwind/plugins');

export default {
  presets: [decanter],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./utilities/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soe-black": "#181818",
      },
      backgroundImage: {
        "soe-red-gradient":
          "linear-gradient(90deg, #400000 0.19%, #7A0000 52.26%, #400000 99.94%)",
        "feature-gradient-bt":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 75.5%, #181818 100%)",
        "feature-gradient-rl":
          "linear-gradient(270deg, rgba(23, 23, 26, 0.00) 0.11%, #181818 99.89%)",
      },
      fontFamily: {
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
        stanford: ["var(--font-stanford)", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@xpd/tailwind-3dtransforms"),
    plugin(function ({ addVariant }) {
      const nthVariants = [2, 3, 4];
      nthVariants.forEach((n) => {
        addVariant(`nth-${n}n`, `&:nth-child(${n}n)`);
      });
    }),
  ],
} satisfies Config;
