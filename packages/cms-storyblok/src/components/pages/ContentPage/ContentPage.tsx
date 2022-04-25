import { ContentPage as ContentPageUI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

import { ContentPageStoryblok } from '../../../types';
import { RenderFeature } from '../../../utils/RenderFeature';

type ContentPageProps = ContentPageStoryblok;

export function ContentPage({ body /* footer, header */ }: ContentPageProps): ReactElement {
  return (
    <ContentPageUI
      body={body ? body.map((content) => <RenderFeature key={content._uid} content={content} />) : null}
      // footer={footer ? footer.map((content) => <RenderFeature content={content} />) : null}
      // header={header ? header.map((content) => <RenderFeature content={content} />) : null}
    />
  );
}
