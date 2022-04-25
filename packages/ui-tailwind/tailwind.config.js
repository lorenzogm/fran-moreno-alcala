const { join } = require('path');

module.exports = {
  content: [join(__dirname, 'src/**/*.{ts,tsx}')],
  plugins: [require('daisyui')],
  theme: {
    extend: {},
  },
};
