/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        pokemon: ['Pokemon GB', 'sans-serif'], // 'Pokemon GB' is the font name
      },
    },
  },
  plugins: [],
}

