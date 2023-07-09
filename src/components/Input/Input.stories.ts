// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

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
