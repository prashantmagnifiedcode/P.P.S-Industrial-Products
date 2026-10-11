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
        pps: {
          blue: "#007CC2",
          hover: "#006aa6",
          dark: "#005688",
          deep: "#00436a",
          light: "#f0f8fc",
          tint: "#e1f2fa",
          border: "#bde2f5",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        header: "0 4px 20px -2px rgba(0, 124, 194, 0.08)",
        dropdown: "0 20px 45px rgba(0, 124, 194, 0.16)",
        card: "0 4px 16px rgba(0, 124, 194, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
