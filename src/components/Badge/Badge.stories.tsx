// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';
import Icon from "../Icon/Icon";

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => (
    <Badge count={2}>
      <Icon name="bell" size="middle" />
    </Badge>
  )
};
