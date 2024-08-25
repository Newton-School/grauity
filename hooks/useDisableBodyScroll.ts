/* eslint-disable no-undef */
import { useEffect } from 'react';

/**
 * Hook that makes the body scrollable or not scrollable.
 * Useful for modals, dialogs, etc.
 *
 * FIXME: Using this hook with Modal component makes the
 * body not scrollable. This causes this change in the
 * Modal story docs page as well, and making docs page not scrollable.
 */
const useDisableBodyScroll = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && document?.body) {
            document.body.style.paddingRight = '15px';
            document.body.style.overflow = 'hidden';
        }

        return () => {
            if (typeof window !== 'undefined' && document?.body) {
                document.body.style.paddingRight = 'unset';
                document.body.style.overflow = 'auto';
            }
        };
    }, []);
};

export default useDisableBodyScroll;
