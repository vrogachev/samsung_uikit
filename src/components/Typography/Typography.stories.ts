
// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
    component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
    args: {
        children: '2323232323',
        tag: "h1"
    },
};
