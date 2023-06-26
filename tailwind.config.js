/* @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'];

export const theme = {
  extend: {
    colors: {
      BluePrimary: '#3461FF',
      BluePrimaryHover: '#1B46E0',
      Grey:'rgba(0, 0, 0, 0.60)',
    },
    maxWidth: {
      '14ch': '14ch',
      '32ch': '32ch',
      '48ch': '48ch',
      '56ch': '56ch',
    },
  },
};

export const plugins = [];
