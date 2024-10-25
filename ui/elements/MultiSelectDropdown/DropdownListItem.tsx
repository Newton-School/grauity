import React, { useId } from 'react';

import { Icon } from '../Icon';
import {
    StyledDropdownItemCheckbox,
    StyledDropdownItemText,
    StyledDropdownListItem,
} from './MultiSelectDropdown.styles';
import { DropdownListItemProps } from './types';

const DropdownListItem = ({
    displayText,
    onClickFn,
    isSelected,
    autoFocus,
}: DropdownListItemProps) => {
    const id = useId();

    return (
        <StyledDropdownListItem
            onClick={onClickFn}
            role="option"
            tabIndex={0}
            aria-selected={isSelected}
            aria-labelledby={`multi-select-dropdown-listitem-label-${id}`}
            autoFocus={autoFocus}
        >
            <StyledDropdownItemCheckbox>
                <Icon
                    name={isSelected ? 'check-square-filled' : 'square'}
                    color={
                        isSelected
                            ? 'var(--text-brand, #0673F9)'
                            : 'var(--text-disabled, #8C95A6)'
                    }
                />
            </StyledDropdownItemCheckbox>
            <StyledDropdownItemText
                $selected={isSelected}
                id={`multi-select-dropdown-listitem-label-${id}`}
            >
                <span>{displayText}</span>
            </StyledDropdownItemText>
        </StyledDropdownListItem>
    );
};

export default DropdownListItem;
