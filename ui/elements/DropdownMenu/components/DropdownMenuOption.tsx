import React from 'react';

import { Icon } from '../../Icon';
import {
    StyledDropdownMenuOption,
    StyledDropdownMenuOptionContent,
    StyledDropdownMenuOptionDescription,
    StyledDropdownMenuOptionLabel,
} from '../DropdownMenu.styles';
import { BaseItemOptionProps, OptionValue } from '../types';

interface DropdownMenuOptionProps extends BaseItemOptionProps {
    multiple: boolean;
    selected: boolean;
    onClick: (value: OptionValue) => void;
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
            role="option"
            aria-selected={selected}
            disabled={disabled}
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
                <StyledDropdownMenuOptionLabel>
                    {label}
                </StyledDropdownMenuOptionLabel>
                <StyledDropdownMenuOptionDescription $disabled={disabled}>
                    {description}
                </StyledDropdownMenuOptionDescription>
            </StyledDropdownMenuOptionContent>
            {rightIcon && (
                <Icon name={rightIcon} color="currentColor" size="20" />
            )}
            {!multiple && selected && (
                <Icon
                    name="check"
                    color="var(--text-emphasis-brand-default, #0673F9)"
                    size="20"
                />
            )}
            {multiple && (
                <Icon
                    name={selected ? 'check-square-filled' : 'square'}
                    color={
                        selected
                            ? 'var(--text-emphasis-brand-default, #0673F9)'
                            : 'currentColor'
                    }
                    size="20"
                />
            )}
        </StyledDropdownMenuOption>
    );
};

export default DropdownMenuOption;
