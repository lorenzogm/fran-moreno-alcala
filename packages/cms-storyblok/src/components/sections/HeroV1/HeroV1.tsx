import { HeroV1 as HeroV1UI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

import type { HeroV1Storyblok } from '../../../types';
import { parseImage } from '../../../utils/parseImage';
import { parseLink } from '../../../utils/parseLink';

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
  return (
    <HeroV1UI
      buttonPrimaryLink={parseLink(buttonPrimaryLink)}
      buttonPrimaryText={buttonPrimaryText}
      buttonSecondaryLink={parseLink(buttonSecondaryLink)}
      buttonSecondaryText={buttonSecondaryText}
      image={parseImage(image)}
      navigation={navigation}
      subtitle={subtitle}
      titleFirstRow={titleFirstRow}
      titleSecondRow={titleSecondRow}
    />
  );
}
