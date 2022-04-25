import React, { ReactElement } from 'react';
import StoryblokReact from 'storyblok-react';

import { FeaturesV1 } from '../../components/features/FeaturesV1';
import { HeroV1 } from '../../components/features/HeroV1';
import type { FeaturesV1Storyblok, HeroV1Storyblok } from '../../types';
import { Placeholder } from '../Placeholder';

export type FeaturesProps = HeroV1Storyblok | FeaturesV1Storyblok;

const Features = {
  HeroV1,
  FeaturesV1,
};

type RenderFeatureProps = {
  content: FeaturesProps;
};

export function RenderFeature({ content }: RenderFeatureProps): ReactElement {
  if (typeof content === 'undefined') {
    return <Placeholder componentName="content" />;
  }

  if (typeof Features[content.component] === 'undefined') {
    return <Placeholder componentName={content.component} />;
  }

  const Component = Features[content.component];

  return (
    <StoryblokReact
      key={content._uid}
      // eslint-disable-next-line no-underscore-dangle
      content={content}
    >
      {/* @ts-expect-error multiple components */}
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...content}
      />
    </StoryblokReact>
  );
}
