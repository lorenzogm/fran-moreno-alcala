import { Meta, Story } from '@storybook/react';
import React from 'react';

import type { CarouselV1Props } from './CarouselV1';
import { CarouselV1 as CarouselV1UI } from './CarouselV1';
import { CarouselV1Mock } from './CarouselV1.mocks';

export default {
  title: 'Sections/Carousel',
  component: CarouselV1UI,
} as Meta;

const Template: Story<CarouselV1Props> = (args) => <CarouselV1UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const CarouselV1 = Template.bind({});
CarouselV1.args = CarouselV1Mock;
