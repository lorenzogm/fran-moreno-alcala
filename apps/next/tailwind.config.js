module.exports = {
  content: ['../../packages/ui-tailwind/**/*.tsx'],
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
