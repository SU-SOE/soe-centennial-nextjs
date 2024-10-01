/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from 'tailwindcss';

const decanter = require('decanter');

export default {
  presets: [
    decanter,
  ],
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './utilities/**/*.{js,jsx,ts,tsx}',
  ],
} satisfies Config;