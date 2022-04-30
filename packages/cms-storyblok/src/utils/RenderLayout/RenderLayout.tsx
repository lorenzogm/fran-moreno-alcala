import React, { ReactElement, ReactNode } from 'react';
import StoryblokReact from 'storyblok-react';

import { DefaultLayout } from '../../layouts/DefaultLayout';
import { DefaultLayoutStoryblok } from '../../types';

export type Layouts = DefaultLayoutStoryblok & { name: string };

const Layouts = {
  DefaultLayout,
};

type RenderLayoutProps = {
  layout: Layouts;
  children: ReactNode;
};

export function RenderLayout({ layout, children }: RenderLayoutProps): ReactElement {
  if (layout === undefined) {
    return <p>Please add a layout</p>;
  }

  // @ts-expect-error instead of "content.component" (as defined by Storyblok), it's "content.name"
  const Layout = Layouts[layout.name || 'DefaultLayout'];

  return (
    <StoryblokReact
      key={layout._uid}
      // eslint-disable-next-line no-underscore-dangle
      content={layout}
    >
      <Layout
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...layout}
      >
        {children}
      </Layout>
    </StoryblokReact>
  );
}
