import { Meta, Story } from '@storybook/react';
import React from 'react';

import type { HeaderV1Props } from './HeaderV1';
import { HeaderV1 as HeaderV1UI } from './HeaderV1';
import { HeaderV1Mock } from './HeaderV1.mocks';

export default {
  title: 'Sections/Header',
  component: HeaderV1UI,
} as Meta;

const Template: Story<HeaderV1Props> = (args) => <HeaderV1UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const HeaderV1 = Template.bind({});
HeaderV1.args = HeaderV1Mock;
