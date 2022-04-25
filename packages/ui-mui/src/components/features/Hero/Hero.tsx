import React from 'react';

export type HeroProps = {
  image: { src: string; alt: string };
  title: string;
  subtitle: string;
};

export function Hero({ image, title, subtitle }: HeroProps) {
  return (
    <ul>
      <img alt={image.alt} src={image.src} />
      <li>{title}</li>
      <li>{subtitle}</li>
    </ul>
  );
}
