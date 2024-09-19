import React from 'react';

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
}: DropdownListItemProps) => (
    <StyledDropdownListItem onClick={onClickFn}>
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
        <StyledDropdownItemText $selected={isSelected}>
            {displayText}
        </StyledDropdownItemText>
    </StyledDropdownListItem>
);

export default DropdownListItem;
