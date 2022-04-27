import React, { ReactElement, ReactNode } from 'react';

import { Theme } from '../../../utils';

export type ContentPageProps = {
  main: ReactNode;
  // footer?: ReactNode;
  // header?: ReactNode;
};

export function ContentPage({ main /* header, footer */ }: ContentPageProps): ReactElement {
  return (
    <Theme dataTheme="light">
      {/* {header && (
        <header>
          {header}
        </header>
      )} */}
      {main && <main>{main}</main>}
      {/* {footer && (
        <footer>
          {footer}
        </footer>
      )} */}
    </Theme>
  );
}
