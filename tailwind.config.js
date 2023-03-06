/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
    colors: {
      button: {
        primary: '#061ae6',
        hover: '#3a4aeb'
      },
      body: {
        bg: '#f4f3f3'
      },
      navbar: {
        bg: '#000000'
      },
      white: '#ffffff',
      black: '#000000'
    }
  },
  plugins: []
};
