import React, { ReactNode } from 'react';

type DefaultLayoutProps = {
  children: ReactNode;
  footer: ReactNode;
  header: ReactNode;
};

export function DefaultLayout({ header, footer, children }: DefaultLayoutProps) {
  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </>
  );
}
