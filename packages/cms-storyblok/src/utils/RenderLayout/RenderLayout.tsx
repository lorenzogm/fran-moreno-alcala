import React, { ReactElement, ReactNode } from 'react';
import StoryblokReact from 'storyblok-react';

import { DefaultLayout } from '../../layouts/DefaultLayout';
import { DefaultLayoutStoryblok } from '../../types';

export type Layouts = DefaultLayoutStoryblok & { name: string };

const Layouts = {
  DefaultLayout,
};

type RenderLayoutProps = {
  content: Layouts;
  children: ReactNode;
};

export function RenderLayout({ content, children }: RenderLayoutProps): ReactElement {
  // @ts-expect-error instead of "content.component" (as defined by Storyblok), it's "content.name"
  const Layout = Layouts[content.name || 'DefaultLayout'];

  return (
    <StoryblokReact
      key={content._uid}
      // eslint-disable-next-line no-underscore-dangle
      content={content}
    >
      <Layout
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...content}
      >
        {children}
      </Layout>
    </StoryblokReact>
  );
}
