import { StoryFn } from '@storybook/react';
import React from 'react';
import Button from 'ui/elements/Button';
import DisableBodyScroll, {
    DisableBodyScrollProps,
} from 'ui/elements/DisableBodyScroll';

export default {
    title: 'Elements/DisableBodyScroll',
    component: DisableBodyScroll,
    decorators: [
        (Story: StoryFn) => (
            <div style={{ width: '1000px', height: '1000px' }}>
                <Story />
            </div>
        ),
    ],
};

const Template = (args: DisableBodyScrollProps) => {
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <Button ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
                Trigger
            </Button>
            <DisableBodyScroll {...args} enabled={isOpen}>
                <div
                    style={{
                        width: '250px',
                        height: '100px',
                        padding: '10px',
                        border: '2px solid var(--border)',
                        backgroundColor: 'white',
                        overflow: 'auto',
                    }}
                >
                    Content inside DisableBodyScroll
                    <Button size="small" onClick={() => setIsOpen(false)}>
                        Close
                    </Button>
                </div>
            </DisableBodyScroll>
        </>
    );
};

const defaultArgs: DisableBodyScrollProps = {
    enabled: true,
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
