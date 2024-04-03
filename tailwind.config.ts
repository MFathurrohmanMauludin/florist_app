import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        'xl': [
          '0 20px 13px rgb(0 0 0 / 0.2)',
          '0 8px 5px rgb(0 0 0 / 0.1)'
        ]
      }
    },
    screens: {
      'xs': { 'max': '480px' },
      'sm': { 'max': '640px' },
      'md': { 'max': '768px' },
      'lg': { 'max': '1024px' },
      'xl': { 'max': '1280px' },
      '2xl': { 'max': '1536px' },
    }
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
