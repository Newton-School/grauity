import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';

import { useDisableBodyScroll } from '../../../hooks';
import { StyledDisableBodyScroll } from './DisableBodyScroll.styles';
import { DisableBodyScrollProps } from './types';

const DisableBodyScroll = forwardRef<HTMLDivElement, DisableBodyScrollProps>(
    (props, ref) => {
        const { children, enabled = true } = props;

        useDisableBodyScroll(enabled);

        return ReactDOM.createPortal(
            <StyledDisableBodyScroll ref={ref} $enabled={enabled}>
                {children}
            </StyledDisableBodyScroll>,
            document.body
        );
    }
);

export default DisableBodyScroll;
