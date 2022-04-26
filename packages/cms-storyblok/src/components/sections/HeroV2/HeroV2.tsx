import { HeroV2 as HeroV2UI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

import { useStoryblokLink } from '../../../hooks';
import { HeroV2Storyblok } from '../../../types';

export type HeroV2Props = HeroV2Storyblok;

export function HeroV2({ buttonLink, buttonText, subtitle, title }: HeroV2Props): ReactElement {
  const buttonLinkUrl = useStoryblokLink({ link: buttonLink });

  return <HeroV2UI buttonLink={buttonLinkUrl} buttonText={buttonText} subtitle={subtitle} title={title} />;
}
