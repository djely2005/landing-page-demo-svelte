/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': {  DEFAULT: '#EB2127',  50: '#FFFFFF',  100: '#FFFFFF',  200: '#FCDCDD',  300: '#F8B7B9',  400: '#F59194',  500: '#F26C70',  600: '#EE464B',  700: '#EB2127',  800: '#C21217',  900: '#8F0D11',  950: '#750B0E'},
      },
    }
  },
  plugins: []
};
