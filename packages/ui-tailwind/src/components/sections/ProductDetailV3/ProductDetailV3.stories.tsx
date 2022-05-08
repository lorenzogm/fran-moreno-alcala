import { Meta, Story } from '@storybook/react';
import React from 'react';

import type { ProductDetailV3Props } from './ProductDetailV3';
import { ProductDetailV3 as ProductDetailV3UI } from './ProductDetailV3';
import { ProductDetailV3Mock } from './ProductDetailV3.mocks';

export default {
  title: 'Sections/ProductDetail',
  component: ProductDetailV3UI,
} as Meta;

const Template: Story<ProductDetailV3Props> = (args) => <ProductDetailV3UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ProductDetailV3 = Template.bind({});
ProductDetailV3.args = ProductDetailV3Mock;
