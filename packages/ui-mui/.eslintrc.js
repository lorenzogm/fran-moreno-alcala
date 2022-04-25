const react = require('@ring/config-eslint/react');

module.exports = {
  ...react,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  extends: ['plugin:storybook/recommended', ...react.extends],
  rules: {
    ...react.rules,

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
        peerDependencies: true,
      },
    ],
  },
  overrides: [
    {
      // or whatever matches stories specified in .storybook/main.js
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'func-style': ['error', 'expression', { allowArrowFunctions: true }],
        'import/no-default-export': 'off',
        'storybook/story-exports': 'off',
        'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
