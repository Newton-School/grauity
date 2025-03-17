import debounce from 'lodash/debounce';
import React, { forwardRef, useCallback, useRef, useState } from 'react';

import Button from '../Button';
import { Icon } from '../Icon';
import PopOver from '../PopOver';
import {
    StyledDropdownSearchContainer,
    StyledDropdownSearchInput,
    StyledSelectDropdownContainer,
    StyledSelectDropdownItem,
    StyledSelectDropdownList,
    StyledSelectDropdownTriggerWrapper,
    StyledSelectDropdownWrapper,
} from './SelectDropdown.styles';
import { DropdownOption, SelectDropdownProps } from './types';

/**
 * @deprecated This component is deprecated and will be removed in future releases.
 * - Use the `Dropdown` component instead.
 * @see {@link https://grauity.newtonschool.co/?path=/docs/elements-form-dropdown--docs}
 */
const SelectDropdown = forwardRef<HTMLSelectElement, SelectDropdownProps>(
    (props, ref) => {
        const {
            options = new Set<DropdownOption>([]),
            icon,
            text = 'Select',
            shouldEnableSearch = true,
            searchPlaceholder = 'Search',
            onSearchInputChange = () => {},
            onChange = () => {},
            noOptionsText = '-- No options available --',
            triggerComponent,
            width,
        } = props;

        const [isOpened, setIsOpened] = useState(false);
        const [searchInput, setSearchInput] = useState('');

        const triggerRef = useRef();
        const dropdownRef = useRef();

        const debouncedSearchCallback = useCallback(
            debounce((value: string) => {
                onSearchInputChange(value);
            }, 500),
            []
        );

        return (
            <StyledSelectDropdownWrapper ref={ref} role="combobox">
                {triggerComponent && (
                    <StyledSelectDropdownTriggerWrapper
                        ref={triggerRef}
                        onClick={() => setIsOpened(true)}
                    >
                        {triggerComponent}
                    </StyledSelectDropdownTriggerWrapper>
                )}
                {!triggerComponent && (
                    <Button
                        ref={triggerRef}
                        icon={icon}
                        onClick={() => setIsOpened(true)}
                    >
                        {text}
                    </Button>
                )}
                <PopOver
                    triggerRef={triggerRef}
                    isOpen={isOpened}
                    direction="bottom"
                    minimumOffset={{ top: 10, left: 10, right: 10, bottom: 10 }}
                    onClose={() => setIsOpened(false)}
                    shouldCloseOnOutsideClick
                    disableBackgroundScroll
                >
                    <StyledSelectDropdownContainer
                        ref={dropdownRef}
                        $width={width}
                    >
                        {shouldEnableSearch && (
                            <StyledDropdownSearchContainer>
                                <Icon name="search" />
                                <StyledDropdownSearchInput
                                    role="searchbox"
                                    placeholder={searchPlaceholder}
                                    value={searchInput}
                                    onChange={(e) => {
                                        debouncedSearchCallback(e.target.value);
                                        setSearchInput(e.target.value);
                                    }}
                                />
                            </StyledDropdownSearchContainer>
                        )}
                        <StyledSelectDropdownList>
                            {options.size === 0 && (
                                <StyledSelectDropdownItem $disabled>
                                    {noOptionsText}
                                </StyledSelectDropdownItem>
                            )}
                            {Array.from(options).map((option) => (
                                <StyledSelectDropdownItem
                                    key={option.id}
                                    onClick={() => {
                                        setIsOpened(false);
                                        onChange(option);
                                    }}
                                    role="option"
                                >
                                    <span>{option.label}</span>
                                </StyledSelectDropdownItem>
                            ))}
                        </StyledSelectDropdownList>
                    </StyledSelectDropdownContainer>
                </PopOver>
            </StyledSelectDropdownWrapper>
        );
    }
);

export default SelectDropdown;
