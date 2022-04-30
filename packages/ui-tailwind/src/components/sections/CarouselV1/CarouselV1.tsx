import React from 'react';
import { Carousel } from 'react-daisyui';

import { Image } from '../../../types';

export type CarouselV1Props = {
  images: Array<Image>;
};

export function CarouselV1({ images }: CarouselV1Props) {
  return (
    <section>
      <Carousel display="sequential" width="full">
        {images.map((image) => (
          <Carousel.Item key={image.src} alt={image.alt} src={image.src} />
        ))}
      </Carousel>
    </section>
  );
}
