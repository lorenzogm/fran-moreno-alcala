import { DefaultLayout as DefaultLayoutUI, Theme } from '@ring/ui-tailwind';
import React, { ReactNode } from 'react';

import { DefaultLayoutStoryblok } from '../../types';
import { RenderSection } from '../../utils/RenderSection';

type DefaultLayoutProps = DefaultLayoutStoryblok & {
  children: ReactNode;
};

export function DefaultLayout({ children, content }: DefaultLayoutProps) {
  const footerSections = content.footer
    ? // @ts-expect-error TODO: sync sections with storyblok
      content.footer.map((section) => <RenderSection key={content._uid} content={section} />)
    : null;
  const headerSections = content.header
    ? // @ts-expect-error TODO: sync sections with storyblok
      content.header.map((section) => <RenderSection key={content._uid} content={section} />)
    : null;

  return (
    <Theme dataTheme="black">
      <DefaultLayoutUI footer={footerSections} header={headerSections}>
        {children}
      </DefaultLayoutUI>
    </Theme>
  );
}
