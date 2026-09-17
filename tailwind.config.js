/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#070B12",
          raised: "#0B1220",
          overlay: "#101927",
        },
        accent: {
          DEFAULT: "#1683FF",
          light: "#38BDF8",
          dim: "rgba(22,131,255,0.12)",
        },
        muted: "#94A3B8",
        border: "#243244",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
