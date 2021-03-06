import React from 'react';

import { Button } from '../../elements/Button';

export type ProductDetailV1Props = {
  product: Product;
};

export type Product = {
  name: string;
  price: string;
  currency: string;
  sale: boolean;
  sale_price: string | null;
  description: string;
  images: Array<Image>;
};

type Image = {
  file: {
    url: string;
  };
};

export function ProductDetailV1({ product }: ProductDetailV1Props) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="-mx-4 mb-24 flex flex-wrap">
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
            <div className="relative mb-10" style={{ height: '564px' }}>
              {/* <a className="translate-1/2 absolute top-1/2 left-0 ml-8 transform" href="#">
                <svg fill="none" height="18" viewBox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 16.0185C9.268 16.2905 9.268 16.7275 9 16.9975C8.732 17.2675 8.299 17.2685 8.031 16.9975L0.201 9.0895C-0.067 8.8195 -0.067 8.3825 0.201 8.1105L8.031 0.2025C8.299 -0.0675 8.732 -0.0675 9 0.2025C9.268 0.4735 9.268 0.9115 9 1.1815L1.859 8.6005L9 16.0185Z"
                    fill="#1F40FF"
                  />
                </svg>
              </a> */}
              <img alt="" className="h-full w-full object-cover" src={product.images[0].file.url} />
              {/* <a className="translate-1/2 absolute top-1/2 right-0 mr-8 transform" href="#">
                <svg fill="none" height="18" viewBox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.19922 1.1817C-0.0687795 0.909696 -0.0687794 0.472695 0.19922 0.202695C0.46722 -0.0673054 0.90022 -0.0683048 1.16822 0.202695L8.99822 8.11069C9.26622 8.3807 9.26622 8.81769 8.99822 9.08969L1.16822 16.9977C0.900219 17.2677 0.467218 17.2677 0.199219 16.9977C-0.0687809 16.7267 -0.0687808 16.2887 0.199219 16.0187L7.34022 8.5997L0.19922 1.1817Z"
                    fill="#1F40FF"
                  />
                </svg>
              </a> */}
            </div>
            {/* <div className="-mx-2 flex flex-wrap">
              {product.images.map((image) => (
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a className="block border border-blue-300" href="#">
                    <img alt="" className="h-32 w-full object-cover" src={image.file.url} />
                  </a>
                </div>
              ))}
            </div> */}
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-10 border-b pb-10">
                {/* <span className="text-gray-500">Brille</span> */}
                <h1>{product.name}</h1>
                {/* <div className="mb-8">
                  <button>
                    <img alt="" src="yofte-assets/elements/star-gold.svg" />
                  </button>
                  <button>
                    <img alt="" src="yofte-assets/elements/star-gold.svg" />
                  </button>
                  <button>
                    <img alt="" src="yofte-assets/elements/star-gold.svg" />
                  </button>
                  <button>
                    <img alt="" src="yofte-assets/elements/star-gold.svg" />
                  </button>
                  <button>
                    <img alt="" src="yofte-assets/elements/star-gray.svg" />
                  </button>
                </div> */}
                <p className="font-heading mb-8 inline-block text-2xl font-bold text-blue-300">
                  <span>
                    {product.sale ? product.sale_price : product.price} {product.currency}
                  </span>
                  {product.sale && (
                    <span className="text-base font-normal text-gray-400 line-through">
                      {product.price} {product.currency}
                    </span>
                  )}
                </p>
                {product.description && <p className="max-w-md text-gray-500">{product.description}</p>}
              </div>
              <div className="mb-12 flex">
                <div className="mr-6">
                  <span className="font-heading mb-4 block font-bold uppercase text-gray-400">QTY</span>
                  <div className="font-heading inline-flex items-center rounded-md border border-gray-200 px-4 font-semibold text-gray-500 focus:border-blue-300 focus:ring-blue-300">
                    <button className="py-2 hover:text-gray-700" type="button">
                      <svg fill="none" height="2" viewBox="0 0 12 2" width="12" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.35">
                          <rect fill="currentColor" height="12" transform="rotate(90 12 0)" width="2" x="12" />
                        </g>
                      </svg>
                    </button>
                    <input
                      className="m-0 w-12 rounded-md border-0 px-2 py-4 text-center focus:outline-none focus:ring-transparent md:text-right"
                      placeholder="1"
                      type="number"
                    />
                    <button className="py-2 hover:text-gray-700" type="button">
                      <svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.35">
                          <rect fill="currentColor" height="12" width="2" x="5" />
                          <rect fill="currentColor" height="12" transform="rotate(90 12 5)" width="2" x="12" y="5" />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <span className="font-heading mb-4 block font-bold uppercase text-gray-400">Size</span>
                  <select
                    className="font-heading rounded-md border border-gray-200 py-4 pl-6 pr-10 font-semibold text-gray-500 focus:border-blue-300 focus:ring-blue-300"
                    id=""
                    name=""
                  >
                    <option value="1">Medium</option>
                    <option value="2">Small</option>
                    <option value="3">Large</option>
                  </select>
                </div>
              </div>
              <div className="-mx-4 mb-14 flex flex-wrap items-center">
                <div className="mb-4 w-full px-4 xl:mb-0 xl:w-2/3">
                  <Button color="primary" fullWidth>
                    Add to cart
                  </Button>
                </div>
                <div className="w-full px-4 xl:w-1/3">
                  <a
                    className="ml-auto mr-4 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-md border hover:border-gray-500 sm:ml-0"
                    href="/"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      height="27"
                      viewBox="0 0 27 27"
                      width="27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-md border hover:border-gray-500"
                    href="/"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      height="23"
                      viewBox="0 0 24 23"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="0.35"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* <div className="flex items-center">
                <span className="font-heading mr-8 font-bold uppercase text-gray-500">SHARE IT</span>
                <a className="mr-1 h-8 w-8" href="#">
                  <img alt="" src="yofte-assets/buttons/facebook-circle.svg" />
                </a>
                <a className="mr-1 h-8 w-8" href="#">
                  <img alt="" src="yofte-assets/buttons/instagram-circle.svg" />
                </a>
                <a className="h-8 w-8" href="#">
                  <img alt="" src="yofte-assets/buttons/twitter-circle.svg" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div>
          <ul className="mb-16 flex flex-wrap border-b-2">
            <li className="w-1/2 md:w-auto">
              <a className="font-heading inline-block bg-white py-6 px-10 font-bold text-gray-500 shadow-2xl" href="#">
                Description
              </a>
            </li>
            <li className="w-1/2 md:w-auto">
              <a className="font-heading inline-block py-6 px-10 font-bold text-gray-500" href="#">
                Customer reviews
              </a>
            </li>
            <li className="w-1/2 md:w-auto">
              <a className="font-heading inline-block py-6 px-10 font-bold text-gray-500" href="#">
                Shipping &amp; returns
              </a>
            </li>
            <li className="w-1/2 md:w-auto">
              <a className="font-heading inline-block py-6 px-10 font-bold text-gray-500" href="#">
                Brand
              </a>
            </li>
          </ul>
          <h3 className="font-heading mb-8 text-3xl font-bold text-blue-300">Summer collection and laoreet get</h3>
          <p className="max-w-2xl text-gray-500">
            I had interdum at ante porta, eleifend feugiat nunc. In semper euismod mi a accums lorem sad. Morbi at
            auctor nibh. Aliquam tincidunt placerat mollis. Lorem euismod dignissim, felis tortor ollis eros, non
            ultricies turpis.
          </p>
        </div> */}
      </div>
    </section>
  );
}
