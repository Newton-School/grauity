import debounce from 'lodash/debounce';
import React, {
    forwardRef,
    useCallback,
    useEffect,
    useId,
    useRef,
    useState,
} from 'react';

import { useClickAway } from '../../../hooks';
import { Icon } from '../Icon';
import PopOver from '../PopOver';
import DropdownListItem from './DropdownListItem';
import {
    StyledApplyButton,
    StyledDropdownContainer,
    StyledDropdownHeader,
    StyledDropdownHeaderTitle,
    StyledDropdownList,
    StyledDropdownSearchContainer,
    StyledDropdownSearchInput,
    StyledDropdownTriggerWrapper,
    StyledDropdownWrapper,
} from './MultiSelectDropdown.styles';
import { DropdownOption, MultiSelectDropdownProps } from './types';

/**
 * @deprecated This component is deprecated and will be removed in future releases.
 * - Use the `DropdownMenu` component instead.
 * @see {@link https://grauity.newtonschool.co/?path=/docs/elements-dropdownmenu--docs}
 */
const MultiSelectDropdown = forwardRef<
    HTMLSelectElement,
    MultiSelectDropdownProps
>((props, ref) => {
    const {
        noOptionSelctedText = 'Select',
        options = new Set([]),
        shouldEnableSearch = true,
        onSearchInputChange = () => {},
        searchPlaceholder = 'Search',
        shouldEnableAllSelected = true,
        defaultAllSelected = false,
        allOptionText = 'All',
        onOptionsChange = () => {},
        triggerComponent,
    } = props;

    const [isOpened, setIsOpened] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [allOptionsSelected, setAllOptionsSelected] =
        useState(defaultAllSelected);
    const [selectedOptionsIds, setSelectedOptionsIds] = useState<
        Record<string, boolean>
    >({});

    const triggerRef = useRef<any>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const clickOnOption = (option: DropdownOption) => {
        const newSelectedOptionsIds = {
            ...selectedOptionsIds,
            [option.id]: !selectedOptionsIds[option.id],
        };
        setAllOptionsSelected(false);
        setSelectedOptionsIds(newSelectedOptionsIds);
    };

    const clickOnAllOptionsSelect = () => {
        const newSelectedOptionsIds = Array.from(options).reduce(
            (acc: Record<string, boolean>, option) => {
                acc[option.id] = !allOptionsSelected;
                return acc;
            },
            {}
        );
        setAllOptionsSelected(!allOptionsSelected);
        setSelectedOptionsIds(newSelectedOptionsIds);
    };

    const handleApply = () => {
        const selectedOptions = new Set(
            Array.from(options).filter(
                (option) => selectedOptionsIds[option.id]
            )
        );
        onOptionsChange(selectedOptions);
        setIsOpened(false);
    };

    const debouncedSearchCallback = useCallback(
        debounce((value: string) => {
            onSearchInputChange(value);
        }, 500),
        []
    );

    const getHeaderTitle = (): string => {
        if (allOptionsSelected) {
            return allOptionText;
        }
        const selectedOptions = Array.from(options)
            .filter((option) => selectedOptionsIds[option.id])
            .map((option) => option.label);
        if (selectedOptions.length === 0) {
            return noOptionSelctedText;
        }
        if (selectedOptions.length === 1) {
            return selectedOptions[0];
        }
        return `${selectedOptions.length} selected`;
    };

    useEffect(() => {
        setAllOptionsSelected(defaultAllSelected);
    }, [defaultAllSelected]);

    useClickAway(dropdownRef, () => setIsOpened(false));

    const id = useId();

    return (
        <StyledDropdownWrapper
            ref={ref}
            data-testid="testid-multiselectdropdown-wrapper"
        >
            {triggerComponent && (
                <StyledDropdownTriggerWrapper
                    ref={triggerRef}
                    onClick={() => setIsOpened(true)}
                >
                    {triggerComponent}
                </StyledDropdownTriggerWrapper>
            )}
            {!triggerComponent && (
                <StyledDropdownHeader
                    role="combobox"
                    tabIndex={0}
                    aria-labelledby={`multi-select-dropdown-label-${id}`}
                    aria-expanded={isOpened}
                    aria-controls={`multi-select-dropdown-list-${id}`}
                    aria-haspopup="listbox"
                    ref={triggerRef}
                    onClick={() => setIsOpened(!isOpened)}
                >
                    <StyledDropdownHeaderTitle
                        id={`multi-select-dropdown-list-${id}`}
                    >
                        <span>{getHeaderTitle()}</span>
                    </StyledDropdownHeaderTitle>
                    <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} />
                </StyledDropdownHeader>
            )}
            <PopOver
                isOpen={isOpened}
                triggerRef={triggerRef}
                onClose={() => setIsOpened(false)}
                disableBackgroundScroll
                shouldCloseOnOutsideClick
                width={`${triggerRef.current?.getBoundingClientRect().width}px`}
            >
                <StyledDropdownContainer ref={dropdownRef}>
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
                    <StyledDropdownList
                        role="listbox"
                        id={`multi-select-dropdown-list-${id}`}
                    >
                        {shouldEnableAllSelected && (
                            <DropdownListItem
                                displayText={allOptionText}
                                onClickFn={clickOnAllOptionsSelect}
                                isSelected={allOptionsSelected}
                            />
                        )}
                        {Array.from(options || []).map((option, index) => (
                            <DropdownListItem
                                key={option.id}
                                displayText={option.label}
                                onClickFn={() => clickOnOption(option)}
                                isSelected={
                                    allOptionsSelected ||
                                    selectedOptionsIds[option.id]
                                }
                                autoFocus={
                                    selectedOptionsIds[option.id] || index === 0
                                }
                            />
                        ))}
                    </StyledDropdownList>
                    <StyledApplyButton
                        onClick={handleApply}
                        data-testid="testid-multiselectdropdown-submitbutton"
                    >
                        Apply
                    </StyledApplyButton>
                </StyledDropdownContainer>
            </PopOver>
        </StyledDropdownWrapper>
    );
});

export default MultiSelectDropdown;
