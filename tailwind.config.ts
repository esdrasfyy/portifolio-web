import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
    },
    colors: {
      custom: {
        primaryAqua: "var(--color-primary-aqua)",
        secondaryAqua: "var(--color-secondary-aqua)",
        primaryPurple: "var(--color-primary-purple)",
        secondaryPurple: "var(--color-secondary-purple)",
      },
    },
  },
  plugins: [],
};
export default config;
