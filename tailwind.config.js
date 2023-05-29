/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'navShadow': "0 4px 5px -5px rgb(0 0 0 / 23%)",
      },
      colors: {
        "primary" : "#e5e5e5",
        "secondary" : "#b6002c",
        "third" : "#f2f2f2",
        "modal-bg": "#00000075",
        "header-images" : "rgba(0,0,0,.3)",
        "footer-form" : "#191919",
        "footer" : "#000"
      },
      screens:{
        'xs': '415px',
        'ml' : '425px',
      },
      keyframes: {
        progress: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        }
      },
      animation: {
        progress: 'progress 1s ease-in-out',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
