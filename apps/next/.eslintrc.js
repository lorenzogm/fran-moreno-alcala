const next = require('@ring/config-eslint/nextjs');

module.exports = {
  ...next,
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  overrides: [
    {
      files: ['**/pages/**'],
      rules: {
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        'import/no-default-export': 'off',
      },
    },
  ],
};
