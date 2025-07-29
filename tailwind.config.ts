import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#FBBF24",
        accent: "#F472B6",
        neutral: "#374151",
        "base-100": "#FFFFFF",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "font-serif"],
        calistoga: ["var(--font-calistoga)", "cursive"],
      },
    },
    // custom animations
    animation:{
      'ping-large':"ping-large 1s ease-in-out infinite",
      'spin':"spin 1s linear infinite",
      'move-left':"move-left 1s linear infinite",
      'move-right':"move-right 1s linear infinite",
    },
    keyframes:{
      'ping-large':{
        '75%, 100%':{
          transform:'scale(3)',
          opacity: '0',
        }
      },
      'spin':{
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        }
      },
      'move-left':{
        '0%': {
          transform: 'translateX(0)',
        },
        '100%': {
          transform: 'translateX(-50%)',
        }
      },
      'move-right':{
        '0%': {
          transform: 'translateX(-50)',
        },
        '100%': {
          transform: 'translateX(0%)',
        }
      },
    }
  },
  plugins: [],
};
export default config;
