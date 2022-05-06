import React, { ReactElement } from 'react';
import StoryblokReact from 'storyblok-react';

import { CarouselV1 } from '../../components/sections/CarouselV1';
import { FeaturesV1 } from '../../components/sections/FeaturesV1';
import { HeaderV1 } from '../../components/sections/HeaderV1';
import { HeaderV2 } from '../../components/sections/HeaderV2';
import { HeroV1 } from '../../components/sections/HeroV1';
import { HeroV2 } from '../../components/sections/HeroV2';
import { ProductDetailV1 } from '../../components/sections/ProductDetailV1';
import { ProductListV1 } from '../../components/sections/ProductListV1';
import type {
  CarouselV1Storyblok,
  FeaturesV1Storyblok,
  HeaderV1Storyblok,
  HeaderV2Storyblok,
  HeroV1Storyblok,
  HeroV2Storyblok,
  ProductDetailV1Storyblok,
  ProductListV1Storyblok,
} from '../../types';
import { Placeholder } from '../Placeholder';

export type SectionsProps =
  | CarouselV1Storyblok
  | HeroV1Storyblok
  | HeroV2Storyblok
  | HeaderV1Storyblok
  | HeaderV2Storyblok
  | FeaturesV1Storyblok
  | ProductDetailV1Storyblok
  | ProductListV1Storyblok;

const Sections = {
  CarouselV1,
  HeroV1,
  HeroV2,
  FeaturesV1,
  HeaderV1,
  HeaderV2,
  ProductDetailV1,
  ProductListV1,
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
