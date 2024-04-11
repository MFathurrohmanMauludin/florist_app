import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      // smart tv
      '2xl': { 'max': '1535px' },

      // laptop hd
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1024px' },

      // ipad pro
      'md': { 'max': '834px' },

      // smartphone
      'sm': { 'max': '639px' },
      'xs': { 'max': '480px' },
    },
    extend: {
      dropShadow: {
        'xl': [
          '0 20px 13px rgb(0 0 0 / 0.2)',
          '0 8px 5px rgb(0 0 0 / 0.1)'
        ]
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
