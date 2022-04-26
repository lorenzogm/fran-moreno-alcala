import { HeroV1 as HeroV1UI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

import { useStoryblokLink } from '../../../hooks';
import type { HeroV1Storyblok } from '../../../types';

type HeroV1Props = HeroV1Storyblok;

const navigation = [
  { text: 'Product', link: '#' },
  { text: 'Features', link: '#' },
  { text: 'Marketplace', link: '#' },
  { text: 'Company', link: '#' },
];

export function HeroV1({
  titleFirstRow,
  titleSecondRow,
  subtitle,
  buttonPrimaryLink,
  buttonPrimaryText,
  buttonSecondaryLink,
  buttonSecondaryText,
  image,
}: HeroV1Props): ReactElement {
  const buttonPrimaryLinkUrl = useStoryblokLink({ link: buttonPrimaryLink });
  const buttonSecondaryLinkUrl = useStoryblokLink({ link: buttonSecondaryLink });

  return (
    <HeroV1UI
      buttonPrimaryLink={buttonPrimaryLinkUrl}
      buttonPrimaryText={buttonPrimaryText}
      buttonSecondaryLink={buttonSecondaryLinkUrl}
      buttonSecondaryText={buttonSecondaryText}
      image={{ src: image.filename, alt: image.alt || image.name }}
      navigation={navigation}
      subtitle={subtitle}
      titleFirstRow={titleFirstRow}
      titleSecondRow={titleSecondRow}
    />
  );
}
