import { ProductDetailV1Props } from './ProductDetailV1';

export const ProductDetailV1Mock: ProductDetailV1Props = {
  product: {
    name: 'Product name',
    price: '20',
    currency: 'EUR',
    sale: false,
    sale_price: null,
    description: 'Description',
    images: [
      {
        file: {
          url: 'https://api.lorem.space/image/fashion?w=1000&h=800',
        },
      },
    ],
  },
};
