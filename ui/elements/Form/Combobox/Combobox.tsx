/* eslint-disable indent */
import { AnimatePresence } from 'framer-motion';
import debounce from 'lodash/debounce';
import React, { useCallback, useEffect, useId, useRef, useState } from 'react';

import DropdownMenu, { BaseItemOptionProps } from '../../DropdownMenu';
import { DROPDOWN_MENU_MAX_HEIGHT } from '../../DropdownMenu/constants';
import {
    defaultSearchMethod,
    getOptionsFromBaseDropdownItems,
    getSelectedValuesForDropdownType,
} from '../../DropdownMenu/utils';
import Overlay from '../../Overlay';
import ComboboxTrigger from './ComboboxTrigger';
import { ComboboxProps } from './types';
import { calculateDropdownMenuPositionForCombobox } from './utils';

/**
 * Comobobox component allows users to select single or multiple items
 * from a filtered list of options, where the list is dynamically updated
 * based on user input.
 *
 * The selected items are displayed as Tag components, and are dismissible.
 */
const Combobox = (props: ComboboxProps) => {
    const {
        menuProps,
        multiple = false,
        items = [],
        value = null,
        onChange = () => {},
        onClose = () => {},
        onTextInputChange,
        applyOnOptionSelectInMultipleMode = true,
        useDefaultSearchMethod = true,
        tagProps = {},
        showActionButtons,
    } = props;

    let width;
    let fullWidth;

    if (menuProps) {
        ({ width, fullWidth } = menuProps);
    } else {
        width = '300px';
        fullWidth = true;
    }

    const id = useId();
    const dropdownMenuId = `dropdown-menu-${id}`;

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [options, setOptions] = useState<BaseItemOptionProps[]>([]);
    const [inputText, setInputText] = useState<string>('');
    const [dropdownMenuHeight, setDropdownMenuHeight] = useState(
        DROPDOWN_MENU_MAX_HEIGHT
    );
    const [overlayStyles, setOverlayStyles] = useState<React.CSSProperties>({});
    const [searchedOptions, setSearchedOptions] = useState<
        BaseItemOptionProps[] | null
    >(null);
    const [selectedOptions, setSelectedOptions] = useState<
        BaseItemOptionProps | BaseItemOptionProps[]
    >(getSelectedValuesForDropdownType(multiple, value));

    const triggerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownMenuRef = useRef<HTMLDivElement>(null);

    const handleDropdownMenuClose = (
        values: BaseItemOptionProps | BaseItemOptionProps[]
    ) => {
        setIsOpen(false);
        onClose(values);
        inputRef?.current?.focus();
    };

    const onItemDismissClick = (item: BaseItemOptionProps) => {
        if (multiple) {
            const newSelectedOptions = (
                selectedOptions as BaseItemOptionProps[]
            ).filter((opt) => opt.value !== item.value);
            setSelectedOptions(newSelectedOptions);
            onChange(newSelectedOptions);
        } else {
            setSelectedOptions([]);
            onChange(null);
        }
    };

    const handleSearchInputChange = (text: string) => {
        setInputText(text);

        if (useDefaultSearchMethod) {
            const filteredOptions = defaultSearchMethod(text, options);
            if (filteredOptions.length > 0 || text) {
                setSearchedOptions(filteredOptions);
            } else {
                setSearchedOptions([]);
            }
        }

        if (typeof onTextInputChange === 'function') {
            onTextInputChange(text);
        }
    };

    const handleDebouncedSearchInputChange = useCallback(
        debounce((text: string) => handleSearchInputChange(text), 500),
        [options, useDefaultSearchMethod]
    );

    const [dropdownMenuPosition, setDropdownMenuPosition] = useState(
        calculateDropdownMenuPositionForCombobox(triggerRef).position
    );

    useEffect(() => {
        setSelectedOptions(getSelectedValuesForDropdownType(multiple, value));
    }, [value, items, multiple]);

    useEffect(() => {
        const filteredOptions = getOptionsFromBaseDropdownItems(items);
        setOptions(filteredOptions);
        setSearchedOptions(null);
    }, [items]);

    useEffect(() => {
        const { position, maxHeight, style } =
            calculateDropdownMenuPositionForCombobox(triggerRef);
        setDropdownMenuHeight(maxHeight);
        setDropdownMenuPosition(position);
        setOverlayStyles(style);
    }, [selectedOptions, isOpen]);

    return (
        <AnimatePresence>
            <ComboboxTrigger
                {...props}
                ref={triggerRef}
                inputRef={inputRef}
                onTriggerClick={() => {
                    setIsOpen(!isOpen);
                }}
                selectedItems={selectedOptions}
                onItemDismissClick={onItemDismissClick}
                inputText={inputText}
                onTextInputChange={(text) => {
                    handleDebouncedSearchInputChange(text);
                    setIsOpen(true);
                }}
                isOpen={isOpen}
                dropdownMenuId={dropdownMenuId}
                tagProps={tagProps}
            />
            {isOpen && (
                <Overlay
                    position={dropdownMenuPosition}
                    shouldFocusOnFirstElement={false}
                    shouldDisableScroll={isOpen}
                    onOverlayClick={() => {
                        handleDropdownMenuClose(selectedOptions);
                        handleSearchInputChange('');
                    }}
                    style={overlayStyles}
                >
                    <DropdownMenu
                        {...props}
                        id={dropdownMenuId}
                        applyOnOptionSelectInMultipleMode={
                            applyOnOptionSelectInMultipleMode
                        }
                        items={
                            Array.isArray(searchedOptions)
                                ? searchedOptions
                                : items
                        }
                        searchable={false}
                        width={
                            fullWidth
                                ? `${
                                      triggerRef.current?.getBoundingClientRect()
                                          .width
                                  }px`
                                : width
                        }
                        maxHeight={`${dropdownMenuHeight}px`}
                        ref={dropdownMenuRef}
                        onChange={(values) => {
                            setSelectedOptions(values);
                            onChange(values);
                            if (multiple && !showActionButtons) {
                                inputRef?.current?.focus();
                            } else {
                                handleDropdownMenuClose(values);
                            }
                            handleSearchInputChange('');
                        }}
                    />
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default Combobox;
