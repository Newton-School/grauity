import React, { useState } from 'react';
import BottomSheet, { BottomSheetProps } from 'ui/elements/BottomSheet';
import Button, { IconButton } from 'ui/elements/Button';

export default {
    title: 'Elements/BottomSheet',
    component: BottomSheet,
};

const Template = (args: BottomSheetProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Open BottomSheet</Button>
            <BottomSheet
                {...args}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <div style={{ padding: '0 12px' }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <span>These are my tasks for next week:</span>
                        <IconButton
                            icon="close"
                            variant="secondary-outlined"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                    <ul>
                        {Array.from({ length: 30 }).map((_, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <li key={index}>Task {index + 1}</li>
                        ))}
                    </ul>
                </div>
            </BottomSheet>
        </div>
    );
};

const defaultArgs: BottomSheetProps = {
    isOpen: false,
    onClose: () => {},
    fullScreen: false,
    closeOnBackdropClick: true,
    height: '50%',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
