import { HeaderV2 as HeaderV2UI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

import type { HeaderV2Storyblok, StoryblokLink } from '../../../types';
import { parseLink } from '../../../utils/parseLink';

type HeaderV2Props = HeaderV2Storyblok;

export function HeaderV2({ title, navigation }: HeaderV2Props): ReactElement {
  const navigationParsed = navigation
    ? navigation.map((link) => {
        return {
          title: link.title,
          href: parseLink(link.link as StoryblokLink),
        };
      })
    : [];

  return <HeaderV2UI navigation={navigationParsed} title={title} />;
}
