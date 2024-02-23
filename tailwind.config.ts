import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#1FCBFF',
        red: '#C41C4C',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'circle': "url('/images/circle.svg')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '40%': '40%',
            '90%': '90%',
      },
      backgroundPosition: {
        'top-right': 'calc(0%) 0px',
        'top-right-md': 'calc(100%) 160px',
        'top-right-lg': 'calc(100%) 10px',
      },
      fontSize: {
        base: '16px',
        'h1': '40px',
        'h2':'30px',
        'h3': '24px',
        'h4': '20px',
      },
      width: {
        'intro': '739px',
        'price': '465px',
      }
    },
  },
  plugins: [],
};
export default config;
