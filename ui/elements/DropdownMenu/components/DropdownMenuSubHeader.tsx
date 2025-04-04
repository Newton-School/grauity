import React from 'react';

import { StyledDropdownMenuSubHeader } from '../DropdownMenu.styles';
import { BaseItemSubHeaderProps } from '../types';

interface DropdownMenuSubHeaderProps extends BaseItemSubHeaderProps {
    itemRef: (el: HTMLDivElement) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const DropdownMenuSubHeader = (props: DropdownMenuSubHeaderProps) => {
    const { title, itemRef, onKeyDown } = props;

    if (!title) {
        return null;
    }

    return (
        <StyledDropdownMenuSubHeader
            ref={itemRef}
            tabIndex={0}
            aria-label={title}
            onKeyDown={onKeyDown}
        >
            {title}
        </StyledDropdownMenuSubHeader>
    );
};

export default DropdownMenuSubHeader;
