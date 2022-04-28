import React from 'react';
import { Hero } from 'react-daisyui';

import { Image } from '../../../types';
import { Button } from '../../elements/Button';

export type HeroV2Props = {
  image?: Image;
  buttonLink: string;
  buttonText: string;
  title: string;
  subtitle: string;
};

export function HeroV2({ title, subtitle, buttonLink, buttonText, image }: HeroV2Props) {
  return (
    <section>
      <Hero style={image ? { backgroundImage: `url(${image?.src})` } : {}}>
        <Hero.Overlay className="my-64 bg-opacity-60" />
        <Hero.Content className="my-64 text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{subtitle}</p>
            <Button color="primary" href={buttonLink}>
              {buttonText}
            </Button>
          </div>
        </Hero.Content>
      </Hero>
    </section>
  );
}
