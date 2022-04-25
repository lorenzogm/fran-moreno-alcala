import { RenderPage, Story, useStoryblok } from '@ring/cms-storyblok';
import { ReactElement } from 'react';

const resolveRelations = ['GlobalReference.reference'];

type CatchAllPageProps = {
  locale: string;
  story: Story;
};

export function CatchAllPage({ story, locale }: CatchAllPageProps): ReactElement {
  const enableBridge = true; // load the storyblok bridge everywhere
  // use the preview variable to enable the bridge only in preview mode
  // const enableBridge = preview;
  const { content } = useStoryblok({
    story,
    preview: enableBridge,
    locale,
    resolveRelations,
  });

  return (
    // <LayoutDefault preview={false}>
    <RenderPage content={content} />
    // </LayoutDefault>
  );
}
