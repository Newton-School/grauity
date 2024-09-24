import { StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import Button from 'ui/elements/Button';
import PopOver, { PopOverProps } from 'ui/elements/PopOver';

export default {
    title: 'Elements/PopOver',
    component: PopOver,
    decorators: [
        (Story: StoryFn) => (
            <div style={{ minHeight: '500px' }}>
                <Story />
            </div>
        ),
    ],
};

const Template = (args: PopOverProps) => {
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
                Trigger
            </Button>
            <PopOver
                {...args}
                isOpen={isOpen}
                triggerRef={
                    triggerRef as any as React.MutableRefObject<HTMLDivElement>
                }
                onClose={() => setIsOpen(false)}
            >
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
                    <p>This is some popover content.</p>
                    <p>This component is for demonstration purpose only.</p>
                </div>
            </PopOver>
        </>
    );
};

const defaultArgs: PopOverProps = {
    isOpen: false,
    triggerRef: null,
    direction: 'bottom',
    autoAdjust: true,
    parentRef: null,
    minimumOffset: { top: 0, left: 10, right: 0, bottom: 0 },
    shouldCloseOnOutsideClick: true,
    onClose: () => {},
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
