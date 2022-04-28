import React, { ReactElement } from 'react';
import StoryblokReact from 'storyblok-react';

import { FeaturesV1 } from '../../components/sections/FeaturesV1';
import { HeroV1 } from '../../components/sections/HeroV1';
import { HeroV2 } from '../../components/sections/HeroV2';
import { NavigationV1 } from '../../components/sections/NavigationV1';
import { ProductDetailV1 } from '../../components/sections/ProductDetailV1';
import type { FeaturesV1Storyblok, HeroV1Storyblok, HeroV2Storyblok, ProductDetailV1Storyblok } from '../../types';
import { Placeholder } from '../Placeholder';

export type SectionsProps = HeroV1Storyblok | HeroV2Storyblok | FeaturesV1Storyblok | ProductDetailV1Storyblok;

const Sections = {
  HeroV1,
  HeroV2,
  FeaturesV1,
  NavigationV1,
  ProductDetailV1,
};

type RenderSectionProps = {
  content: SectionsProps;
};

export function RenderSection({ content }: RenderSectionProps): ReactElement {
  if (typeof content === 'undefined') {
    return <Placeholder componentName="content" />;
  }

  if (typeof Sections[content.component] === 'undefined') {
    return <Placeholder componentName={content.component} />;
  }

  const Component = Sections[content.component];

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
