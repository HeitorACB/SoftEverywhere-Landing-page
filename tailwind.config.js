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
      FundoSectionLogos: '#FAFAFA',
    },
    maxWidth: {
      '18ch': '18ch',
      '32ch': '32ch',
      '38ch': '38ch',
      '48ch': '48ch',
      '58ch': '58ch',
      
    },
  },
};

export const plugins = [];
