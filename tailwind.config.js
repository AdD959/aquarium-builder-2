/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  safelist: [
    'group-hover:w-1/3',
    'group-hover:w-2/3',
    'group-hover:w-full',
  ],
  theme: {
    extend: {
      animation: {
        'bob': 'bob 3s ease-in-out infinite'
      },
      gridTemplateColumns: {
        'fish': 'repeat(auto-fill, minmax(300px, 1fr))'
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(10%)' },
          '50%': { transform: 'translateY(20%)' },
        }
      }
    },
  },
  plugins: [
  ],
}

