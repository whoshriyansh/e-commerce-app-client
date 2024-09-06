/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        blue: "#1B6392",
        yellow: "#EBC80C",
        orange: "#FA8232",
        "orange-secondary": "#FFE7D6",
        black: "#191C1F",
        gray: "#F2F4F5",
      },
      fontSize: {
        "display-01": ["4rem", { lineHeight: "1.2", fontWeight: "bold" }],
        "display-02": ["3.5rem", { lineHeight: "1.2", fontWeight: "bold" }],
        "display-03": ["3rem", { lineHeight: "1.2", fontWeight: "bold" }],
        "display-04": ["2.5rem", { lineHeight: "1.2", fontWeight: "bold" }],
        "display-05": ["2.25rem", { lineHeight: "1.2", fontWeight: "bold" }],
        "heading-01": ["2.5rem", { lineHeight: "1.4", fontWeight: "bold" }],
        "heading-02": ["2rem", { lineHeight: "1.4", fontWeight: "bold" }],
        "heading-03": ["1.5rem", { lineHeight: "1.4" }],
        "heading-04": ["1.125rem", { lineHeight: "1.4" }],
        "heading-05": ["1rem", { lineHeight: "1.4" }],
        "body-xxl": ["1.5rem", { lineHeight: "1.5" }],
        "body-xl": ["1.25rem", { lineHeight: "1.5" }],
        "body-large": ["1.125rem", { lineHeight: "1.5" }],
        "body-medium": ["1rem", { lineHeight: "1.5" }],
        "body-small": ["1rem", { lineHeight: "1.5" }],
        "body-xs": ["0.6875rem", { lineHeight: "1.5" }],
        "body-tiny": ["0.75rem", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
