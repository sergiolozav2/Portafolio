/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#090a0f",
      },
      screens: {
        "-md": { max: "767px" },
      },
    },
  },
  plugins: [],
};
