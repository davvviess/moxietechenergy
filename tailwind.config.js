/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-green-200': '#253D2F',
      },

    },
  },
  plugins: [],
}

