/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from 'tailwindcss';

// const path = require('path');
const decanter = require('decanter');

// Path to custom Tailwind plugins for Directory
// const dir = path.resolve(__dirname, 'tailwind/plugins');

export default {
  presets: [
    decanter,
  ],
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './utilities/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'soe-red-gradient': 'linear-gradient(90deg, #400000 0.19%, #7A0000 52.26%, #400000 99.94%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require("@xpd/tailwind-3dtransforms")
  ],
} satisfies Config;