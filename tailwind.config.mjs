/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Golos Text', 'Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brand: {
          50: '#fef9ec',
          100: '#fbeeca',
          200: '#f8de8f',
          300: '#f4c757',
          400: '#f1b12e',
          500: '#ea9016',
          600: '#cf6c10',
          700: '#ac4c11',
          800: '#8c3b14',
          900: '#733114',
          950: '#421806'
        },
        chicago: {
          50: '#f5f6f5',
          100: '#e5e8e6',
          200: '#ced3d1',
          300: '#acb4b1',
          400: '#828e8a',
          500: '#67736f',
          600: '#555e5b',
          700: '#4b5351',
          800: '#424847',
          900: '#3a3f3e',
          950: '#242827'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ]
};
