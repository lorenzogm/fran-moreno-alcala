const { join } = require('path');

module.exports = {
  content: [join(__dirname, 'src/**/*.{ts,tsx}')],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    extend: {},
  },
};
