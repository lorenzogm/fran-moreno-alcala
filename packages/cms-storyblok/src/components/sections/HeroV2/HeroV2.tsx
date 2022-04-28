import { HeroV2 as HeroV2UI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

import { HeroV2Storyblok, StoryblokLink } from '../../../types';
import { parseLink } from '../../../utils/parseLink';

export type HeroV2Props = HeroV2Storyblok;

export function HeroV2({ buttonLink, buttonText, subtitle, title }: HeroV2Props): ReactElement {
  return (
    <HeroV2UI
      buttonLink={parseLink(buttonLink as StoryblokLink)}
      buttonText={buttonText}
      subtitle={subtitle}
      title={title}
    />
  );
}
