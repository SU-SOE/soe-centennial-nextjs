/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from 'tailwindcss';

const path = require('path');
const decanter = require('decanter');

// Path to custom Tailwind plugins for Directory
const dir = path.resolve(__dirname, 'tailwind/plugins');

export default {
  presets: [
    decanter,
  ],
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './utilities/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
} satisfies Config;