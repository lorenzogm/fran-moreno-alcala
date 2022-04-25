import { Storyblok } from '@ring/cms-storyblok';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale, locales, params, preview = false }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : 'home';

  try {
    const { data } = await Storyblok.get(`cdn/stories/${slug}`, {
      version: 'draft',
      language: locale,
      ...(preview ? { cv: Date.now() } : {}),
      resolve_links: 'url',
    });

    // const config = await getConfig({ locale, preview });
    // console.log({ config });

    return {
      props: {
        story: data ? data.story : false,
        // config,
        preview,
        locale,
        locales,
      },
      revalidate: 10, // in seconds
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
