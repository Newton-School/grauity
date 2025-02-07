import React from 'react';
import { Icon } from 'ui/elements/Icon';

import {
    StyledDropdownMenuOption,
    StyledDropdownMenuOptionContent,
    StyledDropdownMenuOptionDescription,
    StyledDropdownMenuOptionLabel,
} from '../DropdownMenu.styles';
import { BaseItemOptionProps } from '../types';

interface DropdownMenuOptionProps extends BaseItemOptionProps {
    multiple: boolean;
    selected: boolean;
    onClick: (value: string | number) => void;
}

const DropdownMenuOption = (props: DropdownMenuOptionProps) => {
    const {
        label,
        value,
        description,
        leftIcon,
        rightIcon,
        disabled,
        multiple,
        selected,
        onClick,
    } = props;

    return (
        <StyledDropdownMenuOption
            $disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            onClick={() => {
                if (disabled) {
                    return;
                }
                onClick(value);
            }}
        >
            {leftIcon && (
                <Icon name={leftIcon} color="currentColor" size="20" />
            )}
            <StyledDropdownMenuOptionContent>
                <StyledDropdownMenuOptionLabel $disabled={disabled}>
                    {label}
                </StyledDropdownMenuOptionLabel>
                <StyledDropdownMenuOptionDescription $disabled={disabled}>
                    {description}
                </StyledDropdownMenuOptionDescription>
            </StyledDropdownMenuOptionContent>
            {rightIcon && !multiple && !selected && (
                <Icon name={rightIcon} color="currentColor" size="20" />
            )}
            {!multiple && selected && (
                <Icon name="check" color="currentColor" size="20" />
            )}
            {multiple && (
                <Icon
                    name={selected ? 'check-square-filled' : 'square'}
                    color="currentColor"
                    size="20"
                />
            )}
        </StyledDropdownMenuOption>
    );
};

export default DropdownMenuOption;
