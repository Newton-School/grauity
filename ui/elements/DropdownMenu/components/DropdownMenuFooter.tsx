import React from 'react';
import { NSButton } from 'ui/index';

import { StyledDropdownMenuFooter } from '../DropdownMenu.styles';

interface DropdownMenuFooterProps {
    multiple: boolean;
    showActionButtons: boolean;
    showClearAllButton: boolean;
    clearAllButtonText: string;
    applyButtonText: string;
    handleClearAll: () => void;
    handleApply: () => void;
}

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
            <NSButton
                size="small"
                variant="primary"
                onClick={() => handleApply()}
            >
                {applyButtonText}
            </NSButton>
            {showClearAllButton && multiple && (
                <NSButton
                    size="small"
                    variant="secondary-outlined"
                    onClick={handleClearAll}
                >
                    {clearAllButtonText}
                </NSButton>
            )}
        </StyledDropdownMenuFooter>
    );
};

export default DropdownMenuFooter;
