import { StoryFn } from '@storybook/react';
import React from 'react';
import Button from 'ui/elements/Button';
import Overlay, { OverlayProps } from 'ui/elements/Overlay';

export default {
    title: 'Elements/Overlay',
    component: Overlay,
    decorators: [
        (Story: StoryFn) => (
            <div style={{ width: '1000px', height: '1000px' }}>
                <Story />
            </div>
        ),
    ],
};

const Template = (args: OverlayProps) => {
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <Button ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
                Trigger
            </Button>
            <Overlay {...args} shouldDisableScroll={isOpen}>
                {isOpen && (
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
                        Content inside Overlay
                        <Button size="small" onClick={() => setIsOpen(false)}>
                            Close
                        </Button>
                    </div>
                )}
            </Overlay>
        </>
    );
};

const defaultArgs: OverlayProps = {
    enabled: true,
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
