import { ReactNode } from 'react';

export type ContentPageProps = {
  children: ReactNode;
};

export function ContentPage({ children }: ContentPageProps): ReactNode {
  return children;
}
