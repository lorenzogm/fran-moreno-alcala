import { fetchProductDetailV1Data } from './productDetailV1';
import { fetchProductListV1Data } from './productListV1';

export const sectionFetcherMapping = {
  ProductDetailV1: fetchProductDetailV1Data,
  ProductListV1: fetchProductListV1Data,
};
