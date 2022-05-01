// @ts-expect-error swell-node doesn't provide types
import swell from 'swell-node';

import { ProductSwell } from '../../types';

export async function fetchProductListV1Data(): Promise<{ products: Array<ProductSwell> }> {
  swell.init(process.env.SWELL_STORE_ID, process.env.SWELL_SECRET_KEY);

  const r = await swell.get(`/products`, {
    where: { active: true },
    page: 1,
  });

  const products = r.results;

  return { products } as { products: Array<ProductSwell> };
}
