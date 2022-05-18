import { Meta, Story } from '@storybook/react';
import React from 'react';

import type { CardsV1Props } from './CardsV1';
import { CardsV1 as CardsV1UI } from './CardsV1';
import { CardsV1Mock } from './CardsV1.mocks';

export default {
  title: 'Sections/Cards',
  component: CardsV1UI,
} as Meta;

const Template: Story<CardsV1Props> = (args) => <CardsV1UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const CardsV1 = Template.bind({});
CardsV1.args = CardsV1Mock;
