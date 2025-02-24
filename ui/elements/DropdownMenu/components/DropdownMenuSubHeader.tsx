import React from 'react';

import { StyledDropdownMenuSubHeader } from '../DropdownMenu.styles';
import { BaseItemSubHeaderProps } from '../types';

const DropdownMenuSubHeader = (props: BaseItemSubHeaderProps) => {
    const { title } = props;

    if (!title) {
        return null;
    }

    return (
        <StyledDropdownMenuSubHeader tabIndex={0} aria-label={title}>
            {title}
        </StyledDropdownMenuSubHeader>
    );
};

export default DropdownMenuSubHeader;
