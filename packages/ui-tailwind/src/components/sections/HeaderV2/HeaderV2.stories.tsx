import { Meta, Story } from '@storybook/react';
import React from 'react';

import type { HeaderV2Props } from './HeaderV2';
import { HeaderV2 as HeaderV2UI } from './HeaderV2';
import { HeaderV2Mock } from './HeaderV2.mocks';

export default {
  title: 'Sections/Header',
  component: HeaderV2UI,
} as Meta;

const Template: Story<HeaderV2Props> = (args) => <HeaderV2UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const HeaderV2 = Template.bind({});
HeaderV2.args = HeaderV2Mock;
