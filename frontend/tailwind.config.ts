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
          brand: Colors
        },
      },
    },
    plugins: [],
  };