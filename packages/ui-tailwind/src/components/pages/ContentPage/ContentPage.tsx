import React, { ReactElement, ReactNode } from 'react';

import { Theme } from '../../../utils';

export type ContentPageProps = {
  body: ReactNode;
  // footer?: ReactNode;
  // header?: ReactNode;
};

export function ContentPage({ body /* header, footer */ }: ContentPageProps): ReactElement {
  return (
    <Theme dataTheme="light">
      {/* {header && (
        <header>
          {header}
        </header>
      )} */}
      {body && <main>{body}</main>}
      {/* {footer && (
        <footer>
          {footer}
        </footer>
      )} */}
    </Theme>
  );
}
