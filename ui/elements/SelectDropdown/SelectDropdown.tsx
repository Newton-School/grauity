import debounce from 'lodash/debounce';
import React, { forwardRef, useCallback, useRef, useState } from 'react';

import { useClickAway } from '../../../hooks';
import { Icon } from '../Icon';
import {
    StyledDropdownSearchContainer,
    StyledDropdownSearchInput,
    StyledSelectDropdownButton,
    StyledSelectDropdownContainer,
    StyledSelectDropdownItem,
    StyledSelectDropdownList,
    StyledSelectDropdownWrapper,
} from './SelectDropdown.styles';
import { DropdownOption, SelectDropdownProps } from './types';

const SelectDropdown = forwardRef<HTMLSelectElement, SelectDropdownProps>(
    (props, ref) => {
        const {
            options = new Set<DropdownOption>([]),
            iconName,
            text = 'Select',
            shouldEnableSearch = true,
            searchPlaceholder = 'Search',
            onSearchInputChange = () => {},
            onChange = () => {},
            noOptionsText = '-- No options available --',
        } = props;

        const [isOpened, setIsOpened] = useState(false);
        const [searchInput, setSearchInput] = useState('');

        const dropdownRef = useRef();

        const debouncedSearchCallback = useCallback(
            debounce((value: string) => {
                onSearchInputChange(value);
            }, 500),
            []
        );

        useClickAway(dropdownRef, () => setIsOpened(false));

        return (
            <StyledSelectDropdownWrapper ref={ref} role="combobox">
                <StyledSelectDropdownButton onClick={() => setIsOpened(true)}>
                    {iconName && (
                        <Icon name={iconName} color="var(--text-action)" />
                    )}
                    {text}
                </StyledSelectDropdownButton>
                {isOpened && (
                    <StyledSelectDropdownContainer ref={dropdownRef}>
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
                                    {option.label}
                                </StyledSelectDropdownItem>
                            ))}
                        </StyledSelectDropdownList>
                    </StyledSelectDropdownContainer>
                )}
            </StyledSelectDropdownWrapper>
        );
    }
);

export default SelectDropdown;
