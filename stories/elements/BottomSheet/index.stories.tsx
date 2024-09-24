import React, { useState } from 'react';
import BottomSheet, { BottomSheetProps } from 'ui/elements/BottomSheet';
import Button from 'ui/elements/Button';

export default {
    title: 'Elements/BottomSheet',
    component: BottomSheet,
};

const Template = (args: BottomSheetProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ height: '150vh' }}>
            <Button onClick={() => setIsOpen(true)}>Open BottomSheet</Button>
            <BottomSheet
                {...args}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <div style={{ padding: '12px' }}>
                    BottomSheet Content Here...
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
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
    hideCloseButton: false,
    height: '50%',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
