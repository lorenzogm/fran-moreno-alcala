import { GlobalConfigStoryblok, Storyblok } from '@ring/cms-storyblok';

type GetConfigProps = {
  locale?: string;
  preview: boolean;
};

export async function getConfig({ locale, preview }: GetConfigProps): Promise<GlobalConfigStoryblok> {
  const { data } = await Storyblok.get(`cdn/stories/_global/config`, {
    version: 'draft',
    language: locale,
    ...(preview ? { cv: Date.now() } : {}),
    resolve_links: 'url',
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data.story;
}
