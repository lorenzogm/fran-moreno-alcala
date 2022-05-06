import { HeaderV1 as HeaderV1UI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

import type { HeaderV1Storyblok, StoryblokLink } from '../../../types';
import { parseImage } from '../../../utils/parseImage';
import { parseLink } from '../../../utils/parseLink';

type HeaderV1Props = HeaderV1Storyblok;

export function HeaderV1({
  title,
  logo,
  navigation,
  primaryButtonLink,
  primaryButtonTitle,
  secondaryButtonLink,
  secondaryButtonTitle,
}: HeaderV1Props): ReactElement {
  const navigationParsed = navigation
    ? navigation.map((link) => {
        return {
          title: link.title,
          link: parseLink(link.link as StoryblokLink),
        };
      })
    : [];

  return (
    <HeaderV1UI
      logo={parseImage(logo)}
      navigation={navigationParsed}
      primaryButtonLink={parseLink(primaryButtonLink)}
      primaryButtonTitle={primaryButtonTitle}
      secondaryButtonLink={parseLink(secondaryButtonLink)}
      secondaryButtonTitle={secondaryButtonTitle}
      title={title}
    />
  );
}
