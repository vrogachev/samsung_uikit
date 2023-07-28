// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    loading: false,
    searchable: true,
    placeholder: "Выберите значение",
    onChange: (option) => console.log(option),
    options: [
      { value: "1", label: "Фрукты" },
      { value: "2", label: "Ягоды" },
      { value: "3", label: "Овощи" },
    ]
  },
};
