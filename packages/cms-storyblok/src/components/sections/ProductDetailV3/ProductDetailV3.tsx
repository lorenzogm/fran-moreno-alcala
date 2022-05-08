import type { Product } from '@ring/ui-tailwind';
import { ProductDetailV3 as ProductDetailV3UI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

type ProductDetailsV1Props = {
  product: Product;
};
export function ProductDetailV3({ product }: ProductDetailsV1Props): ReactElement {
  if (!product) {
    return <p className="text-center">Cannot find a product attached to this slug</p>;
  }
  return <ProductDetailV3UI product={product} />;
}
