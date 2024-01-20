import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#F5F5F1',
      'green': '#13ce66',
      'grey': 'grey',
      'gray': 'rgb(89, 89, 89)',
      'gray-light': 'rgb(249, 250, 251)',
      'black': 'black',
      'dark': '#141414',
      'dark-light': '#181818',
      'red': '#e50914',
      'gray-dark': '#221F1F',
      'header': '#141414db',
      'btn-secondary': 'rgba(109, 109, 110, 0.7)',
      'btn-secondary-hover': 'rgba(109, 109, 110, 0.4)'
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '2': '1rem',
        '1': '.5rem',
      },
      borderRadius: {
        's': '9px',
      },
      width: {
        '140': '40rem',
      },
      height: {
        'slide': '124px',
      },
      maxHeight: {
        'slide': '164px',
      }
    },
  },
  plugins: [],
}
export default config
