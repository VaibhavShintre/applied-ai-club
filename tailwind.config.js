/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        red: { ncstate: '#CC0000' },
      },
    },
  },
  plugins: [],
}

