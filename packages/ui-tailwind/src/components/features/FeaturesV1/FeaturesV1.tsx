import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';
import React from 'react';

const icons = [GlobeAltIcon, ScaleIcon, LightningBoltIcon, AnnotationIcon];

export type FeaturesV1Props = {
  features: Array<{ title: string; subtitle: string }>;
  title: string;
  pretitle: string;
  subtitle: string;
};

export function FeaturesV1({ title, pretitle, subtitle, features }: FeaturesV1Props) {
  const featuresWithIcon = features.map((feature, index) => {
    return { ...feature, icon: icons[index] };
  });

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">{pretitle}</h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">{title}</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">{subtitle}</p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {featuresWithIcon.map((feature) => (
              <div key={feature.title} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.subtitle}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
