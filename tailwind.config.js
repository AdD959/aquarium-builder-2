/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  safelist: [
    'animation-delay-[-0ms]',
    'animation-delay-[-300ms]',
    'animation-delay-[-600ms]',
    'animation-delay-[-900ms]',
    'animation-delay-[-1200ms]',
    'animation-delay-[-1500ms]',
    'animation-delay-[-1800ms]',
    'animation-delay-[-2100ms]',
    'animation-delay-[-2400ms]',
    'animation-delay-[-2700ms]',
    'w-20',
    'w-40',
    'group-hover:w-10/12',
    'group-hover:w-1/3',
    'group-hover:w-2/3',
    '-scale-y-100'
  ],
  theme: {
    extend: {
      animation: {
        'bob': 'bob 5s ease-in-out infinite'
      },
      boxShadow: {
        'fish-card': 'box-shadow: 0px 0px 31px 10px rgba(67,255,0,0.75)'
      },
      gridTemplateColumns: {
        'fish': 'repeat(auto-fill, minmax(300px, 1fr))'
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(5%)' },
        }
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
}

