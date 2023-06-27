/* @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'];

export const theme = {
  extend: {
    colors: {
      BluePrimary: '#3461FF',
      BluePrimaryHover: '#1B46E0',
      Bluelight:'#E5EBFF',
      BluelightHover:'#D4DEFF',
      Gray:'rgba(0, 0, 0, 0.60)',
      graylight: '#56565613',
    },
    maxWidth: {
      '14ch': '14ch',
      '32ch': '32ch',
      '48ch': '48ch',
      '58ch': '58ch',
    },
  },
};

export const plugins = [];
