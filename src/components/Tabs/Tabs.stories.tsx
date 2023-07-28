// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
      <Tabs
          tabs={[
            { label: "Активные", content: () => <>Активные</> },
            { label: "Новые", content: () => <>Новые</> },
          ]}
      />
  )
};
