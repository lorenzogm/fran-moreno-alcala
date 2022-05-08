import { ProductDetailV3Props } from './ProductDetailV3';

export const ProductDetailV3Mock: ProductDetailV3Props = {
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
