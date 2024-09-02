import React, { useEffect } from 'react';
import { StoryContext, StoryFn } from '@storybook/react';

/**
 * This decorator is used to wrap stories with a container which enables body scroll.
 * This is useful for components using hook `useDisableBodyScroll` that disables body scroll.
 */
const withEnableBodyScroll = (Story: StoryFn, context: StoryContext) => {
    useEffect(() => {
        if (typeof window !== 'undefined' && document?.body) {
            // TODO: This is a fix for docs page not scrollable,
            // when hook `useDisableBodyScroll` is used.
            document.body.style.overflow = 'auto';
        }
    }, []);

    return <Story />;
};

export default withEnableBodyScroll;
