/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      background: '#000000',
      primary: '#4E4FEB',
      secondary: '#068FFF',
      light: '#EEEEEE',
    },
    extend: {
      aspectRatio: {
        '5/4': '5 / 4',
      }
    },
  },
  plugins: [],
}

