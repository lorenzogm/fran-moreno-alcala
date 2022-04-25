import React, { ReactElement } from 'react';
import StoryblokReact from 'storyblok-react';

import { ContentPage } from '../../components/pages/ContentPage';
import { ContentPageStoryblok } from '../../types';
import { Placeholder } from '../Placeholder';

export type Components = ContentPageStoryblok;

const ComponentsConnectors = {
  ContentPage,
};

type RenderPageProps = {
  content: Components;
};

export function RenderPage({ content }: RenderPageProps): ReactElement {
  if (typeof content === 'undefined') {
    return <Placeholder componentName="content" />;
  }

  if (typeof ComponentsConnectors[content.component] === 'undefined') {
    return <Placeholder componentName={content.component} />;
  }

  const Component = ComponentsConnectors[content.component];

  return (
    <StoryblokReact
      key={content._uid}
      // eslint-disable-next-line no-underscore-dangle
      content={content}
    >
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...content}
      />
    </StoryblokReact>
  );
}
