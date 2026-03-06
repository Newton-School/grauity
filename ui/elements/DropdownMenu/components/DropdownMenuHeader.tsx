import React from 'react';

import {
    StyledDropdownMenuHeader,
    StyledDropdownMenuHeaderSubtext,
    StyledDropdownMenuHeaderTitle,
} from '../DropdownMenu.styles';
import { DropdownMenuHeaderProps } from '../types';

const DropdownMenuHeader = ({
    showHeader,
    overline,
    title,
    subtext,
    customHeader,
}: DropdownMenuHeaderProps) => {
    if (customHeader) {
        return <>{customHeader}</>;
    }

    if (!showHeader || (!title && !overline && !subtext)) {
        return null;
    }

    return (
        <StyledDropdownMenuHeader>
            {overline && (
                <StyledDropdownMenuHeaderSubtext>
                    {overline}
                </StyledDropdownMenuHeaderSubtext>
            )}
            {title && (
                <StyledDropdownMenuHeaderTitle>
                    {title}
                </StyledDropdownMenuHeaderTitle>
            )}
            {subtext && (
                <StyledDropdownMenuHeaderSubtext>
                    {subtext}
                </StyledDropdownMenuHeaderSubtext>
            )}
        </StyledDropdownMenuHeader>
    );
};

export default DropdownMenuHeader;
