import { Meta, Story } from '@storybook/react';
import React from 'react';

import type { NavigationV1Props } from './NavigationV1';
import { NavigationV1 as NavigationV1UI } from './NavigationV1';
import { NavigationV1Mock } from './NavigationV1.mocks';

export default {
  title: 'Sections/Navigation',
  component: NavigationV1UI,
} as Meta;

const Template: Story<NavigationV1Props> = (args) => <NavigationV1UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const NavigationV1 = Template.bind({});
NavigationV1.args = NavigationV1Mock;
