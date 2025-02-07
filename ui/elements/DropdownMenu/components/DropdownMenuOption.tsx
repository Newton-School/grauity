import React from 'react';
import { Icon } from 'ui/elements/Icon';

import {
    StyledDropdownMenuOption,
    StyledDropdownMenuOptionContent,
    StyledDropdownMenuOptionDescription,
    StyledDropdownMenuOptionLabel,
} from '../DropdownMenu.styles';
import { BaseItemOptionProps } from '../types';

const DropdownMenuOption = (props: BaseItemOptionProps) => {
    const { label, description, leftIcon, rightIcon, disabled } = props;

    return (
        <StyledDropdownMenuOption
            $disabled={disabled}
            tabIndex={disabled ? -1 : 0}
        >
            {leftIcon && <Icon name={leftIcon} color="currentColor" />}
            <StyledDropdownMenuOptionContent>
                <StyledDropdownMenuOptionLabel $disabled={disabled}>
                    {label}
                </StyledDropdownMenuOptionLabel>
                <StyledDropdownMenuOptionDescription $disabled={disabled}>
                    {description}
                </StyledDropdownMenuOptionDescription>
            </StyledDropdownMenuOptionContent>
            {rightIcon && <Icon name={rightIcon} color="currentColor" />}
        </StyledDropdownMenuOption>
    );
};

export default DropdownMenuOption;
