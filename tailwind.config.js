/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      'app-orange': '#ff5722',
      'app-yellow': '#f6c90e',
      'app-light-yellow': '#7a6900',
      'app-blue-green': '#00adb5',
      'app-pink': '#f64e8b',
      'app-red': '#F25B5C',
      'app-white': '#eeeeee',
      'app-code-black': '#282c34',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
