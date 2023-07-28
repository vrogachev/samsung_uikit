// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Default button',
    theme: 'default',
    size: 'large',
    loading: true,
    icon: "category"
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary button',
    theme: 'primary'
  },
};

export const Accent: Story = {
  args: {
    label: 'Accent button',
    theme: 'accent'
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger button',
    theme: 'danger'
  },
};

export const Link: Story = {
  args: {
    label: 'Link button',
    theme: 'link'
  },
};

export const Text: Story = {
  args: {
    label: 'Text button',
    theme: 'text'
  },
};