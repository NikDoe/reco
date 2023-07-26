import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit quidem molestiae aut! Vero deleniti ipsa veniam
                non molestiae magni minus, in autem possimus voluptate,
                porro excepturi culpa explicabo illum quisquam.
            </p>
    }
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit quidem molestiae aut! Vero deleniti ipsa veniam
                non molestiae magni minus, in autem possimus voluptate,
                porro excepturi culpa explicabo illum quisquam.
            </p>
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];