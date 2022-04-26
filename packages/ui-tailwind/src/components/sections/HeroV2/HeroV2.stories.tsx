import { Meta, Story } from '@storybook/react';
import React from 'react';

import type { HeroV2Props } from './HeroV2';
import { HeroV2 as HeroV2UI } from './HeroV2';
import { HeroV2Mock } from './HeroV2.mocks';

export default {
  title: 'Sections/Hero',
  component: HeroV2UI,
} as Meta;

const Template: Story<HeroV2Props> = (args) => <HeroV2UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const HeroV2 = Template.bind({});
HeroV2.args = HeroV2Mock;
