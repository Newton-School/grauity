import React from 'react';

import {
    StyledDropdownMenuHeader,
    StyledDropdownMenuHeaderSubtext,
    StyledDropdownMenuHeaderTitle,
} from '../DropdownMenu.styles';

interface DropdownMenuHeaderProps {
    showHeader: boolean;
    overline: string;
    title: string;
    subtext: string;
    customHeader?: React.ReactNode;
    className?: string;
}

const DropdownMenuHeader = ({
    showHeader,
    overline,
    title,
    subtext,
    customHeader,
    className = '',
}: DropdownMenuHeaderProps) => {
    if (customHeader) {
        return <>{customHeader}</>;
    }

    if (!showHeader || (!title && !overline && !subtext)) {
        return null;
    }

    return (
        <StyledDropdownMenuHeader className={className} data-testid="dropdown-header">
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
