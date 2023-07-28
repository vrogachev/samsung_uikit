// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    defaultValue: "значение",
    placeholder: "Введите значение",
    onChange: (event) => console.log('onChange', event),
    onBlur: (event) => console.log('onBlur', event),
    onFocus: (event) => console.log('onFocus', event),
    onFocusChange: (status) => console.log('status', status)
  },
};
