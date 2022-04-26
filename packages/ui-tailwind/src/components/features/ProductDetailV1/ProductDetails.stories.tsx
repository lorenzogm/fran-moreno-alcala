import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProductDetailV1 as ProductDetailV1UI } from './ProductDetailV1';
// import { ProductDetailV1Mock } from './ProductDetailV1.mocks';

export default {
  title: 'Features/ProductDetail',
  component: ProductDetailV1UI,
} as Meta;

const Template: Story = (args) => <ProductDetailV1UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ProductDetailV1 = Template.bind({});
// ProductDetailV1.args = ProductDetailV1Mock;
