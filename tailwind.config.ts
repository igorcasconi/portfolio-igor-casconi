import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        afacad: ['"Afacad"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: "#0070ff",
      secondary: "#161430",
    },
    screens: {
      sm: "375px",
      md: "640px",
      lg: "1024px",
      xl: "1380px",
      xxl: "1420px",
      xxxl: "1600px",
    },
  },
  plugins: [],
};
export default config;
