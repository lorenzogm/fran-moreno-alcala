import { StoryblokLink } from '../types';

export function parseLink(link: StoryblokLink): string {
  if (link.story && link.linktype === 'story') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return link.story.url;
  }

  return '';
}
