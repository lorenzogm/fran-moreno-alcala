const { join } = require('path');
console.log(join(__dirname));
module.exports = {
  content: [join(__dirname, 'src/**/*.{ts,tsx}')],
  safelist: [
    {
      pattern: /./,
    },
  ],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    extend: {},
  },
};
