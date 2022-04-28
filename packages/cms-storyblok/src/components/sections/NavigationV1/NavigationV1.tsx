import { NavigationV1 as NavigationV1UI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

import type { NavigationV1Storyblok, StoryblokLink } from '../../../types';
import { parseLink } from '../../../utils/parseLink';

type NavigationV1Props = NavigationV1Storyblok;

export function NavigationV1({ title, navigation }: NavigationV1Props): ReactElement {
  const navigationParsed = navigation
    ? navigation.map((link) => {
        return {
          title: link.title,
          href: parseLink(link.link as StoryblokLink),
        };
      })
    : [];

  return <NavigationV1UI navigation={navigationParsed} title={title} />;
}
