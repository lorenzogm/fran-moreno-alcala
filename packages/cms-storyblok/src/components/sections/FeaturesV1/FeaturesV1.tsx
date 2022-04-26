import { FeaturesV1 as FeaturesV1UI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

import type { FeaturesV1Storyblok } from '../../../types';

type FeaturesV1Props = FeaturesV1Storyblok;

export function FeaturesV1({ pretitle, title, subtitle, features }: FeaturesV1Props): ReactElement {
  return <FeaturesV1UI features={features} pretitle={pretitle} subtitle={subtitle} title={title} />;
}
