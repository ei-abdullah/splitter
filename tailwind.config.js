/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        primary: {
          cyan: "#2edb87",
        },
        neutral: {
          "very-dark-cyan": "#00494d",
          "dark-grayish-cyan": "#5e7a7d",
          "grayish-cyan": "#7f9c9f",
          "light-grayish-cyan": "#c5e4e7",
          "very-light-grayish-cyan": "#f3f9fa",
          white: "#ffffff",
        },
      },
      fontSize: {
        "form-input": "24px",
      },
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
      },
      fontWeight: {
        bold: "700",
      },
      backgroundImage: {
        dollar: "url('/images/icon-dollar.svg')",
      },
    },
  },
  plugins: [],
};
