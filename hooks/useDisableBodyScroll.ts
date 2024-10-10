/* eslint-disable no-undef */
import { useEffect } from 'react';

/**
 * Hook that makes the body scrollable or not scrollable.
 * Useful for modals, dialogs, etc.
 *
 * @param {boolean} Overlay - Determines if the body should be scrollable or not. Default is `true`
 */
const useDisableBodyScroll = (Overlay: boolean = true) => {
    useEffect(() => {
        if (Overlay) {
            if (typeof window !== 'undefined' && document?.body) {
                // TODO: This is a fix for the sudden content shift towards the right
                // which happens when the body is set to overflow hidden (scrollbars are removed).
                // But, normally we do not show the scrollbar in `newton-web`.
                // document.body.style.paddingRight = '15px';

                document.body.style.overflow = 'hidden';
            }
        }

        return () => {
            if (Overlay) {
                if (typeof window !== 'undefined' && document?.body) {
                    // document.body.style.paddingRight = 'unset';
                    document.body.style.overflow = 'auto';
                }
            }
        };
    }, [Overlay]);
};

export default useDisableBodyScroll;
