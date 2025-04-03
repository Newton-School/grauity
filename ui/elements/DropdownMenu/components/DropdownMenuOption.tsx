import React, { useId } from 'react';

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
    optionRef: (el: HTMLButtonElement) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
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
        optionRef,
        onKeyDown,
    } = props;

    const id = useId();

    return (
        <StyledDropdownMenuOption
            role="option"
            ref={optionRef}
            aria-labelledby={`option-label-${id}`}
            aria-selected={!multiple ? selected : undefined}
            aria-checked={multiple ? selected : undefined}
            disabled={disabled}
            onClick={(e) => {
                e.preventDefault();
                if (disabled) {
                    return;
                }
                onClick(value);
            }}
            onKeyDown={(event) => {
                if (!disabled) {
                    onKeyDown(event);
                }
            }}
        >
            {leftIcon && (
                <Icon name={leftIcon} color="currentColor" size="20" />
            )}
            <StyledDropdownMenuOptionContent>
                <StyledDropdownMenuOptionLabel id={`option-label-${id}`}>
                    {label}
                </StyledDropdownMenuOptionLabel>
                <StyledDropdownMenuOptionDescription
                    $disabled={disabled}
                    id={`option-description-${id}`}
                >
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
