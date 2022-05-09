import { HeroV1 as HeroV1UI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

import type { HeroV1Storyblok } from '../../../types';
import { parseImage } from '../../../utils/parseImage';
import { parseLink } from '../../../utils/parseLink';

type HeroV1Props = HeroV1Storyblok;

export function HeroV1({
  title,
  logo,
  navigation,
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
      logo={parseImage(logo)}
      navigation={navigation?.map((item) => {
        return { ...item, link: parseLink(item.link) };
      })}
      subtitle={subtitle}
      title={title}
      titleFirstRow={titleFirstRow}
      titleSecondRow={titleSecondRow}
    />
  );
}
