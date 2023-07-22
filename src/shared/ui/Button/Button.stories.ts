import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR
    },
};

export const Outlined: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINED
    },
};