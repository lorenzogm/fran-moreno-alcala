import type { Product } from '@ring/ui-tailwind';
import { ProductDetailV1 as ProductDetailV1UI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

type ProductDetailsV1Props = {
  product: Product;
};
export function ProductDetailV1({ product }: ProductDetailsV1Props): ReactElement {
  if (!product) {
    return <p className="text-center">Cannot find a product attached to this slug</p>;
  }
  return <ProductDetailV1UI product={product} />;
}
