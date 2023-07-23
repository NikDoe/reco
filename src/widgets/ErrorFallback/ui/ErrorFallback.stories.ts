import type { Meta, StoryObj } from '@storybook/react';

import { ErrorFallback } from './ErrorFallback';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'widget/ErrorFallback',
    component: ErrorFallback,
    tags: ['autodocs'],
} satisfies Meta<typeof ErrorFallback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};