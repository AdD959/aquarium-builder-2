/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      animation: {
        'bob': 'bob 3s ease-in-out infinite'
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(10%)' },
          '50%': { transform: 'translateY(20%)' },
        }
      }
    },
  },
  plugins: [],
}

