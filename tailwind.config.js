/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBlue: '#E7F5FD',
        skyBlue: '#CAECFF',
        blue: '#2D9CDB',
        electricBlue: '#0099EE',
        mintGreen: '#56E4A0',
        white: '#FFFFFF',
        coralRed: '#F36868',
      },
    },
  },
  plugins: [],
};
