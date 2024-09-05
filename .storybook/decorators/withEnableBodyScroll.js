import React, { useEffect } from 'react';

/**
 * This decorator is used to wrap stories with a container which enables body scroll.
 * This is useful for components using hook `useDisableBodyScroll` that disables body scroll.
 */
const withEnableBodyScroll = (Story, context) => {
    useEffect(() => {
        if (typeof window !== 'undefined' && document?.body) {
            document.body.style.overflow = 'auto';
        }
    }, []);

    return <Story />;
};

export default withEnableBodyScroll;
