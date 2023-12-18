// npm run dev 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.{html,js}',
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 1s linear infinite ',
      }
    },
  },
  plugins: [],

}

