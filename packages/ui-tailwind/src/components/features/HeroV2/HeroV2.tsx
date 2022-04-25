import React from 'react';

export type HeroV2Props = {
  buttonLink: string;
  buttonText: string;
  title: string;
  subtitle: string;
};

export function HeroV2({ title, subtitle, buttonLink, buttonText }: HeroV2Props) {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{subtitle}</p>
          <a className="btn btn-primary" href={buttonLink}>
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
