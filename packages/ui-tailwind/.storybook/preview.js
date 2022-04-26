import '../src/styles/global.css';

import { Theme } from 'react-daisyui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Design System', 'Foundation', 'Elements', 'Modules', 'Features', 'Pages'],
    },
  },
};

export const decorators = [
  (Story) => (
    <Theme theme="light">
      <Story />
    </Theme>
  ),
];
