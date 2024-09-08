import React, { useState } from 'react';
import Button from '../../ui/elements/Button';

/**
 * This decorator is used to wrap stories with a container that toggles visibility
 * of the story.
 *
 * This is useful for components like Modal that need to be toggled on and off
 * in the Storybook UI.
 *
 * FIXME: This decorator opens the Modal as expected, but it doesn't close it.
 */
const withVisibilityToggle = (Story, context) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Open</Button>
            {isOpen && <Story showCloseButton={false} />}
        </div>
    );
};

export default withVisibilityToggle;
