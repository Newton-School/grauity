import React from 'react';

/**
 * This decorator is used to wrap stories with an container which forces the
 * component to be rendered inline.
 *
 * This is useful for components like Modal whose position is fixed or absolute
 * that need to be rendered inline with a specific height and width
 * in the Storybook UI.
 *
 * It makes the use of `transform: translateZ(0)` to create a new stacking context
 * and prevent the component from being clipped by its parent container.
 */
const withInlineContainer = (Story, context) => (
    <div style={{ transform: 'translateZ(0)', height: '600px', width: '100%' }}>
        <Story />
    </div>
);

export default withInlineContainer;
