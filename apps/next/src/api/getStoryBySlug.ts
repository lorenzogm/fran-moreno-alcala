import { Storyblok } from '@ring/cms-storyblok';

type GetStoryBySlugProps = {
  slug: string;
  locale?: string;
  preview: boolean;
  productSlug?: string;
};

export async function getStoryBySlug({ slug, locale, preview }: GetStoryBySlugProps) {
  const { data } = await Storyblok.get(`cdn/stories/${slug}`, {
    version: 'draft',
    language: locale,
    ...(preview ? { cv: Date.now() } : {}),
    resolve_links: 'url',
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data.story;
}
