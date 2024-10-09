import React, { forwardRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { StyledDisableBodyScroll } from './DisableBodyScroll.styles';
import { DisableBodyScrollProps } from './types';

const DisableBodyScroll = forwardRef<HTMLDivElement, DisableBodyScrollProps>(
    (props, ref) => {
        const { children, enabled = true } = props;

        useEffect(() => {
            if (enabled) {
                document.body.style.overflow = 'hidden';
            }

            return () => {
                document.body.style.overflow = '';
            };
        }, [enabled]);

        if (!enabled) {
            return null;
        }

        return ReactDOM.createPortal(
            <StyledDisableBodyScroll ref={ref} $enabled={enabled}>
                {children}
            </StyledDisableBodyScroll>,
            document.body
        );
    }
);

export default DisableBodyScroll;
