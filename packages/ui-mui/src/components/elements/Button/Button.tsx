import React from 'react';

export type ButtonProps = {
  children: string;
};

export function Button({ children }: ButtonProps) {
  return <button type="button">{children}</button>;
}
