import { StoryblokLink } from '../types';

type UseStoryblokLinkProps = {
  link: StoryblokLink;
};

export function useStoryblokLink({ link }: UseStoryblokLinkProps) {
  if (link.story && link.linktype === 'story') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return link.story.url;
  }

  return '';
}
