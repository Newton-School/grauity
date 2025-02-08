import React from 'react';
import { NSButton } from 'ui/index';

import { StyledDropdownMenuFooter } from '../DropdownMenu.styles';

interface DropdownMenuFooterProps {
    multiple: boolean;
    showActionButtons: boolean;
    showClearAllButton: boolean;
    clearAllButtonText: string;
    applyButtonText: string;
    onClearAll: () => void;
    onApply: () => void;
}

const DropdownMenuFooter = ({
    multiple,
    showActionButtons,
    showClearAllButton,
    clearAllButtonText,
    applyButtonText,
    onClearAll,
    onApply,
}: DropdownMenuFooterProps) => {
    if (!showActionButtons) {
        return null;
    }

    return (
        <StyledDropdownMenuFooter>
            <NSButton size="small" variant="primary" onClick={() => onApply()}>
                {applyButtonText}
            </NSButton>
            {showClearAllButton && multiple && (
                <NSButton
                    size="small"
                    variant="secondary-outlined"
                    onClick={onClearAll}
                >
                    {clearAllButtonText}
                </NSButton>
            )}
        </StyledDropdownMenuFooter>
    );
};

export default DropdownMenuFooter;
