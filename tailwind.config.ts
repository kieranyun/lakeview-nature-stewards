import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F4EC",
        bark: "#2E2A22",
        moss: {
          50: "#F1F4EE",
          100: "#DEE6D5",
          200: "#BDCDAB",
          300: "#9CB281",
          400: "#7B975A",
          500: "#5F7B43",
          600: "#4A6234",
          700: "#3A4D29",
          800: "#2E3D21",
          900: "#22301A",
        },
        rust: "#B8552A",
        sand: "#E8DEC6",
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
} satisfies Config;
