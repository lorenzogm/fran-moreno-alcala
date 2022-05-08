// @ts-expect-error swell-node doesn't provide types
import swell from 'swell-node';

import { ProductSwell } from '../../types';

type FetchProductDetailV3DataProps = {
  productSlug: string;
};

export async function fetchProductDetailV3Data({
  productSlug,
}: FetchProductDetailV3DataProps): Promise<{ product?: ProductSwell }> {
  if (productSlug === undefined) {
    return {};
  }

  swell.init(process.env.SWELL_STORE_ID, process.env.SWELL_SECRET_KEY);

  const r = await swell.get(`/products`, {
    where: { active: true, slug: productSlug },
    limit: 1,
    page: 1,
  });

  const [product] = r.results;

  return { product } as { product: ProductSwell };
}
