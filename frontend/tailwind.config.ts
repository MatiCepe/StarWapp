import { Colors } from "@/app/other/Colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#fc9c43',
        yellow: '#fccc6b',
        red: '#a13438',
        brown: '#ac8257',
        beige: '#c8bcb4',
        dark: '#5e3736',

        amber: '#ffb347',
        gold: '#d4af37',
        burntOrange: '#cc5500',
        rust: '#b7410e',
        sand: '#e3d9c6',
        clay: '#a0522d',
        olive: '#7a8450',
        moss: '#6b7d52',
        midnight: '#2c1d1d',
        slate: '#4e4e50',
        bronze: '#cd7f32',
      },
    },
  },
  plugins: [],
};