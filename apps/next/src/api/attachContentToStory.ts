import { SectionsProps, Story } from '@ring/cms-storyblok';

type AttachContentToStory = {
  content: Story['content'];
  sections: SectionsProps;
};

export function attachContentToStory({ content, sections }: AttachContentToStory) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...content,
    main: content.main.map((section: SectionsProps) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return { ...section, ...sections[section.component] };
    }),
  };
}
