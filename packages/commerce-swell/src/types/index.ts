export type ProductSwell = {
  active: boolean;
  variable: boolean;
  name: string;
  tags: Array<string>;
  description: string;
  price: string;
  currency: 'EUR';
  slug: string;
  images: Array<ImageSwell>;
  id: string;
};

export type ImageSwell = {
  file: {
    url: string;
  };
};
