import React, { ReactElement, ReactNode } from 'react';

export type ContentPageProps = {
  body: ReactNode;
  // footer?: ReactNode;
  // header?: ReactNode;
};

export function ContentPage({ body /* header, footer */ }: ContentPageProps): ReactElement {
  return (
    <>
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
    </>
  );
}
