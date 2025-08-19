import { StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import Button from 'ui/elements/Button';
import PopOver, { PopOverProps } from 'ui/elements/PopOver';
import SelectDropdown from 'ui/elements/SelectDropdown';

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
                triggerRef={triggerRef}
                onClose={() => setIsOpen(false)}
            >
                <div
                    style={{
                        width: '250px',
                        height: '100px',
                        padding: '10px',
                        border: '2px solid var(--border-subtle-primary-default, #e1e5ea)',
                        backgroundColor: 'white',
                        overflow: 'auto',
                    }}
                >
                    <p>This is some popover content.</p>
                    <p>This component is for demonstration purpose only.</p>
                    <SelectDropdown
                        options={
                            new Set([
                                { id: 1, label: 'Item 1' },
                                { id: 2, label: 'Item 2' },
                            ])
                        }
                    />
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
    disableBackgroundScroll: true,
    position: null,
    shouldFocusOnFirstElement: true,
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
