import { StoryblokLink } from '../types';

export function parseLink(link: StoryblokLink): string {
  if (link.linktype === 'url') {
    return link.url as string;
  }

  if (link.linktype === 'story') {
    return (link.story ? link.story.url : '/') as string;
  }

  return '/';
}
