import React from 'react';

import Button from '../../Button';
import { StyledDropdownMenuFooter } from '../DropdownMenu.styles';
import { DropdownMenuFooterProps } from '../types';

const DropdownMenuFooter = ({
    multiple,
    showActionButtons,
    showClearAllButton,
    clearAllButtonText,
    applyButtonText,
    handleClearAll,
    handleApply,
}: DropdownMenuFooterProps) => {
    if (!showActionButtons) {
        return null;
    }

    return (
        <StyledDropdownMenuFooter>
            <Button
                size="small"
                variant="primary"
                color="brand"
                onClick={() => handleApply()}
            >
                {applyButtonText}
            </Button>
            {showClearAllButton && multiple && (
                <Button
                    size="small"
                    variant="tertiary"
                    color="neutral"
                    onClick={handleClearAll}
                >
                    {clearAllButtonText}
                </Button>
            )}
        </StyledDropdownMenuFooter>
    );
};

export default DropdownMenuFooter;
