
// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Dialog from "./Dialog";

const meta: Meta<typeof Dialog> = {
    component: Dialog,
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
    args: {
        isOpened: true,
        title: 'Удалить группу?',
        description: 'После удаления, вы не сможете отменить это действие'
    }
};
