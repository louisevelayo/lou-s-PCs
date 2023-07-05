/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        krona: '"Krona One", sans-serif',
        base: '"Poppins", sans-serif',
      },
      colors: {
        green: "#A0D359",
        grey: "#FAFAFC",
        white: "#FFFFFF",
        dark_grey: "#757780",
        black: "#191B24",
      },
    },
  },
  plugins: [],
};
