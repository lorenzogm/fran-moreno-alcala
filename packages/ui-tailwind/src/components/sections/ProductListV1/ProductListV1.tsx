import React from 'react';

export type ProductListV1Props = {
  products: Array<Product>;
  title?: string;
};

type Product = {
  name: string;
  slug: string;
  price: string;
  currency: string;
  images: Array<Image>;
};

type Image = {
  src: string;
  alt: string;
};

export function ProductListV1({ products, title }: ProductListV1Props) {
  return (
    <section className="bg-white">
      <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {title && <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">{title}</h2>}

        <div className="mt-6 grid grid-cols-4 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.name} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.images[0].alt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  src={product.images[0].src}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={`/p/${product.slug}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price} {product.currency}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
