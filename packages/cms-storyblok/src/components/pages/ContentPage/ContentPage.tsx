import { ContentPage as ContentPageUI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

import { ContentPageStoryblok } from '../../../types';
import { RenderSection } from '../../../utils/RenderSection';

type ContentPageProps = ContentPageStoryblok;

export function ContentPage({ body /* footer, header */ }: ContentPageProps): ReactElement {
  return (
    <ContentPageUI
      body={body ? body.map((content) => <RenderSection key={content._uid} content={content} />) : null}
      // footer={footer ? footer.map((content) => <RenderSection content={content} />) : null}
      // header={header ? header.map((content) => <RenderSection content={content} />) : null}
    />
  );
}
