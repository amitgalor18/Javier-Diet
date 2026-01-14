import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        javier: {
          bg: "#fdfbf7", // Cream
          primary: "#fdba74", // Soft Orange
          secondary: "#a7f3d0", // Mint Green
        }
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
