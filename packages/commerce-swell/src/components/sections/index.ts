import { fetchProductDetailV3Data } from './productDetailV3';
import { fetchProductListV1Data } from './productListV1';

export const sectionFetcherMapping = {
  ProductDetailV3: fetchProductDetailV3Data,
  ProductListV1: fetchProductListV1Data,
};
