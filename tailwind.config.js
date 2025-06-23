/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Inter'
      },
      keyframes: {
        slideFromTop: {
          '0%': { transform: 'translateY(-200px)', 'opacity':0 },
          '100%': { transform: 'translateY(0)', 'opacity':1},
        }
      }
    },
  },
  plugins: [],
}

