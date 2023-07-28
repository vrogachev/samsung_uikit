// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Empty from './Empty';

const meta: Meta<typeof Empty> = {
  component: Empty,
};

export default meta;

type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  args: {
    title: "У вас нет активных групп",
    description: "Создайте первую группу нажав на кнопку \n“Новая группа” в провом верхнем углу"
  },
};
