import React from 'react';
import { NSIcon } from 'ui/index';

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
                <NSIcon name={leftIcon} color="currentColor" size="20" />
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
                <NSIcon name={rightIcon} color="currentColor" size="20" />
            )}
            {!multiple && selected && (
                <NSIcon
                    name="check"
                    color="var(--text-emphasis-brand-default, #0673F9)"
                    size="20"
                />
            )}
            {multiple && (
                <NSIcon
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
