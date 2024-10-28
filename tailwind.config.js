// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto-mono)', ...fontFamily.sans],
      },
      colors: {
        'toonie': '#002EFF',
      },
    },
  },
  plugins: [],
};
