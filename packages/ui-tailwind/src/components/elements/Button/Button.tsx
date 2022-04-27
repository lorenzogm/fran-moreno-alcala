import React from 'react';
import { Button as ButtonDaisyUI, ButtonProps as ButtonDaisyUIProps } from 'react-daisyui';

type ButtonProps = ButtonDaisyUIProps;

export function Button({ ...props }: ButtonProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ButtonDaisyUI {...props} />;
}
