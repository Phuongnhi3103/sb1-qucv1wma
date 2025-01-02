/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          dark: '#2E2F30',
          gray: '#58585A',
          light: '#898A90',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};