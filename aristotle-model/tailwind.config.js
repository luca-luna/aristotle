/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundColor: {
        'storm-gray': {
          '50': '#f7f7f8',
          '100': '#efeef0',
          '200': '#dbdadd',
          '300': '#bab9c0',
          '400': '#95939d',
          '500': '#706e79',
          '600': '#625f6a',
          '700': '#504e56',
          '800': '#444349',
          '900': '#3b3a40',
          '950': '#28272a',
      },
      },
      textColor: {
        'storm-gray': {
          '50': '#f7f7f8',
          '100': '#efeef0',
          '200': '#dbdadd',
          '300': '#bab9c0',
          '400': '#95939d',
          '500': '#706e79',
          '600': '#625f6a',
          '700': '#504e56',
          '800': '#444349',
          '900': '#3b3a40',
          '950': '#28272a',
      },
      
      } 
    },
  },
  plugins: [],
}

