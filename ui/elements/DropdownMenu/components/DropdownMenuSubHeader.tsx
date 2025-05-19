import React from 'react';

import { StyledDropdownMenuSubHeader } from '../DropdownMenu.styles';
import { BaseItemSubHeaderProps } from '../types';

interface DropdownMenuSubHeaderProps extends BaseItemSubHeaderProps {
    itemRef: (el: HTMLDivElement) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    className?: string;
}

const DropdownMenuSubHeader = ({
    title,
    itemRef,
    onKeyDown,
    className = '',
}: DropdownMenuSubHeaderProps) => {
    if (!title) {
        return null;
    }

    return (
        <StyledDropdownMenuSubHeader
            ref={itemRef}
            tabIndex={0}
            aria-label={title}
            onKeyDown={onKeyDown}
            className={className}
        >
            {title}
        </StyledDropdownMenuSubHeader>
    );
};

export default DropdownMenuSubHeader;
