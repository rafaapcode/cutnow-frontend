import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      "lg": "1100px",
      'xl': '1280px', 
      '2xl': '1536px',
    },
    extend: {
      backgroundColor: {
        "main-black": "#000",
        "secondary-green": "#D3FB3F",
        "terciary-green": "#AAD704",
        "secondary-black": "#393939",
      },
      textColor: {
        "main": "#fff",
        "secondary": "#727272",
        "terciary": "#393939",
        "secondary-green": "#D3FB3F",
        "terciary-green": "#AAD704",
      },
      fontSize: {
        "title": "68px",
        "title-1": "52px",
        "title-2": "40px",
        "title-3": "22px",
        "subtitle-1": "32px",
        "subtitle-2": "28px",
        "subtitle-3": "22px",
        "paragraph-1": "16px",
        "paragraph-2": "10px",
      },
    },
  },
  plugins: [],
};
export default config;
