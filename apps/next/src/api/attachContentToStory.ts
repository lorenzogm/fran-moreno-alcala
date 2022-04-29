import { SectionsProps, Story } from '@ring/cms-storyblok';

type AttachContentToStory = {
  content: Story['content'];
  sections: SectionsProps;
};

export function attachContentToStory({ content, sections }: AttachContentToStory) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...content,
    sections: content.sections
      ? content.sections.map((section: SectionsProps) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return { ...section, ...sections[section.component] };
        })
      : null,
    // footer: content.footer
    //   ? content.footer.map((section: SectionsProps) => {
    //       // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    //       return { ...section, ...sections[section.component] };
    //     })
    //   : null,
    // header: content.header
    //   ? content.header.map((section: SectionsProps) => {
    //       // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    //       return { ...section, ...sections[section.component] };
    //     })
    //   : null,
  };
}
