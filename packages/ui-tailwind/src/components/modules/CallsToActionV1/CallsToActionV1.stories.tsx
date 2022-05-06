import { Meta, Story } from '@storybook/react';
import React from 'react';

import type { CallsToActionV1Props } from './CallsToActionV1';
import { CallsToActionV1 as CallsToActionV1UI } from './CallsToActionV1';
import { CallsToActionV1Mock } from './CallsToActionV1.mocks';

export default {
  title: 'Modules/CallsToAction',
  component: CallsToActionV1UI,
} as Meta;

const Template: Story<CallsToActionV1Props> = (args) => <CallsToActionV1UI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const CallsToActionV1 = Template.bind({});
CallsToActionV1.args = CallsToActionV1Mock;
