import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import { StyledFloatingButton } from './FloatingActionButton.styles';
import { FloatingActionButtonProps } from './types';

const FloatingActionButton = (props: FloatingActionButtonProps) => {
    const {
        children,
        position = 'right',
        onClick = () => {},
        sideOffset = '10px',
        bottomOffset = '10px',
    } = props;

    const triggerRef = useRef<HTMLDivElement>(null);

    return ReactDOM.createPortal(
        <StyledFloatingButton
            ref={triggerRef}
            onClick={() => onClick(triggerRef)}
            $position={position}
            $sideOffset={sideOffset}
            $bottomOffset={bottomOffset}
        >
            {children}
        </StyledFloatingButton>,
        document.body
    );
};

export default FloatingActionButton;
