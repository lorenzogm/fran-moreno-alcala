import {
  GlobalConfigStoryblok,
  RenderLayout,
  RenderPage,
  SectionsProps,
  Story,
  useStoryblok,
} from '@ring/cms-storyblok';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';

import { attachContentToStory } from '../api';
import { getStory } from '../api/getStory';

export const getStaticPaths: GetStaticPaths = () => {
  // const { data } = await Storyblok.get('cdn/links/')

  // const paths = []
  // Object.keys(data.links).forEach((linkKey) => {
  //   if (data.links[linkKey].is_folder) {
  //     return
  //   }

  //   // get array for slug because of catch all
  //   const { slug } = data.links[linkKey]

  //   const slugAsArray = slug.split('/')
  //   const [firstPath] = slugAsArray

  //   if (firstPath !== 'global') {
  //     // create additional languages
  //     if (locales) {
  //       locales.forEach((locale) => {
  //         paths.push({
  //           params: { slug: slug === 'home' ? ['/'] : slugAsArray },
  //           locale,
  //         })
  //       })
  //     } else {
  //       paths.push({
  //         params: { slug: slug === 'home' ? ['/'] : slugAsArray },
  //       })
  //     }
  //   }
  // })

  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ locale, locales, params, preview = false }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  try {
    const { story, sections } = await getStory({ params, locale, preview });

    return {
      props: {
        story,
        sections,
        preview,
        locale,
        locales,
      },
      revalidate: 10, // in seconds
    };
  } catch (e) {
    // console.error(e);
    return {
      notFound: true,
    };
  }
};

type CatchAllPageProps = {
  locale: string;
  story: Story;
  sections: SectionsProps;
  config: GlobalConfigStoryblok;
};

export default function CatchAllPage({ story, sections, locale }: CatchAllPageProps): ReactElement {
  const enableBridge = true; // load the storyblok bridge everywhere
  // use the preview variable to enable the bridge only in preview mode
  // const enableBridge = preview;
  const { content } = useStoryblok({
    story,
    preview: enableBridge,
    locale,
    resolveRelations: ['ContentPage.layout'],
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <RenderLayout layout={content.layout}>
      <RenderPage content={attachContentToStory({ content, sections })} />
    </RenderLayout>
  );
}
