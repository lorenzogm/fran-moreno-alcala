import { ContentPageStoryblok } from './generated';

export type Story = {
  _uid: string;
  content: ContentPageStoryblok['content'];
};

export type StoryblokLink =
  | {
      cached_url?: string;
      linktype?: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      linktype?: 'story';
      story: {
        url: string;
      };
    }
  | {
      url?: string;
      cached_url?: string;
      linktype?: 'asset' | 'url';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: 'email';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [k: string]: any;
    };
