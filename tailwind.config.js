/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
