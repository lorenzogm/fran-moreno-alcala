import {
  GlobalConfigStoryblok,
  RenderLayout,
  RenderPage,
  SectionsProps,
  Story,
  useStoryblok,
} from '@ring/cms-storyblok';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
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
    const { story, sections, config } = await getStory({ params, locale, preview });

    return {
      props: {
        config,
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

export default function CatchAllPage({ config, story, sections, locale }: CatchAllPageProps): ReactElement {
  const enableBridge = true; // load the storyblok bridge everywhere
  // use the preview variable to enable the bridge only in preview mode
  // const enableBridge = preview;
  const { content } = useStoryblok({
    story,
    preview: enableBridge,
    locale,
    resolveRelations: ['ContentPage.layout'],
  });

  const metaTitle = story.content.metaTitle || config.content.metaTitle;
  const metaDescription = story.content.metaDescription || config.content.metaDescription;
  const metaOpenGraphImage = story.content.metaOpenGraphImage?.filename || config.content.metaOpenGraphImage?.filename;

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta charSet="utf-8" />

        <title>{metaTitle}</title>
        <meta content={metaDescription} key="description" name="description" />

        {/* Open Graph */}
        <meta content={metaTitle} key="ogtitle" property="og:title" />
        <meta content={metaDescription} key="ogdesc" property="og:description" />
        <meta content={metaTitle} key="ogsitename" property="og:site_name" />
        <meta content={metaOpenGraphImage} key="ogimage" property="og:image" />
      </Head>

      <RenderLayout layout={content.layout}>
        <RenderPage content={attachContentToStory({ content, sections })} />
      </RenderLayout>
    </>
  );
}
