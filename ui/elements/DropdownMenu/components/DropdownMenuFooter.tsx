import React from 'react';
import Button from 'ui/elements/Button';

import { StyledDropdownMenuFooter } from '../DropdownMenu.styles';
import { BaseItemOptionProps } from '../types';

interface DropdownMenuFooterProps {
    multiple: boolean;
    showActionButtons: boolean;
    showClearAllButton: boolean;
    clearAllButtonText: string;
    applyButtonText: string;
    onClearAll: () => void;
    onApply: (items: BaseItemOptionProps[] | BaseItemOptionProps) => void;
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
            <Button size="small" variant="primary" onClick={() => onApply([])}>
                {applyButtonText}
            </Button>
            {showClearAllButton && multiple && (
                <Button
                    size="small"
                    variant="secondary-outlined"
                    onClick={onClearAll}
                >
                    {clearAllButtonText}
                </Button>
            )}
        </StyledDropdownMenuFooter>
    );
};

export default DropdownMenuFooter;
