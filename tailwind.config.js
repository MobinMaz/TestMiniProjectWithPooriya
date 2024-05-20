/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'cs': '850px',
         // => @media (min-width: 850px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'clg': '1204px',
         // => @media (min-width: 1204px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.15) 0px 5px 15px',
      }
    },

  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  },
  require('tailwindcss-animated')
  ],
}

