/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'linear': 'linear',
      },
      transitionDuration: {
        '500': '500ms',
      },
    },
  },
  plugins: [],
}