import { Meta, StoryObj } from '@storybook/react-webpack5';
import { expect, fn, userEvent, within } from 'storybook/test';
import Button from 'ui/elements/Button';

/**
 * Demonstrates Storybook 10 interaction testing on a grauity component.
 * Props used here were read from the Storybook MCP server's `get-documentation`
 * output for `elements-button`, not guessed.
 */
const meta: Meta<typeof Button> = {
    title: 'Elements/Button',
    component: Button,
    tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const InteractionTest: Story = {
    args: {
        variant: 'primary',
        color: 'brand',
        size: 'medium',
        children: 'Submit',
        onClick: fn(),
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button', { name: 'Submit' });

        await expect(button).toBeEnabled();
        await userEvent.click(button);
        await expect(args.onClick).toHaveBeenCalledTimes(1);
    },
};

export const DisabledDoesNotFire: Story = {
    args: {
        variant: 'primary',
        color: 'brand',
        size: 'medium',
        children: 'Disabled',
        disabled: true,
        onClick: fn(),
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button', { name: 'Disabled' });

        await expect(button).toBeDisabled();
        await userEvent.click(button);
        await expect(args.onClick).not.toHaveBeenCalled();
    },
};
