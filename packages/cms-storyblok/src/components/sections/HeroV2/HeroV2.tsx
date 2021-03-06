import { HeroV2 as HeroV2UI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

import { HeroV2Storyblok } from '../../../types';
import type { StoryblokLink } from '../../../utils/parseLink';
import { parseLink } from '../../../utils/parseLink';

export type HeroV2Props = HeroV2Storyblok;

export function HeroV2({ image, buttonLink, buttonText, subtitle, title }: HeroV2Props): ReactElement {
  return (
    <HeroV2UI
      buttonLink={parseLink(buttonLink as StoryblokLink)}
      buttonText={buttonText}
      image={image ? { src: image.filename, alt: image.alt || image.name } : undefined}
      subtitle={subtitle}
      title={title}
    />
  );
}
