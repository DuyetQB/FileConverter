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
        grey:'F7F9FB',
        primary:'rgb(99 102 241)'
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
