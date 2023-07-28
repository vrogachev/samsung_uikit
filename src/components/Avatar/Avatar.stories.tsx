// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;


export const Default: Story = {
  args: {
    firstName: "Владислав",
    lastName: "Рогачев",
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/32.jpg"
  },
  render: (args) => (
      <Avatar {...args} />
  )
};

