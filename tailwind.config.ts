import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        grey:'#F7F9FB',
        gray:'#d9d9d9',
        grayDark:'#959595',
        hint:'rgba(0, 0, 0, 0.45)',
        green:'#32be5b',
        blue:'#4096ff',
        bgUpload:'rgba(0, 0, 0, 0.02)',
        red:'red',
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "caro":"linear-gradient(-90deg, #6d6d6d25 1px, transparent 0), linear-gradient(#6d6d6d25 1px, transparent 0), linear-gradient(-90deg, #6d6d6d25 1px, transparent 0), linear-gradient(#6d6d6d25 1px, transparent 0), linear-gradient(transparent 6px, transparent 0, transparent 156px, transparent 0), linear-gradient(-90deg, #6d6d6d25 1px, transparent 0), linear-gradient(-90deg, transparent 6px, transparent 0, transparent 156px, transparent 0), linear-gradient(#6d6d6d25 1px, transparent 0), 0 0"
          
      },
      
    },
  },
  plugins: [],
};
export default config;
