/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#181818",
          800: "#292929",
          700: "#222121",
          300: "#222121",
          200: "#787878",
        },
        green: {
          600: "#0D6459",
          500: "#399E92",
          400: "#BEFFF7",
          300: "#00F4D6",
        },
      },
    },
  },
  plugins: [],
};
