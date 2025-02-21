import { StoryFn } from '@storybook/react';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Button from 'ui/elements/Button';
import Overlay, { OverlayProps } from 'ui/elements/Overlay';

export default {
    title: 'Elements/Overlay',
    component: Overlay,
    decorators: [
        (Story: StoryFn) => (
            <AnimatePresence>
                <div style={{ width: '1000px', height: '1000px' }}>
                    <Story />
                </div>
            </AnimatePresence>
        ),
    ],
    parameters: {
        docs: {
            source: {
                code: `
<div>
    <Button onClick={() => setIsOpen(true)}>Trigger</Button>
    <Overlay
        onOverlayClick: () => setIsOpen(false),
        shouldDisableScroll: true,
        shouldTintOverlay: true,
        shouldBlurOverlay: false,
        overlayColor: 'var(--alpha-overlay, rgba(22, 25, 29, 0.8))',
        shouldCenterContent: true,
        animationDuration: 0.3,
        position: { top: 0, left: 0 },
        shouldFocusOnFirstElement: true,
    >
        Overlay Content Here!!!
    </Overlay>
</div>
            `,
            },
        },
    },
};

const Template = (args: OverlayProps) => {
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <Button ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
                Trigger
            </Button>
            {isOpen && (
                <Overlay
                    {...args}
                    shouldDisableScroll={isOpen}
                    onOverlayClick={() => setIsOpen(false)}
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
                        Content inside Overlay
                        <Button size="small" onClick={() => setIsOpen(false)}>
                            Close
                        </Button>
                    </div>
                </Overlay>
            )}
        </>
    );
};

const defaultArgs: OverlayProps = {
    onOverlayClick: () => {},
    shouldDisableScroll: true,
    shouldTintOverlay: true,
    shouldBlurOverlay: false,
    overlayColor: 'var(--alpha-overlay, rgba(22, 25, 29, 0.8))',
    shouldCenterContent: false,
    animationDuration: 0.3,
    position: { top: 100, left: 500 },
    shouldFocusOnFirstElement: true,
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
