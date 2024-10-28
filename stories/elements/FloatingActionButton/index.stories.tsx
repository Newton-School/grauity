import React from 'react';
import { IconButton } from 'ui/elements/Button';
import FloatingActionButton, {
    FloatingActionButtonProps,
} from 'ui/elements/FloatingActionButton';
import PopOver from 'ui/elements/PopOver';

export default {
    title: 'Elements/FloatingActionButton',
    component: FloatingActionButton,
};

const Template = (args: FloatingActionButtonProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const trigger = React.useRef<HTMLDivElement>(null);

    return (
        <>
            <FloatingActionButton
                {...args}
                onClick={(triggerRef) => {
                    if (isOpen) {
                        trigger.current = null;
                    } else {
                        trigger.current = triggerRef.current;
                    }
                    setIsOpen(!isOpen);
                }}
            >
                <IconButton icon="plus" />
            </FloatingActionButton>
            <PopOver
                triggerRef={trigger}
                isOpen={isOpen}
                direction="top"
                onClose={() => setIsOpen(false)}
                minimumOffset={{ right: 10, left: 10 }}
            >
                <div
                    style={{
                        width: '150px',
                        backgroundColor: 'white',
                        border: '1px solid black',
                    }}
                >
                    <p>Some content</p>
                    <p>The sample description here...</p>
                </div>
            </PopOver>
        </>
    );
};

const defaultArgs: FloatingActionButtonProps = {
    children: null,
    position: 'right',
    onClick: () => {},
    sideOffset: '10px',
    bottomOffset: '10px',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
