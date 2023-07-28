// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Statistic from './Statistic';
import Space from "../Space/Space";

const meta: Meta<typeof Statistic> = {
  component: Statistic,
};

export default meta;

type Story = StoryObj<typeof Statistic>;


export const Default: Story = {
  args: {
    label: "Всего",
    text: "0 человек",
    icon: "time"
  },
  render: (args) => (
      <Statistic {...args} />
  )
};


export const Collection: Story = {
  render: (args) => (
      <Space>
        <Statistic label="Всего" text="0 человек" icon="time" />
        <Statistic label="Активные" text="0 человек" icon="time" />
        <Statistic label="Новые" text="0 человек" icon="time" />
        <Statistic label="В группах" text="1245 человек" icon="time" />
      </Space>
  )
};
