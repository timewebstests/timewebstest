import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3xl': '0 0px 40px 15px rgba(0, 0, 0, 0.5)',
        'l': '0 0px 10px 5px rgba(0, 0, 0, 0.3)',
        'navbar' : '25px -11px 28px 550px rgba(0, 0, 0, 0.6)',
      },
      brightness: {
        'brightness-20': '.25',
      },
      keyframes: {
        fade: {
          '0%, 100%' : {transform: 'rotate(-3deg)'},
          '50%': {transform: 'rotate(3deg)'},
        }
      },
      animation: {
        fade: 'fade 1s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}
export default config


