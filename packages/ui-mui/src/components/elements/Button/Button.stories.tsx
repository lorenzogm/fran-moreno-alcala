import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    children: { control: { type: 'text' } },
    onClick: { action: 'clicked', table: { disable: true } },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};
