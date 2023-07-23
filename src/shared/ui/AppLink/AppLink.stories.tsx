import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import SomeIcon from 'shared/assets/icons/darkTheme.svg';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.TEXT
    },
};

export const TextDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.TEXT
    },
};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];


export const Icon: Story = {
    args: {
        children: <SomeIcon />,
        theme: AppLinkTheme.ICON
    },
};

export const IconDark: Story = {
    args: {
        children: <SomeIcon />,
        theme: AppLinkTheme.ICON
    },
};
IconDark.decorators = [ThemeDecorator(Theme.DARK)];